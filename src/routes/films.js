const router = require("express").Router();

const { findAll, findById }  = require('../api/films/find')

router.route("/films")
    .get(findAll)
router.route("/films/:uid")
    .get(findById)

module.exports = router;


