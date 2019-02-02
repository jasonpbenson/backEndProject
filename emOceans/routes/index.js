var express = require('express');
var router = express.Router();

const config = require('../config');

var bcrypt = require('bcrypt-nodejs');

var mysql = require('mysql');
let connection = mysql.createConnection(config.db);
connection.connect();

var expressSession = require('express-session');

/* GET home page. */
router.get('/', function (req, res, next) {
  if (!req.session.loggedIn) {
    res.redirect('/splash?msg=mustLogIn')
  } else {
    let msg;
    if (req.query.msg == 'regSuccess') {
      msg = "You're all signed up! Click on a color below that resemebles you you've felt today, add a mood, a note, if you like, and click save!";
      console.log(msg)
    } else if (req.query.msg == 'loginSuccess') {
      msg = "You're logged in."
    }
    res.render('index')
  }
});

router.get('/splash', (req, res, next) => {
  res.render('splash')
})

router.get("/login", (req, res, next) => {
  let msg;
  if(req.query.msg == 'noUser'){
      msg = '<h2 class="unregisteredEmail">This email is not registered in our system. Please try again or register!</h2>'
  }else if(req.query.msg == 'badPass'){
      msg = '<h2 class="badPassword">This password is not associated with this email. Please enter again</h2>'
  }
res.render('login',{msg});
});

router.post('/loginProcess',(req, res, next)=>{
  const email =  req.body.email;
  const password = req.body.password;
  const checkPasswordQuery = `SELECT * FROM users WHERE email = ?`;
  connection.query(checkPasswordQuery,[email],(error, results)=>{
      if(error){throw error;}
      if(results.length == 0 ){
          res.redirect('/?msg=noUser');
      }else{
          const passwordsMatch = bcrypt.compareSync(password,results[0].hash);
          if(!passwordsMatch){
              res.redirect('/login?msg=badPass');
          }else{
              console.log(results[0].id)
              req.session.firstName = results[0].firstName;
              req.session.lastName = results[0].lastName;
              req.session.email = results[0].email;
              req.session.uid = results[0].id
              req.session.loggedIn = true;
              res.redirect('/?msg=loginSuccess');
          };
      };
  });
});

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
router.post('/registerProcess', (req, res, next) => {
  const hashedPass = bcrypt.hashSync(req.body.password);
  const checkUserQuery = `SELECT * FROM users WHERE email = ?`;
  connection.query(checkUserQuery, [req.body.email], (error, results) => {
    if(error){throw error}
    console.log("results",results);
    if (results.length != 0) {
      res.redirect('/register?msg=registered')
    }else{
      const insertQuery = `INSERT INTO users (firstName, lastName, email, hash, phone)
      VALUES 
      (?,?,?,?,?)`;
      connection.query(insertQuery, [req.body.firstName,req.body.lastName, req.body.email, hashedPass, req.body.phone], (error2, results2) => {
        if(error2) {throw error2}
        res.redirect('/?msg=regSuccess')
      })
    }
  })
  // res.json(req.body)
})

router.get("/create", (req, res, next) => {
  res.render("create");
})

router.post("/addMood", (req, res, next) => {
  const newMood = req.body.newMood;
  const newColor = req.body.newColor;
  const newNote = req.body.newNote;
  const newDate = req.body.newDate;
  const userId = req.session.uid;
  console.log(userId)
  const insertQuery = `INSERT INTO moodData(id, mood, color, note, date, uid)
    VALUES
    (DEFAULT, ?, ?, ?, ?, ?);`
  connection.query(insertQuery, [newMood, newColor, newNote, newDate, userId], (err, results) => {
    if (err) {
      throw err;
    } else { 

      res.json(req.body)
      // res.redirect('myAccount')
    }
  })
//   res.json(req.body)
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

