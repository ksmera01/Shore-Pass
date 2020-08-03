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
  console.log(`User ID: ${req.user._id} has logged in`)
  res.json({ _id: req.user._id, email: req.user.email, firstName: req.user.firstName, lastName: req.user.lastName, isAuth: true });
});

// This route for user api/user/logout
router.get("/logout", function (req, res) {
  console.log(`A user has logged out`)
  req.logout();
  res.redirect("/");
});

// Finds user, Matches with "/api/user/:id"
router.route("/:id")
  .get(userController.findById)
// .put(userController.update, (req))

// ROUTE TO TEST MIDDLEWARE AUTHENTICATION /isAuthenticated
// router.get('/test', function (req, res) {
//   if (req.user) {
//     console.log(`User ID: ${req.user._id} TEST AUTH`)
//     res.send('PASSED AUTH')
//   } else {
//     res.send('NOT AUTH')
//   }
// })

module.exports = router;
