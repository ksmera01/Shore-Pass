const router = require("express").Router();
const userController = require("../../controllers/userController");
// Require Passport functionality
const passport = require("../../config/passport");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// This route for posting a new user model /api/user/sign-up
router.route("/sign-up")
  .post(userController.create);

// This route for user login /api/user/login
router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log(req.user)
  res.json(req.user);
});

// This route for user api/user/logout
router.get("/logout", function (req, res) {
  console.log(req.user)
  req.logout();
  res.redirect("/");
});

// Finds user, Matches with "/api/user/:id"
router.route("/:id")
  .get(userController.findById)
// .put(userController.update, (req))

// ROUTE TO TEST MIDDLEWARE AUTHENTICATION
router.route('/test', isAuthenticated, (req, res) => {
  res.send('PASSED AUTH')
})

module.exports = router;
