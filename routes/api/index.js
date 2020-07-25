const router = require("express").Router();
const userRoutes = require("./user");
const tagRoutes = require("./tag")

// User routes
router.use("/user", userRoutes);

// Tag routes
router.use("/tags", tagRoutes)

module.exports = router;
