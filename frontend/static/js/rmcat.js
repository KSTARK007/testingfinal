function setCat(data,val){
    var o = document.createElement("option");
    o.text = data + "-" + val;
    o.value = data
    document.getElementById("cat").add(o);
}


$(document).ready(function() {
    $('#load').hide();

    $.get('http://52.3.134.60:8000/api/v1/categories',function(d){
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
            url : 'http://52.3.134.60:8000/api/v1/categories/'+ $("#cat").find(":selected").text().split("-")[0] ,
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
