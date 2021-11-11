var express = require('express'); 
const toyota_controlers= require('../controllers/toyota'); 
var router = express.Router(); 
 
/* GET toyotas */ 
router.get('/', toyota_controlers.toyota_view_all_Page ); 
module.exports = router;