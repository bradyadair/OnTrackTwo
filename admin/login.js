let LOGIN_URL = '../api/v1/api.php?endpoint=token';

login = function () {
    console.log(1);
    let username = $("#username").val();
    let password = $("#password").val();
    console.log(2);
    $.ajax({
        url: LOGIN_URL,
        method: 'POST',
        data: JSON.stringify({
            'username': username,
            'password': password
        }),
        // dataType: 'json',
        success: function (response) {
            console.log(3);
            console.log("YASS", response);
            if(response){
                localStorage.setItem("token", response);
                window.location.assign("admin.html");
            } else {
                alert('Unrecognized username and/or password.');
            }
        },
        error: function(response){
            console.log(4);
            console.log(response);
        }
    })
};