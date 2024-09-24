const express = require('express');
const router = express.Router();
const ctrlLocations =
require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlLocations.homelist);

//router.get('/location', ctrlLocations.locationInfo);
router.get("/location/:_id",ctrlLocations.getLocation)
// router.get('/location/bharat',ctrlLocations.locationInfobharat);
// router.get('/location/BiologicalE',ctrlLocations.locationInfoBiologicalE);
// router.get('/location/IndianImmunologicals',ctrlLocations.locationInfoIndianImmunologicals);
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;