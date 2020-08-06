const router = require("express").Router();
const tagsController = require("../../controllers/tagsController");

// These routes should be protected to ensure users cant post on their own without authorization/confirmation of payment 

// Matches with "/api/tags"
router.route("/")
    // Guest tag
    .post(tagsController.createGuest);

// Matches with "/api/tags/:id"
router
    .route("/:id")
    // User account tag
    .post(tagsController.create)
    .get(tagsController.findById)


module.exports = router;
