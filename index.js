window.onload = function () {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var passwordRepeat = document.getElementById("passwordRepeat");
  var agree = document.getElementById("agree");

  var register = document.getElementById("register");
  register.addEventListener("click", Register);

  function Register() {
    if (agree.checked) {
      if (
        password.value === passwordRepeat.value &&
        name.value !== "" &&
        email.value !== ""
      ) {
        localStorage.setItem("name", name.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        window.location.href = "SignIn.html";
        console.log(myStore);
      } else {
        alert("两次密码输入不一致");
        window.location.href = "index.html";
      }
    } else {
      alert("请阅读注册条款");
    }
  }
};
