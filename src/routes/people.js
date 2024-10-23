const router = require("express").Router();

const { findAll, findById }  = require('../api/people/find')

router.route("/people")
    .get(findAll)
router.route("/people/:uid")
    .get(findById)

module.exports = router;


