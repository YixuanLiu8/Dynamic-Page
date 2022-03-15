var Name = document.getElementById("Displayname");
var Namealert = document.getElementById("Namealert");
var NewName = document.getElementById("Newname");

var Email = document.getElementById("Email");
var Emailalert = document.getElementById("Emailalert");
var NewEmail = document.getElementById("NewEmail");

var Phone = document.getElementById("Phone");
var Phonealert = document.getElementById("Phonealert");
var NewPhone = document.getElementById("NewPhone");

var Zipcode = document.getElementById("Zipcode");
var Zipcodealert = document.getElementById("Zipcodealert");
var NewZipcode = document.getElementById("NewZipcode");

var Pwd = document.getElementById("Password1");
var Pwdalert = document.getElementById("Password1alert");
var NewPwd = document.getElementById("NewPassword1");

var PwdConf = document.getElementById("PasswordConfirmation");
var PwdConfalert = document.getElementById("PasswordConfirmationalert");
var NewPwdConf = document.getElementById("NewPasswordConfirmation");
var submitBtn = document.getElementById("submitBtn")

function validateFill(){
  var valid = true;
  //validate accountname
  {if (!validate(Name))
  {
    Namealert.innerHTML = "Account name is required.\n";  
    valid = false;
  } else if (!validateAccountName(Name)) {
    Namealert.innerHTML = "Account name can only be upper or lower case letters and numbers more than 2 digits, but may not start with a number.\n";
    valid = false;
    }
    var t0=setInterval((function(){Namealert.style.display="none";}),10000);
  if(Namealert.style.display=="none"){
	clearInterval(t0);
  Namealert.style.display="block";
  }
  else{
  t0=setInterval((function(){Namealert.style.display="none";}),10000);
  }
	}
  //validate email
 {if (!validate(Email)) {
    Emailalert.innerHTML = "E-mail address is required.\n";
    valid = false;
  } else if (!validateEmail(Email)) {
    Emailalert.innerHTML = "Fill in your e-mail address in correct form.(x@x.x)\n";
    valid = false;
  }
  var t1=setInterval((function(){Emailalert.style.display="none";}),10000);
  if(Emailalert.style.display=="none"){
	clearInterval(t1);
  Emailalert.style.display="block";
  }
  else{
  t1=setInterval((function(){Emailalert.style.display="none";}),10000);
  }
  }
  //validate phone
 { if (!validate(Phone)) {
    Phonealert.innerHTML = "Phone number is required.\n";
    valid = false;
  } else if (!validatePhone(Phone)) {
    Phonealert.innerHTML = "Fill in your phone number in correct form.(xxx-xxx-xxxx)\n";
    valid = false;
  }
  var t2=setInterval((function(){Phonealert.style.display="none";}),10000);
  if(Phonealert.style.display=="none"){
	clearInterval(t2);
  Phonealert.style.display="block";
  }
  else{
  t2=setInterval((function(){Phonealert.style.display="none";}),10000);
  }
  }
  //validate zipcode
  {if (!validate(Zipcode)) {
    Zipcodealert.innerHTML = "zipcode is required.\n";
     valid = false;
  } else if (!validateZipCode(Zipcode)) {
    Zipcodealert.innerHTML = "Fill in your ZipCode in correct form.\n";
    valid = false;
  }
  var t3=setInterval((function(){Zipcodealert.style.display="none";}),10000);
  if(Zipcodealert.style.display=="none"){
	clearInterval(t3);
  Zipcodealert.style.display="block";
  }
  else{
  t3=setInterval((function(){Zipcodealert.style.display="none";}),10000);
  }
  }
  //password
  {if (!validate(Pwd)) {
    Pwdalert.innerHTML = "Pasword is required.\n";
    valid = false;}
    var t4=setInterval((function(){Pwdalert.style.display="none";}),10000);
  if(Pwdalert.style.display=="none"){
	clearInterval(t4);
  Pwdalert.style.display="block";
  }
  else{
  t4=setInterval((function(){Pwdalert.style.display="none";}),10000);
  }
  }
  {if (!validate(PwdConf)) {
    PwdConfalert.innerHTML = "pasword Confirmation is required.\n";
    valid = false;}
   var t5=setInterval((function(){PwdConfalert.style.display="none";}),10000);
  if(PwdConfalert.style.display=="none"){
	clearInterval(t5);
  PwdConfalert.style.display="block";
  }
  else{
  t5=setInterval((function(){PwdConfalert.style.display="none";}),10000); 
  }
  }
 {if (!validatePassword(Pwd, PwdConf)) {
    PwdConfalert.innerHTML = "The password confirmation does not match the password!\n";
    valid = false;
  }
  var t5=setInterval((function(){PwdConfalert.style.display="none";}),10000);
  if(PwdConfalert.style.display=="none"){
	clearInterval(t5);
  PwdConfalert.style.display="block";
  }
  else{
  t5=setInterval((function(){PwdConfalert.style.display="none";}),10000);
  }}
  if (valid) {
    updateContent();
  }
  clearContent();
  //cleartheTimeout1();
}
function validate(element) {
  if (element.value == "" || element.value == null) {
    return false;
  }
  return true;
}

function validateAccountName(element) {
  var reg = /^[a-zA-z][a-zA-Z0-9]{2,}$/;
  if (element.value.match(reg) || (!validate(element))) {
    return true;
  }
  return false;
}

function validateEmail(element) {
  var reg = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})$/;
  if (element.value.match(reg) || (!validate(element))) {
    return true;
  }
  return false;
}

function validatePhone(element) {
  var reg = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
  if (element.value.match(reg) || (!validate(element))) {
    return true;
  }
  return false;
}

function validateZipCode(element) {
  var reg = /^([0-9]{5})$/;
  if (element.value.match(reg) || (!validate(element))) {
    return true;
  }
  return false;
}

function validatePassword(element1, element2) {
  if (element1.value != element2.value && validate(element1) && validate(element2)) {
    return false;
  }
  return true;
}

Pwd.onkeyup = Pwd.onchange = function() {
  Pwd.value = Pwd.value.replace(/./g, '*');
};
PwdConf.onkeyup = PwdConf.onchange = function() {
  PwdConf.value = PwdConf.value.replace(/./g, '*');
};

function updateContent() {
  if (Name.value != NewName.innerHTML) {
    Namealert.innerHTML = "The name has changed from " + NewName.innerHTML + " to " + Name.value + "\n";
    NewName.innerHTML = Name.value;
  }
  if (Email.value != NewEmail.innerHTML) {
    Emailalert.innerHTML = "The email has changed from " + NewEmail.innerHTML + " to " + Email.value + "\n";
    NewEmail.innerHTML = Email.value;
  }
  if (Phone.value != NewPhone.innerHTML) {
    Phonealert.innerHTML = "The phonenumber has changed from " + NewPhone.innerHTML + " to " + Phone.value + "\n";
    NewPhone.innerHTML = Phone.value;
  }
  if (Zipcode.value != NewZipcode.innerHTML) {
    Zipcodealert.innerHTML = "The zipcode has changed from " + NewZipcode.innerHTML + " to " + Zipcode.value + "\n";
    NewZipcode.innerHTML = Zipcode.value;
  }
  if (Pwd.value != NewPwd.innerHTML) {
    Pwdalert.innerHTML = "The password has changed from " + NewPwd.innerHTML + " to " + Pwd.value + "\n";
    NewPwd.innerHTML = Pwd.value;
  }
  if (PwdConf.value != NewPwdConf.innerHTML) {
    PwdConfalert.innerHTML = "The password has changed from " + NewPwdConf.innerHTML + " to " + PwdConf.value + "\n";
    NewPwdConf.innerHTML = PwdConf.value;
  }
}

function clearContent() {
  Name.value = "";
  Email.value = "";
  Phone.value = "";
  Zipcode.value = "";
  Pwd.value = "";
  PwdConf.value = "";
}
