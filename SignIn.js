window.onload = function () {
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  var login = document.getElementById("login");
  login.addEventListener("click", Login);

  function Login() {
    console.log("working");
    if (username.value !== "" && password.value !== "") {
      if (localStorage.getItem("name") === password.value) {
        //alert("登陆成功！");
        console.log("alert");
        window.location.assign("https://www.hackerstart.cn/#/index");
        //window.open = "hhttps://www.hackerstart.cn/#/index";
      } else {
        alert("用户名或密码有误");
        window.location.assign("SignIn.html");
      }
    } else {
      alert("请输入用户名和密码");
    }
  }
};
