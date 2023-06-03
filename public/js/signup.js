//회원가입 관련 js
document.getElementById("signup-form").onsubmit = function () {
  //signup.ejs에 form한 정보 가져오기
  let name = this.name.value;
  let nickname = this.nickname.value;
  let email = this.email.value;
  let password = this.password.value;
  let passwordCheck = this.passwordCheck.value;
  let check = true;

  //이메일 오류
  if (email.includes("@")) {
    let emailId = email.split("@")[0];
    let emailServer = email.split("@")[1];
    //이메일 공백 오류
    if (emailId === "" || emailServer === "") {
      document.getElementById("emailError").innerHTML = "이메일이 올바르지 않습니다.";
      check = false;
    } else {
      document.getElementById("emailError").innerHTML = "";
    }
  }
  //이메일 @ 오류
  else {
    document.getElementById("emailError").innerHTML = "이메일이 올바르지 않습니다.";
    check = false;
  }

  //이름 공백 오류
  if (name === "") {
    document.getElementById("nameError").innerHTML = "이름이 올바르지 않습니다.";
    check = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  //닉네임 공백 오류
  if (nickname === "") {
    document.getElementById("nicknameError").innerHTML = "닉네임이 올바르지 않습니다.";
    check = false;
  } else {
    document.getElementById("nicknameError").innerHTML = "";
  }

  //비밀번호 오류
  if (password !== passwordCheck) {
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordCheckError").innerHTML = "비밀번호가 동일하지 않습니다.";
    check = false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordCheckError").innerHTML = "";
  }
  //비밀번호 공백 오류
  if (password === "") {
    document.getElementById("passwordError").innerHTML = "비밀번호를 입력해주세요.";
    check = false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
  }
  //비밀번호 확인 공백
  if (passwordCheck === "") {
    document.getElementById("passwordCheckError").innerHTML = "비밀번호를 다시 입력해주세요.";
    check = false;
  } else {
    document.getElementById("passwordCheckError").innerHTML = "";
  }

  return check;
};
