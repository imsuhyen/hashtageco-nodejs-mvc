const db = require("../models/index"),
  Member = db.member;
Op = db.Sequelize.Op;

exports.signup = async (res, req) => {
  if (req.body.password.length < 8 || req.body.password.length > 16) {
    res.send("<script>alert('회원가입에 실패했습니다. 비밀번호는 8자리 이상 16 자리 이하여야 합니다.');location.href='/signup';</script>");
  } else {
    // 회원 가입
    db.member
      .create({
        // create
        // member_id: req.body.member_id,
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password,
      })
      .then((result) => {
        console.log("회원가입 완료");
        // res.render("home");
        res.send("<script>alert('회원가입이 완료되었습니다. 로그인을 진행해주세요.');location.href='/login';</script>");
      })
      .catch((err) => {
        console.log(err);
        console.log("회원가입 실패");
        res.send("<script>alert('회원가입에 실패하였습니다.');location.href='/signup';</script>");
      });
  }
};

exports.login = (req, res) => {
  res.render("login");
};

// exports.profile = (req, res) => {
//   res.render("profile");
// };

exports.profile = function (req, res) {
  console.log("session 객체 확인(profile) :", req.session);
  if (req.session.login == true) {
    res.render("profile");
  } else {
    res.send("<script>alert('로그인을 먼저 해주세요.');location.href='/home';</script>");
  }
};