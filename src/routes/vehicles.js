const router = require("express").Router();

const { findAll, findById }  = require('../api/vehicles/find')

router.route("/vehicles")
    .get(findAll)
router.route("/vehicles/:uid")
    .get(findById)

module.exports = router;