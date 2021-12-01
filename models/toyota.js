const mongoose = require("mongoose")
const toyotaSchema = mongoose.Schema({
    color: String,
    quality: String,
    cost: {type:Number,min:1000,max:6000}
})
module.exports = mongoose.model("toyota",
    toyotaSchema)