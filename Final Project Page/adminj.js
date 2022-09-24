
var message = "Right Click Disabled!";
function rtclickcheck(keyp) {
if (navigator.appName == "Netscape" &&
keyp.which == 3) {
alert(message);
return false;
}
if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) {
alert(message);
return false;
}
}
document.onmousedown = rtclickcheck;
function check(form) {
if (form.username.value == "admin" && form.password.value == "123") {
window.open("S1.html")
} else {
alert("Username Or Password Doesn't Match!");
}
}
