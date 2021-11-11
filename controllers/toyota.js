var toyota = require('../models/toyota'); 
 
// List of all toyotas 
exports.toyota_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: toyota list'); 
}; 
 
// for a specific toyota. 
exports.toyota_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: toyota detail: ' + req.params.id); 
}; 
 
// Handle toyota create on POST. 
exports.toyota_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: toyota create POST'); 
}; 
 
// Handle toyota delete form on DELETE. 
exports.toyota_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: toyota delete DELETE ' + req.params.id); 
}; 
 
// Handle toyota update form on PUT. 
exports.toyota_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: toyota update PUT' + req.params.id); 
}; 
// List of all Costumes 
exports.toyota_list = async function(req, res) { 
    try{ 
        theCostumes = await toyota.find(); 
        res.send(theCostumes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.toyota_view_all_Page = async function(req, res) { 
    try{ 
        theCostumes = await toyota.find(); 
        res.render('toyota', { title: 'toyota Search Results', results: theCostumes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 