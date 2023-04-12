var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/usersRoutes");


// git push sayam sayam

// to check connection require file in app js // update new comment

require("./config/dbconnection");

var app = express();

// view engine setup
app.set("views", [
  
  path.join(__dirname, "views"),
  path.join(__dirname, "views/FIXPOINT FRONT"),
  path.join(__dirname, "views/FIXPOINT FRONT/Files"),
  path.join(__dirname, "views/FIXPOINT FRONT/Files/img"),
  path.join(__dirname, "views/FIXPOINT FRONT/Files/BLOG"),
  path.join(__dirname, "views/FIXPOINT FRONT/Files/ABOUT"),
  path.join(__dirname, "views/FIXPOINT FRONT/Files/SUPPORT"),
  
  
  path.join(__dirname, "views/FIXPOINT FRONT/Files/evowner/"),
  path.join(__dirname, "views/FIXPOINT FRONT/Files/preowned/"),
  path.join(__dirname, "views/FIXPOINT FRONT/Files/corporate/"),
  
  path.join(__dirname, "views/FIXPOINT FRONT/Files/individual"),
  path.join(__dirname, "views/FIXPOINT FRONT/Files/corporateowned"),
  
  path.join(__dirname, "views/FIXPOINT FRONT/Files/fixpointbuddy"),
  path.join(__dirname, "views/FIXPOINT FRONT/Files/governmentbody/"),
  // static path
  path.join(__dirname, "views/FIXPOINT FRONT/Files/management/"),
  path.join(__dirname, "views/FIXPOINT FRONT/Files/services/"),
  path.join(__dirname, "views/FIXPOINT FRONT/Files/franchise/"),

  
  path.join(__dirname, "views/EV OWNER/2wheel"),
  path.join(__dirname, "views/EV OWNER/2wheel/ABOUT"),
  path.join(__dirname, "views/EV OWNER/2wheel/SUPPORT"),
  path.join(__dirname, "views/EV OWNER/2wheel/Dashboard"),
  

  path.join(__dirname, "views/EV OWNER/3wheel"),
  path.join(__dirname, "views/EV OWNER/3wheel/ABOUT"),
  path.join(__dirname, "views/EV OWNER/3wheel/SUPPORT"),
  path.join(__dirname, "views/EV OWNER/3wheel/Dashboard"),

  path.join(__dirname, "views/EV OWNER/4wheel"),
  path.join(__dirname, "views/EV OWNER/4wheel/ABOUT"),
  path.join(__dirname, "views/EV OWNER/4wheel/SUPPORT"),
  path.join(__dirname, "views/EV OWNER/4wheel/Dashboard"),

  path.join(__dirname, "views/2NDEVOWNER/2wheelbulk"),
  path.join(__dirname, "views/2NDEVOWNER/2wheelbulk/ABOUT"),
  path.join(__dirname, "views/2NDEVOWNER/2wheelbulk/SUPPORT"),
  path.join(__dirname, "views/2NDEVOWNER/2wheelbulk/Dashboard"),

  path.join(__dirname, "views/2NDEVOWNER/3wheelbulk"),
  path.join(__dirname, "views/2NDEVOWNER/3wheelbulk/ABOUT"),
  path.join(__dirname, "views/2NDEVOWNER/3wheelbulk/SUPPORT"),
  path.join(__dirname, "views/2NDEVOWNER/3wheelbulk/Dashboard"),

  
  path.join(__dirname, "views/2NDEVOWNER/4wheelbulk"),
  path.join(__dirname, "views/2NDEVOWNER/4wheelbulk/ABOUT"),
  path.join(__dirname, "views/2NDEVOWNER/4wheelbulk/SUPPORT"),
  path.join(__dirname, "views/2NDEVOWNER/4wheelbulk/Dashboard"),


  path.join(__dirname, "views/EV MANUFACTURE"),
  path.join(__dirname, "views/EV MANUFACTURE/ABOUT"),
  path.join(__dirname, "views/EV MANUFACTURE/SUPPORT"),


  path.join(__dirname, "views/GOVERNMENTBODY/govtwheel"),
  path.join(__dirname, "views/GOVERNMENTBODY/govtwheel/ABOUT"),
  path.join(__dirname, "views/GOVERNMENTBODY/govtwheel/SUPPORT"),
  path.join(__dirname, "views/GOVERNMENTBODY/govtwheel/Dashboard"),


  path.join(__dirname, "views/COMPANY/OWNER"),
  path.join(__dirname, "views/COMPANY/OWNER/PARTIALS"),
  path.join(__dirname, "views/COMPANY/OWNER/ABOUT"),
  path.join(__dirname, "views/COMPANY/OWNER/SUPPORT"),
  path.join(__dirname, "views/COMPANY/OWNER/Dashboard"),

  
  path.join(__dirname, "views/COMPANY/USER"),
  path.join(__dirname, "views/COMPANY/USER/ABOUT"),
  path.join(__dirname, "views/COMPANY/USER/SUPPORT"),
  path.join(__dirname, "views/COMPANY/USER/Dashboard"),




  path.join(__dirname, "views/FIXPOINT BUDDY/buddy/Washingbay/bay"),

]);

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views/FIXPOINT FRONT")));
app.use(express.static(path.join(__dirname, "views/FIXPOINT FRONT/Files")));
app.use(express.static(path.join(__dirname, "views/FIXPOINT FRONT/FILES/img")));


app.use(express.static(path.join(__dirname, "views/EV OWNER")));
app.use(express.static(path.join(__dirname, "views/")));
// app.use(express.static(path.join(__dirname, "views/FIXPOINT FRONT/FILES/services")));
// app.use(express.static(path.join(__dirname, "views/FIXPOINT FRONT/FILES/franchise")));
// app.use(express.static(path.join(__dirname, "views/FIXPOINT FRONT/FILES/governmentbody")));
// app.use(express.static(path.join(__dirname, "views/FIXPOINT FRONT/FILES/fixpointbuddy")));

app.use("/index", indexRouter);
app.use("/", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
