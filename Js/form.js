var name1 = document.getElementById("name");
console.log(name1);
var email = document.getElementById("email");
console.log(email);
var telephone = document.getElementById("telephone");
console.log(telephone);
var message = document.getElementById("message");
console.log(message);

function validationName() {
  if (name1.value.length == 0) {
    document.getElementById("pname").innerHTML = `Name is Required`;
    return false;
  }
  var reg = /^[a-zA-Z]*\s{1}[a-zA-Z]*$/;
  if (reg.test(name1.value) == false) {
    document.getElementById("pname").innerHTML = `Enter Valid Name`;
    return false;
  }
  document.getElementById(
    "pname"
  ).innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validationEmail() {
  if (email.value.length == 0) {
    document.getElementById("pemail").innerHTML = `Email is Required`;
    return false;
  }
  var reg = /^[a-zA-Z\._\-[0-9]*[@][a-zA-Z]*[\.][a-z]{2,4}$/;
  if (reg.test(email.value) == false) {
    document.getElementById("pemail").innerHTML = `Enter Valid Email`;
    return false;
  }
  document.getElementById(
    "pemail"
  ).innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validationTele() {
  var reg = /^01[0-2][0-9]{8}/;
  if (telephone.value.length == 0) {
    document.getElementById("ptele").innerHTML = `Telephone Number is Required`;
    return false;
  }
  if (reg.test(telephone.value) == false) {
    document.getElementById("ptele").innerHTML = `Enter valid Telephone Number`;
    return false;
  }
  document.getElementById(
    "ptele"
  ).innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validationMassage() {
  if (message.value.length == 0) {
    document.getElementById("pmessage").innerHTML = `Message is Required`;
    return false;
  }
  document.getElementById(
    "pmessage"
  ).innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function send() {
  if (
    validationName() &&
    validationEmail() &&
    validationMassage() &&
    validationTele()
  ) {
    return true;
  } else {
    document.getElementById("psubmit").innerHTML = `Enter Valid Data`;
    setTimeout(() => {
      document.getElementById("psubmit").style.display = "none";
    }, 2000);
    return false;
  }
}
