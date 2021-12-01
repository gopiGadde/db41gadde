var toyota = require('../models/toyota'); 
 
// List of all toyotas 
exports.toyota_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: toyota list'); 
}; 
 
// for a specific toyota. 
exports.toyota_detail = async function(req, res) { 
   // res.send('NOT IMPLEMENTED: toyota detail: ' + req.params.id); 
   // for a specific toyota. 
    // exports.toyota_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await toyota.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
exports.toyota_update_put = async function(req, res) { 
    //exports.toyota_update_put = async function(req, res) { 
        console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
        try { 
            let toUpdate = await toyota.findById( req.params.id) 
            // Do updates of properties 
            if(req.body.color)  
                   toUpdate.color = req.body.color; 
            if(req.body.cost) 
                   toUpdate.cost = req.body.cost; 
            if(req.body.quality)
                   toUpdate.quality = req.body.quality; 
            let result = await toUpdate.save(); 
            console.log("Sucess " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
        } 
        if(req.body.checkboxsale) toUpdate.sale = true; 
        else toUpdate.same = false; 
    }; 
    //res.send('NOT IMPLEMENTED: toyota update PUT' + req.params.id); 

// List of all toyotas 
exports.toyota_list = async function(req, res) { 
    try{ 
        thetoyotas = await toyota.find(); 
        res.send(thetoyotas); 
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
        thetoyotas = await toyota.find(); 
        res.render('toyota', { title: 'toyota Search Results', results: thetoyotas }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle toyota create on POST. 
exports.toyota_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new toyota(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"toyota_type":"goat", "cost":12, "size":"large"} 
    document.color = req.body.color; 
    document.quality = req.body.quality; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
exports.toyota_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await toyota.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

exports.toyota_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await toyota.findById( req.query.id) 
        res.render('toyotadetail',  
{ title: 'toyota Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a toyota. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.toyota_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('toyotacreate', { title: 'toyota Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a toyota. 
// query provides the id 
exports.toyota_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await toyota.findById(req.query.id) 
        res.render('toyotaupdate', { title: 'toyota Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.toyota_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await toyota.findById(req.query.id) 
        res.render('toyotadelete', { title: 'toyota Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 