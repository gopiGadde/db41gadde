const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
    color: String, 
    quality: String, 
    cost: Number 
}) 
 
module.exports = mongoose.model("toyota", 
costumeSchema) 