function setCat(data,val){
    var o = document.createElement("option");
    o.text = val + " -" + data;
    o.value = data;
    document.getElementById("user").add(o);
}


$(document).ready(function() {
    $('#load').hide();

    $.get('http://3.94.45.77/api/v1/userlist',function(d){
            for(var obj in d){
                setCat(obj,d[obj])
            }
    });

    $("#upload").click(function(e){
        $('#load').show();
        console.log($("#user").find(":selected").text().split("-")[1])
        $.ajax({
            dataType : "json",
            contentType: 'application/json',
            type : 'DELETE',
            url : 'http://3.94.45.77/api/v1/users/'+ $("#user").find(":selected").text().split("-")[1] ,
            success : function(data){
            if (data.code == 404) {
                $('#errorAlert').text("no USER of this name").show();
                $('#successAlert').hide();
                $('#load').hide();
            }
            else {
                $('#load').hide();
                $('#errorAlert').hide();
                $('#successAlert').text("USER Removed").show();
            }
            }});
        event.preventDefault();});

});
