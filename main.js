require("dotenv").config();
const port = 3000;
const express = require("express"),
  app = express(),
  layouts = require("express-ejs-layouts"),
  bodyParser = require("body-parser"),
  http = require("http").createServer(app),
  errorController = require("./controllers/errorController"),
  productController = require('./controllers/productController'),
  //Router 모듈 사용
  home = require('./routes/homeRoute'),
  map = require('./routes/mapRoute'),
  product = require('./routes/productRoute'),
  zeroWasteProduct = require('./routes/zeroWasteProductRoute'),
  upcyclingProduct = require('./routes/upcyclingProductRoute'),
  lowCarbonProduct = require('./routes/lowCarbonProductRoute'),
  productdetail = require('./routes/productDetailRoute'),
  productscrap = require('./routes/productScrapRoute'),
  mapscrap = require('./routes/mapScrapRoute'),
  signup = require('./routes/signupRoute'),
  profile = require('./routes/profileRoute'),
  login = require('./routes/loginRoute'),
  store = require('./routes/storeRoute');
  
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`));

//기본 미들웨어 함수로 등록
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// public 경로 지정
app.use(express.static(`${__dirname}/public`));

//기본 미들웨어 함수로 등록
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 레이아웃 사용
app.use(layouts);

//라우터 호출
app.use("/", home);
app.use("/home", home);
app.use("/map", map);
app.use("/product", product);
app.use("/upcyclingProduct", upcyclingProduct);
app.use("/zeroWasteProduct", zeroWasteProduct);
app.use("/lowCarbonProduct", lowCarbonProduct);
app.use("/productdetail", productdetail);
app.use("/productscrap", productscrap);
app.use("/mapscrap", mapscrap);
app.use("/login", login);
app.use("/profile", profile);
app.use("/signup", signup);
app.use("/store", store);

//에러 처리 위한 미들웨어 사용
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

// 포트 : 3000
app.listen(port, () => {
  console.log(`Listeninig to port ${port}`);
});
