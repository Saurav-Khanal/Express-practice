var express = require('express');
var router = express.Router();
const userModel=require("./users");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});


router.post("/signup", function (req, res, next) {
  const data = new userModel({
    username: req.body.username,
    email: req.body.email,
    phone:req.body.phone,
  });
  userModel.register(data,req.body.password)
  .then(function(){
    passport.authenticate("local")(req,res,function(){
      res.redirect("/profile");
    })
  })
  .catch(function(err){
    console.log("ERROR:", err);
    res.send(err);
  })
});


module.exports = router;
