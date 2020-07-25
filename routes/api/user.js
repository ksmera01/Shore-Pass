const router = require("express").Router();
const booksController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findById)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
// .put(userController.update)

module.exports = router;
