const router = require("express").Router();

const { findAll, findById }  = require('../api/planets/find')

router.route("/planets")
    .get(findAll)
router.route("/planets/:uid")
    .get(findById)

module.exports = router;
