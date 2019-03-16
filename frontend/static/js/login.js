
function goToIndex(){

}

$(document).ready(function() {
    $('#load').hide();

    $('#submit').click(function(event) {

    if($('#nameInput').val() == '' || $('#passwordInput').val() == ''){
        $('#errorAlert').text("username or password not entered").show();
        $('#successAlert').hide();
    }   
    else{
        $('#load').show()
        $.ajax({
            data : JSON.stringify({
                name : $('#nameInput').val(),
                password : sha1($('#passwordInput').val())
            }),
            dataType : "json",
            contentType: 'application/json',
            type : 'POST',
            url : 'http://52.3.134.60:8080/api/v1/users/login',
            success : function(data){

            if (data.code == 405 || data.code == 400) {
                $('#errorAlert').text(" invalid UserName or Password ").show();
                $('#successAlert').hide();
                $('#load').hide();
            }
            if(data.code == 201) {
                $('#successAlert').text("Registration Successful").show();
                $('#errorAlert').hide();
                $('#nameInput').hide();
                $('#passwordInput').hide();
                $('#submit').hide();
                $('#load').hide();
                $('#home').show();
                if($('#loginCheck').text() != "upload"){
                    window.location.href = "/"+data.userId ;
                }
                else
                {
                    window.location.href = "/upload"
                }
            }
 
        }});
    }
        event.preventDefault();

});
});