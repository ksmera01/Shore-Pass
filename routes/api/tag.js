const router = require("express").Router();
const tagsController = require("../../controllers/tagsController");

// Matches with "/api/tags"
router.route("/")
    .get(tagsController.findById)
    .post(tagsController.create);

// Matches with "/api/tags/:id"
router
    .route("/:id")
    .get(tagsController.findById)


module.exports = router;
