var express = require('express');
const toyota_controlers= require('../controllers/toyota');
var router = express.Router();
const secured = (req, res, next) => {
  if (req.user){
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
/* GET toyota */
router.get('/', toyota_controlers.toyota_view_all_Page );
/* GET detail toyota page */
router.get('/detail', toyota_controlers.toyota_view_one_Page);
/* GET create toyota page */
router.get('/create', secured, toyota_controlers.toyota_create_Page);
/* GET create update page */
// router.get('/update', toyota_controlers.toyota_update_Page);
/* GET update toyota page */
router.get('/update', secured, toyota_controlers.toyota_update_Page);
/* GET create toyota page */
router.get('/delete', secured, toyota_controlers.toyota_delete_Page);
module.exports = router;