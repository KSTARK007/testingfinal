
function getBase64(file) {
    var encoded = null;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load" , function(e){
      encoded = reader.result.replace(/^data:(.*;base64,)?/, '');
      if ((encoded.length % 4) > 0) {
        encoded += '='.repeat(4 - (encoded.length % 4));
      }
      document.getElementById("img").src = reader.result;
      document.getElementById("b64").innerHTML = reader.result;
  });
}


function makeEntry(data){
    
}

function putBase64(value) {
    document.getElementById("img").src = value;
}

function addchild(val)
{
    var i = document.createElement("img");
    i.setAttribute("height","300");
    i.setAttribute("src",val);
    i.setAttribute("class")
    document.getElementById("images").appendChild(i);
    document.getElementById("images").appendChild(document.createElement("br"));
    document.getElementById("images").appendChild(document.createElement("br"));
}
function removeChlid(){
    var k = document.createElement("div");
    k.setAttribute("id","images");
    var item = document.getElementById("images");
    item.parentNode.removeChild(item);
    document.body.appendChild(k)
}

$(document).ready(function() {
    $('#load').hide();
    $("#upload").click(function(e){
        $('#load').show();
        $.ajax({
            dataType : "json",
            contentType: 'application/json',
            type : 'GET',
            url : 'http://3.94.45.77/api/v1/categories/'+ $("#cat").find(":selected").text() +'/acts',
            success : function(data){
            if (data.code == 400) {
                $('#errorAlert').text("categories not avaliable").show();
                $('#successAlert').hide();
                $('#load').hide();
            }

            if (data.code == 405) {
                $('#errorAlert').text("actId repeated").show();
                $('#successAlert').hide();
                $('#load').hide();
            }
            if (data.code == 406) {
                $('#errorAlert').text("not a valid dataTime").show();
                $('#successAlert').hide();
                $('#load').hide();
            }
            if(data.code == 407) {
                $('#errorAlert').text("Username not avaliable").show();
                $('#successAlert').hide();
                $('#load').hide();
            }
            if(data.code == 408) {
                $('#errorAlert').text("Base64 error").show();
                $('#successAlert').hide();
                $('#load').hide();
            }
            if(data.code == 409) {
                $('#errorAlert').text("unexpected upvote data sent").show();
                $('#successAlert').hide();
                $('#load').hide();
            }
            if(data.code == 410) {
                $('#errorAlert').text("Category name wrong").show();
                $('#successAlert').hide();
                $('#load').hide();
            }
            if(data.code != 200) {
                $('#load').hide();
                removeChlid()
                if(data.length == 0 ){
                    $('#errorAlert').text("Category name wrong").show();
                    $('#successAlert').hide();
                }
                var j ;
                for(j=0;j<data.length;j++){
                    addchild(data[j].img)
                }
            }
            }});
        event.preventDefault();

});
});