
    
    var textdata = [];
    textdata[0] = "HTML";
    textdata[1] = "JavaScript";
    textdata[2] = "Bootstrap";
    textdata[3] = "CSS";
    var i = 0;
    // alert(textdata.length);
    const gettext = () => {
        document.getElementById('getstyle').innerHTML = textdata[i];
    if(i < textdata.length - 1){
        i++;
    }else{
        i =0;
    }
   
    setTimeout("gettext()", 2000);
}
window.onload = gettext;

const validate = () => {
    var phone = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var response = document.getElementById('response');
    // var colo = "rgb(206,212,218)";
    if(phone == ""){
       response.innerHTML = "Please add phone number";
       document.getElementById('number').style.border = "1px solid red";
       return false;
    }else if(email == ""){
        response.innerHTML = "Please add user email";
        document.getElementById('number').style.border = "1px solid rgb(206,212,218)";
        document.getElementById('email').style.border = "1px solid red";
        return false;
    }else if(message == ""){
        response.innerHTML = "Please add message";
        document.getElementById('number').style.border = "1px solid rgb(206,212,218)";
        document.getElementById('email').style.border = "1px solid rgb(206,212,218)";
        document.getElementById('message').style.border = "1px solid red";
        return false;
    }else{

    }
}