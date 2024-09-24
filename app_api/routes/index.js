const express = require('express');
const router = express.Router();
const ctrlLocations =
require('../controllers/locations');
/* Locations pages */
router.get('/locations', ctrlLocations.list);
router.get("/locations/:_id",ctrlLocations.getLocation)
module.exports = router;