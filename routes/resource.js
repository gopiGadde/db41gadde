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
router.post('/toyota', toyota_controller.toyota_create_post); 
 
// DELETE request to delete toyota. 
router.delete('/toyota/:id', toyota_controller.toyota_delete); 
 
// PUT request to update toyota. 
router.put('/toyota/:id', 
toyota_controller.toyota_update_put); 
 
// GET request for one toyota. 
router.get('/toyota/:id', toyota_controller.toyota_detail); 
 
// GET request for list of all toyota items. 
router.get('/toyota', toyota_controller.toyota_list); 

/* GET detail toyota page */ 
router.get('/detail', toyota_controller.toyota_view_one_Page); 

/* GET create toyota page */ 
router.get('/create',toyota_controller.toyota_create_Page); 
 
/* GET create update page */ 
router.get('/update',toyota_controller.toyota_update_Page); 

/* GET create toyota page */ 
router.get('/delete',toyota_controller.toyota_delete_Page); 
module.exports = router; 