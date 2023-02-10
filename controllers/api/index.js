const router = require("express").Router();
const userRoutes = require("./userRoutes");
const journalRoutes = require("./journalRoutes");
const entryRoutes = require("./entryRoutes");

router.use("/user", userRoutes);
router.use("/journals", journalRoutes);
router.use("/entries", entryRoutes);

module.exports = router;