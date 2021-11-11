var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var toyota_controller = require('../controllers/toyota'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// toyota ROUTES /// 
 
// POST request for creating a toyota.  
router.post('/tozyota', toyota_controller.toyota_create_post); 
 
// DELETE request to delete toyota. 
router.delete('/tozyota/:id', toyota_controller.toyota_delete); 
 
// PUT request to update toyota. 
router.put('/tozyota/:id', 
toyota_controller.toyota_update_put); 
 
// GET request for one toyota. 
router.get('/tozyota/:id', toyota_controller.toyota_detail); 
 
// GET request for list of all toyota items. 
router.get('/tozyota', toyota_controller.toyota_list); 
 
module.exports = router; 