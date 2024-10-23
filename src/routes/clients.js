const router = require("express").Router();
const {validClient, sanitizePagination } = require("../api/clients/validator");
const { findWithPagination, findByPrimaryKey  }  = require('../api/clients/find')
const { create } = require('../api/clients/create')
router.route("/clients")
    .get(sanitizePagination, findWithPagination)
    .post(validClient, create)
router.route("/clients/:uid")
    .get(findByPrimaryKey)

module.exports = router;