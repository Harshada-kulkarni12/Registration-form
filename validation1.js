
function validatefirstname ()
{
var fname=document.getElementById("firstname").value;
var re1 = /^[a-zA-Z\s\'\-]{2,15}$/;

if(re1.test(fname))
{
document.getElementById("FirstNamePrompt").style.color="green";
document.getElementById("FirstNamePrompt").innerHTML="<strong>valid</strong>"
return true;
}
else{
document.getElementById("FirstNamePrompt").style.color="red";
document.getElementById("FirstNamePrompt").innerHTML="<strong>invalid</strong>";
return false;

}
}

function validatelastname ()
{
var lname=document.getElementById("lastname").value;
var re2 = /^[a-zA-Z\s\'\-]{2,15}$/;

if(re2.test(lname))
{
document.getElementById("LastNamePrompt").style.color="green";
document.getElementById("LastNamePrompt").innerHTML="<strong>valid</strong>"
return true;
}
else{
document.getElementById("LastNamePrompt").style.color="red";
document.getElementById("LastNamePrompt").innerHTML="<strong>invalid</strong>";
return false;

}
}