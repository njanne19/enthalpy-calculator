var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;






var data = {
  "e-" : 0,
  "Al(s)" : 0,
  "Al3+(aq)" : -531,
  "AlCl3(s)" : -705.6,
  "Al2Cl6(g)" : -1291,
  "AlF3(s)" : -1504,
  "Al2O3(s)" : -1676,
  "Al(OH)3(s)" : -1276,
  "Al2(SO4)3(s)" : -3441,
  "Ba(s)" : 0,
  "Ba2+(aq)" : -537.6,
  "Ba2+(g)" : 1649.9,
  "Ba(g)" : 175.6,
  "Ba+(g)" : 684.6,
  "BaCO3(s)" : -1216,
  "BaCl2(s)" : -858.1,
  "BaF2(s)" : -1209,
  "BaO(s)" : -548.1,
  "Ba(OH)2(s)" : -946,
  "Ba(OH)2 * 8H2O(s)" : -3342,
  "BaSO4(s)" : -1473
};
