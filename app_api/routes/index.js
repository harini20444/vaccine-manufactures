const express = require('express');
const router = express.Router();
const ctrlLocations =
require('../controllers/locations');
const ctrlVaccines =
require('../controllers/vaccine');
/* Locations pages */
router.get('/locations', ctrlLocations.list);
router.get('/locations/:_id/vaccines', ctrlVaccines.getVaccineList);

router.get("/locations/:_id",ctrlLocations.getLocation)


module.exports = router;