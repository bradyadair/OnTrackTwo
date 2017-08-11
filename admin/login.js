let LOGIN_URL = '../api/v1/api.php?endpoint=token';

if ( location.host.substring(0,4) != 'www.' ) {
  window.location.href = "http://www.cottagesofhope.org/weberstate/ontrack/admin/login.html";
}

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
                res = JSON.parse(response)
                console.log(res[0]);
                sessionStorage.setItem("token", res[0]);
                console.log("TEST");
                console.log(res[1]);
                window.location.assign(res[1]);
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