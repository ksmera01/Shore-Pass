const router = require("express").Router();
const userController = require("../../controllers/userController");
// Require Passport functionality
const passport = require("../../config/passport");


// Matches with "/api/user"
router.route("/")
  .get(userController.findById)

// This route for posting a new user model /api/user/sign-up
router.route("/sign-up")
  .post(userController.create);

// This route for user login
router.post("/login", passport.authenticate("local"), function (req, res) {
  res.json(req.user);
});
// This route for user logout
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
// .put(userController.update)

module.exports = router;
