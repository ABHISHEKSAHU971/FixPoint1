var express = require("express");
var router = express.Router();
const path = require('path');
var jwt = require("jsonwebtoken");
const {
  userlist,
  useradd,
  login,
  forgotpassword,
  mobilesend,
  changepassword,
  otpverify,
  forgotpassword1,
  forgotpassword2,
  email,
} = require("../controllers/userControlles");

jwtkey = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    token = token.split(" ")[1];
    jwt.verify(token, process.env.SECRETKEY, (err, valid) => {
      if (err) {
        res.status(401).send("Please provide Valid token ");
      } else {
        next();
      }
    });
    // console.log("middleware", token)
    // next()
  } else {
    res.status(403).send("Please add token with header ");
  }
};

router.get("/", function (req, res, next) {
  res.render("index");
});
router.post("/", email);


router.get("/login", function (req, res, next) {
  res.render("login",{data:false});
});
router.get("/auth-registration", function (req, res, next) {
  res.render("auth-registration", { data: false });
});
router.get("/list", jwtkey, userlist);

router.post("/register", useradd);
router.post("/login", login);
router.get("/forgotpassword", forgotpassword);
router.get("/forgotpassword1", forgotpassword1);
router.get("/forgotpassword2", forgotpassword2);
router.post("/otpverify", otpverify);

router.post("/mobile-send", mobilesend);
router.post("/changepassword/:id", changepassword);

module.exports = router;


// EV OWNER  router
router.get("/views/EVOWNER/2wheel/2owner", function (req, res) {

  res.render('2owner')
});
router.get("/EVOWNER/2wheel/ABOUT/aboutusss", function (req, res) {

  res.render('about2ow')
});
router.get("/EVOWNER/2wheel/SUPPORT/support", function (req, res) {

  res.render('support2ow')
});
router.get("/EVOWNER/2wheel/Emergency", function (req, res) {

  res.render('Emergency2ow')
});
router.get("/EVOWNER/2wheel/Custom", function (req, res) {

  res.render('Custom2ow')
});
router.get("/EVOWNER/2wheel/parts", function (req, res) {

  res.render('parts2ow')
});
router.get("/EVOWNER/2wheel/maintain", function (req, res) {

  res.render('maintain2ow')
});
router.get("/EVOWNER/2wheel/Washing", function (req, res) {

  res.render('Washing2ow')
});
router.get("/EVOWNER/2wheel/query", function (req, res) {

  res.render('query2ow')
});
router.get("/EVOWNER/2wheel/Dashboard/dashboard", function (req, res) {

  res.render('dashboard2w')
});



// Ev owner routes
router.get("/EVOWNER/3wheel/3owner", function (req, res) {
  res.render('3owner')
});
router.get("/EVOWNER/3wheel/ABOUT/about", function (req, res) {
  res.render('about3ow')
});
router.get("/EVOWNER/3wheel/SUPPORT/support", function (req, res) {
  res.render('support3ow')
});
router.get("/EVOWNER/3wheel/Emergency", function (req, res) {
  res.render('Emergency3ow')
});
router.get("/EVOWNER/3wheel/Custom", function (req, res) {
  res.render('Custom3ow')
});
router.get("/EVOWNER/3wheel/parts", function (req, res) {
  res.render('parts3ow')
});
router.get("/EVOWNER/3wheel/maintain", function (req, res) {
  res.render('maintain3ow')
});
router.get("/EVOWNER/3wheel/Washing", function (req, res) {
  res.render('Washing3ow')
});
router.get("/EVOWNER/3wheel/query", function (req, res) {
  res.render('query3ow')
});
router.get("/EVOWNER/3wheel/Dashboard/dashboard", function (req, res) {
  res.render('dashboard3w')
});




router.get("/EVOWNER/4wheel/4owner", function (req, res) {
  
  res.render('4owner')
});
router.get("/EVOWNER/4wheel/ABOUT/about", function (req, res) {
  res.render('about4ow')
});
router.get("/EVOWNER/4wheel/SUPPORT/support", function (req, res) {
  res.render('support4ow')
});
router.get("/EVOWNER/4wheel/Emergency", function (req, res) {
  res.render('Emergency4ow')
});
router.get("/EVOWNER/4wheel/Custom", function (req, res) {
  res.render('Custom4ow')
});
router.get("/EVOWNER/4wheel/parts", function (req, res) {
  res.render('parts4ow')
});
router.get("/EVOWNER/4wheel/maintain", function (req, res) {
  res.render('maintain4ow')
});
router.get("/EVOWNER/4wheel/Washing", function (req, res) {
  res.render('Washing4ow')
});
router.get("/EVOWNER/4wheel/query", function (req, res) {
  res.render('query4ow')
});
router.get("/EVOWNER/4wheel/Dashboard/dashboard", function (req, res) {
  res.render('dashboard4w')
});





router.get("/Files/BLOG/blog", function (req, res) {
  
  res.render('blog')
});
router.get("/Files/ABOUT/aboutusss", function (req, res) {
  
  res.render('aboutusss')
});
router.get("/Files/SUPPORT/support", function (req, res) {
  
  res.render('support')
});




router.get("/2NDEVOWNER/2wheelbulk/2bulk", function (req, res) {
  
  res.render('2bulk')
});
router.get("/2NDEVOWNER/2wheelbulk/Emergency", function (req, res) {
  
  res.render('Emergency')
});
router.get("/2NDEVOWNER/2wheelbulk/Custom", function (req, res) {
  
  res.render('Custom')
});
router.get("/2NDEVOWNER/2wheelbulk/parts", function (req, res) {
  
  res.render('parts')
});
router.get("/2NDEVOWNER/2wheelbulk/maintain", function (req, res) {
  
  res.render('maintain')
});
router.get("/2NDEVOWNER/2wheelbulk/Washing", function (req, res) {
  
  res.render('Washing')
});
router.get("/2NDEVOWNER/2wheelbulk/query", function (req, res) {
  
  res.render('query')
});
router.get("/2NDEVOWNER/2wheelbulk/ABOUT/aboutuss", function (req, res) {
  
  res.render('aboutuss')
});
router.get("/2NDEVOWNER/2wheelbulk/SUPPORT/support1", function (req, res) {
  
  res.render('support1')
});
router.get("/2NDEVOWNER/2wheelbulk/Dashboard/dashboard", function (req, res) {
  
  res.render('dashboard2nd')
});


router.get("/2NDEVOWNER/3wheelbulk/3bulk", function (req, res) {
  
  res.render('3bulk')
});
router.get("/2NDEVOWNER/3wheelbulk/3bulk", function (req, res) {
  
  res.render('3bulk')
});
router.get("/2NDEVOWNER/3wheelbulk/Emergency", function (req, res) {
  
  res.render('Emergency3')
});

router.get("/2NDEVOWNER/3wheelbulk/Custom", function (req, res) {
  
  res.render('Custom3')
});
router.get("/2NDEVOWNER/3wheelbulk/parts", function (req, res) {
  
  res.render('parts3')
});
router.get("/2NDEVOWNER/3wheelbulk/maintain", function (req, res) {
  
  res.render('maintain3')
});
router.get("/2NDEVOWNER/3wheelbulk/Washing", function (req, res) {
  
  res.render('Washing3')
});
router.get("/2NDEVOWNER/3wheelbulk/query", function (req, res) {
  
  res.render('query3')
});

router.get("/2NDEVOWNER/3wheelbulk/ABOUT/aboutu", function (req, res) {
  
  res.render('aboutu')
});
router.get("/2NDEVOWNER/3wheelbulk/SUPPORT/support2", function (req, res) {
  
  res.render('support2')
});
router.get("/2NDEVOWNER/3wheelbulk/Dashboard/dashboard", function (req, res) {
  
  res.render('dashboard3nd')
});

// 2nd EV OWNER 4wheel routes
router.get("/2NDEVOWNER/4wheelbulk/4bulk", function (req, res) {
  
  res.render('4bulk')
});
router.get("/2NDEVOWNER/4wheelbulk/Emergency", function (req, res) {
  
  res.render('Emergency4')
});
router.get("/2NDEVOWNER/4wheelbulk/Custom", function (req, res) {
  
  res.render('Custom4')
});
router.get("/2NDEVOWNER/4wheelbulk/parts", function (req, res) {
  
  res.render('parts4')
});
router.get("/2NDEVOWNER/4wheelbulk/maintain", function (req, res) {
  
  res.render('maintain4')
});
router.get("/2NDEVOWNER/4wheelbulk/Washing", function (req, res) {
  
  res.render('Washing4')
});
router.get("/2NDEVOWNER/4wheelbulk/query", function (req, res) {
  
  res.render('query4')
});
router.get("/2NDEVOWNER/4wheelbulk/ABOUT/about", function (req, res) {
  
  res.render('about4')
});
router.get("/2NDEVOWNER/4wheelbulk/ABOUT/about", function (req, res) {
  
  res.render('about4')
});
router.get("/2NDEVOWNER/4wheelbulk/SUPPORT/support", function (req, res) {
  
  res.render('support4')
});
router.get("/2NDEVOWNER/4wheelbulk/Dashboard/dashboard", function (req, res) {
  
  res.render('dashboard4nd')
});


// EV Manufacture routes
router.get("/EVMANUFACTURE/manufacture", function (req, res) {
  
  res.render('manufacture')
});

router.get("/EVMANUFACTURE/ABOUT/about", function (req, res) {
  
  res.render('aboutft')
});
router.get("/EVMANUFACTURE/SUPPORT/support", function (req, res) {
  
  res.render('supportft')
});

// GOVERNMENTBODY routes

router.get("/GOVERNMENTBODY/govtwheel/govtwheel", function (req, res) {
  
  res.render('govtwheel')
});
router.get("/GOVERNMENTBODY/govtwheel/ABOUT/aboutusss", function (req, res) {
  
  res.render('aboutgt')
});
router.get("/GOVERNMENTBODY/govtwheel/SUPPORT/support", function (req, res) {
  
  res.render('supportgt')
});
router.get("/GOVERNMENTBODY/govtwheel/Dashboard/dashboard", function (req, res) {
  
  res.render('dashboardgovt')
});



router.get("/COMPANY/OWNER/user", function (req, res) {
  
  res.render('owner')
});
router.get("/COMPANY/OWNER/Dashboard/dashboard", function (req, res) {
  
  res.render('dashboardcmow')
});
router.get("/COMPANY/USER/owner", function (req, res) {
  
  res.render('user')
});
router.get("/COMPANY/USER/Dashboard/dashboard", function (req, res) {
   res.render('dashboardcmus')
});






router.get("/Files/services/services",(req,res)=>{
  res.render("services")
})

router.get("/Files/franchise/franchise",(req,res)=>{
  res.render("franchise")
})

router.get("/Files/management/management",(req,res)=>{
  res.render("management")
})

router.get("/Files/evowner/evowner",(req,res)=>{
  res.render("evowner")
})

router.get("/Files/preowned/preowned",(req,res)=>{
  res.render("preowned")
})

router.get("/Files/corporate/corporate",(req,res)=>{
  res.render("corporate")
})

router.get("/Files/governmentbody/governmentbody",(req,res)=>{
  res.render("governmentbody")
})

router.get("/Files/fixpointbuddy/fixpointbuddy",(req,res)=>{
  res.render("fixpointbuddy")
})


router.get("/Files/individual/individual",(req,res)=>{
  res.render("individual")
})

router.get("/Files/corporateowned/corporateowned",(req,res)=>{
  res.render("corporateowned")
})



// fixpoint buddy

router.get("/FIXPOINTBUDDY/buddy/Washingbay/already/already",(req,res)=>{
  res.render("already")
})
router.get("/FIXPOINTBUDDY/buddy/Washingbay/planning/planning",(req,res)=>{
  res.render("planning")
})

router.get("/FIXPOINTBUDDY/buddy/Washingbay/bay",(req, res)=> {
  res.render("bay")
})
router.get("/FIXPOINTBUDDY/ABOUT/about",(req, res)=> {
  res.render("aboutbd")
})
router.get("/FIXPOINTBUDDY/SUPPORT/support",(req, res)=> {
  res.render("supportbd")
})