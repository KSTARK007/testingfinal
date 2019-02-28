function setCat(data,val){
    var o = document.createElement("option");
    o.text = data + "-" + val;
    o.value = data
    document.getElementById("cat").add(o);
}


$(document).ready(function() {
    $('#load').hide();

    $.get('http://3.94.45.77/api/v1/categories',function(d){
            for(var obj in d){
                setCat(obj,d[obj])
            }
    });

    $("#upload").click(function(e){
        $('#load').show();
        $.ajax({
            dataType : "json",
            contentType: 'application/json',
            type : 'DELETE',
            url : 'http://3.94.45.77/api/v1/categories/'+ $("#cat").find(":selected").text().split("-")[0] ,
            success : function(data){
            if (data.code == 404) {
                $('#errorAlert').text("no category of this name").show();
                $('#successAlert').hide();
                $('#load').hide();
            }
            else {
                $('#load').hide();
                $('#errorAlert').hide();
                $('#successAlert').text("Category Removed").show();
            }
            }});
        event.preventDefault();});

});
