let change_password = function(){
    let USER_URL = '../api/v1/api.php?endpoint=user';
    let oldPassword = $("#old-password").val();
    let password = $("#new-password").val();
    let password_confirm = $("#new-password-confirm").val();
    if(password == password_confirm)
    $.ajax({
        url: USER_URL,
        method: 'PUT',
        data: JSON.stringify({
            'oldPassword': oldPassword,
            'password': password,
            'token': sessionStorage.getItem('token')
        }),
        beforeSend: beforeSend,
        dataType: 'json',
        success: function (response) {
            console.log(response);
            if(response){
                //window.location.assign("admin.html");
                console.log("Your password was changed");
                $("#change-password-panel").html(
                    "Password Updated."
                )
            } else {
                console.log("Password not changed");
                alert('Password not created, sorry.');
            }
        }
    })
};