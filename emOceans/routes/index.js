var express = require('express');
var router = express.Router();

const config = require('../config');

var bcrypt = require('bcrypt-nodejs');

var mysql = require('mysql'); 
let connection = mysql.createConnection(config.db);
connection.connect();

var expressSession = require('express-session');

const apiBaseUrl = `https://api.datamuse.com/words?ml=`;

var moment = require('moment');
moment().format();


/* GET home page. */
router.get('/', (req, res, next) => {
  let msg = "";
  if (!req.session.loggedIn) {
    res.redirect('/splash?msg=mustLogIn')
  } else {
    const selectionQuery = `SELECT * FROM moodData WHERE uid = ? AND date = CURDATE();`;
    connection.query(selectionQuery, [req.session.uid], (error, results) => {
      if(error) {throw error}
      if (results.length > 5) {
        res.redirect('/moodboards?msg=allDone')
      } else if (results.length < 5) {
        msg = "createNew"
      } else if (req.query.msg == 'create') {
        msg = "createNew"
      }
      res.render('index', { msg })
    })
  }
});


router.get('/splash', (req, res, next) => {
  let msg = "";
  if (req.query.msg == 'mustLogIn') {
    msg = "Please log in or register."
    console.log(msg)
  }
  res.render('splash', {msg})
})

router.get("/login", (req, res, next) => {
  let msg;
  if(req.query.msg == 'noUser'){  //if query parameters, after the ? mark;
      msg = '<h2 class="unregisteredEmail">This email is not registered in our system. Please try again or register!</h2>'
  }else if(req.query.msg == 'badPass'){
      msg = '<h2 class="badPassword">This password is not associated with this email. Please enter again.</h2>'
  }
  // console.log(msg); we are receiving message in console.
res.render('login',{msg});
});

router.post('/loginProcess',(req, res, next)=>{
  const email =  req.body.email;
  const password = req.body.password;
  const checkPasswordQuery = `SELECT * FROM users WHERE email = ?`;//will tell on next line
  connection.query(checkPasswordQuery,[email],(error, results)=>{
      if(error){throw error;}
      if(results.length == 0 ){
          res.redirect('/login?msg=noUser');
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
              res.redirect('/?msg=create');
          };
      };
  });
});

router.get("/register", (req, res, next) => {
  let msg = "";
  if (req.query.msg == 'registered') {
    msg = `This email address is already registered. Please <a href="/login">log in</a>.`
  } else if (req.query.msg == 'password6chars') {
    msg = 'Your password must be at last 6 characters.'
  } else {
    // msg = 'Please register.'
  }
  res.render("register", {
    msg
  });
})
 
// registerProcess
const passwordRegex = new RegExp("^.{6,}$");
router.post('/registerProcess', (req, res, next) => {
  const hashedPass = bcrypt.hashSync(req.body.password);
  const checkUserQuery = `SELECT * FROM users WHERE email = ?`;
  connection.query(checkUserQuery, [req.body.email], (error, results) => {
    if(error){throw error}
    console.log("results",results);
    if (results.length != 0) {
      res.redirect('/register?msg=registered')
    }else if(!passwordRegex.test(req.body.password)) {
      res.redirect('/register?msg=password6chars')
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

router.post("/addMood", (req, res, next) => {
  const newMood = req.body.newMood;
  const newColor = req.body.newColor;
  const newNote = req.body.newNote;
  const newDate = req.body.newDate;
  const userId = req.session.uid;
  const insertQuery = `INSERT INTO moodData(id, mood, color, note, date, uid)
    VALUES
    (DEFAULT, ?, ?, ?, ?, ?);`
  connection.query(insertQuery, [newMood, newColor, newNote, newDate, userId], (err, results) => {
    if (err) {
      throw err;
    } else { 
      res.redirect('moodBoards')
    }
  })
})

router.get("/moodBoards", (req, res, next) => {
  const selectQuery = `SELECT mood, color, note, date FROM moodData
  WHERE WEEK(date) = WEEK(NOW()) AND uid = ? 
  ORDER BY date DESC;`
  connection.query(selectQuery, [req.session.uid], (err, results) => {
    console.log(results)
    if (err) {
      throw err
    } else {
      res.render('moodBoards', { results })
    }
  })
})

router.get("/moodBoards/day", (req, res, next) => {
  const selectQuery = `SELECT mood, color, note, date FROM moodData
  WHERE uid = ? AND date = CURDATE()
  ORDER BY date DESC`;
  connection.query( selectQuery, [req.session.uid], (err, results) => {
    if(err) {
      throw err
    } else {
    res.render("moodBoards", {results})
    }
  })
})

router.get("/moodBoards/week", (req, res, next) => {
  const selectQuery = `SELECT mood, color, note, date FROM moodData
  WHERE WEEK(date) = WEEK(NOW()) AND uid = ? 
  ORDER BY date DESC;`
  connection.query(selectQuery, [req.session.uid], (err, results) => {
    console.log(results)
    if (err) {
      throw err
    } else {
      res.render('moodBoards', { results })
    }
  })
})

router.get("/moodBoards/month", (req, res, next) => {
  const selectQuery = `SELECT mood, color, note, date FROM moodData
  WHERE MONTH(date) = MONTH(NOW()) AND uid = ? 
  ORDER BY date DESC;`
  connection.query(selectQuery, [req.session.uid], (err, results) => {
    console.log(results)
    if (err) {
      throw err
    } else {
      res.render('moodBoards', { results })
    }
  })
})

router.get("/moodBoards/year", (req, res, next) => {
  const selectQuery = `SELECT mood, color, note, date FROM moodData
  WHERE YEAR(date) = YEAR(NOW()) AND uid = ? 
  ORDER BY date DESC;`
  connection.query(selectQuery, [req.session.uid], (err, results) => {
    console.log(results)
    if (err) {
      throw err
    } else {
      res.render('moodBoards', { results })
    }
  })
})

router.get("/about", (req, res, next) => {
  res.render("about");
})

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/login?msg=loggedOut')
})

module.exports = router;

