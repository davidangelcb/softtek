const router = require("express").Router();

const { findAll, findById }  = require('../api/species/find')

router.route("/species")
    .get(findAll)
router.route("/species/:uid")
    .get(findById)

module.exports = router;
