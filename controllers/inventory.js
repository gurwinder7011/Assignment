// create a reference to the model

let Inventory = require('../models/inventory');

module.exports.inventoryList = function(req, res, next) {  
    Inventory.find({}).sort({"name": 1}).exec((err, inventoryList) => {

        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('inventory/list', {
                title: 'Inventory List', 
                InventoryList: inventoryList,
                userName: req.user ? req.user.username : ''
            })            
        }
    });
}

//Displays edit page
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Inventory.findById(id, (err, nameToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('inventory/add_edit', {
                title: 'Edit Name', 
                name: nameToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Inventory({
        _id: req.body.id,
        name: req.body.name,
        contact: req.body.contact,
        //description: req.body.description,        
        email: req.body.email
    });

    Inventory.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/inventory/list');
        }
    });
}

//deletes an existing entry
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Inventory.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/inventory/list');
        }
    });
}

//Navigates to add page
module.exports.displayAddPage = (req, res, next) => {
    let newName = Inventory();

    res.render('inventory/add_edit', {
        title: 'Add a new Name',
        name: newName,
        userName: req.user ? req.user.username : ''
    })          
}
//processes the additions made
module.exports.processAddPage = (req, res, next) => {
    let newContact = Inventory({
        _id: req.body.id,
        name: req.body.name,
        contact: req.body.contact,
        description: req.body.description,
        email: req.body.email
    });

    //creates new entry
    Inventory.create(newContact, (err, name) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            console.log(name);
            res.redirect('/inventory/list');
        }
    });

}