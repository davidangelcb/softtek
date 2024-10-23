const router = require("express").Router();

const { findAll, findById }  = require('../api/starships/find')

router.route("/starships")
    .get(findAll)
router.route("/starships/:uid")
    .get(findById)

module.exports = router;