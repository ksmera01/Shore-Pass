const router = require("express").Router();
const tagsController = require("../../controllers/tagsController");

// Matches with "/api/tags"
router.route("/")
// .post(tagsController.create);

// Matches with "/api/tags/:id"
router
    .route("/:id")
    // note that :id on create expects a user id, not tag id
    .post(tagsController.create)
    .get(tagsController.findById)


module.exports = router;
