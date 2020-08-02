const router = require("express").Router();
const tagsController = require("../../controllers/tagsController");

// Matches with "/api/tags"
router.route("/")
// .get(tagsController.findById)
// .post(tagsController.create);

// Matches with "/api/tags/:id", note that :id on create expects a user id, not tag id
router
    .route("/:id")
    .post(tagsController.create)
    .get(tagsController.findById)


module.exports = router;
