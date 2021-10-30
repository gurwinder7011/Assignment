let mongoose = require('mongoose')

//Schema for the contact list

let inventoryModel = mongoose.Schema(
    {
        name: String,
        contact: Number,
        email: String
    },
    {
        collections: "inventory"
    }
);
module.exports = mongoose.model('Inventory', inventoryModel)