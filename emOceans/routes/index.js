var express = require('express');
var router = express.Router();

// do all these declarations belong in here or in app.js?????????????????????
const config = require('./config');

var bcrypt = require('bcrypt-nodejs');

var helmet = require('helmet');
app.use(helmet());

var expressSession = require('express-session');
const sessionOptions = {
  secret: config.sessionSecret,
  resave: false,
  saveUnitialized: true,
  // cookie: {secure: true}
};
app.use(expressSession(sessionOptions))

// DO WE NEED THIS? or something like it? should it be in app.js?
app.use('*', (req, res, next) => {
  if (req.session.loggedIn) {
    res.locals.name = req.session.name
    res.locals.email = req.session.name
    res.locals.loggedIn = true;
  } else {
    res.locals.name = "";
    res.locals.email = "";
    res.locals.loggedIn = false;
  }
  next();
})

var mysql = require('mysql');
let connection = mysql.createConnection(config.db);
connection.connect();

/* GET home page. */
router.get('/', function (req, res, next) {
  if (!req.session.loggedIn) {
    res.redirect('/splash?msg=mustLogIn')
  } else {
    res.render('index')
  }
});

router.get("/login", (req, res, next) => {
  res.render("login");
})

// loginProcess
app.post('/loginProcess', (req, res, next) => {
  res.json(req.body)
})

router.get("/register", (req, res, next) => {
  let msg;
  if (req.query.mes == 'registered') {
    msg = 'This email address is already registered.'
  }
  res.render("register", {
    msg
  });
})

// registerProcess
app.post('/registerProcess', (req, res, next) => {
  res.json(req.body)
})

router.get("/create", (req, res, next) => {
  res.render("create");
})

router.post("/addMood", (req, res, next) => {
  res.json(req.body)
})
//above function will also res.redirect to /moodBoards when it's working!

router.get("/moodBoards", (req, res, next) => {
  res.render("create");
})


router.get('/logout', (req, res, next) => {
  // delete all session variables for this user
  req.session.destroy();
  res.redirect('/login?msg=loggedOut')
})

module.exports = router;
