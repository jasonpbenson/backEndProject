var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
});

router.get("/login", (req, res, next) => {
  res.render("login");
})

// loginProcess

router.get("/register", (req, res, next) => {
  res.render("register");
})

// registerProcess

router.get("/create", (req, res, next) => {
  res.render("create");
})


module.exports = router;
