//Bringing in Express
const express = require('express');
//Creating a Router (Collection of Routes)
const fruitController = express.Router();
//Bring Mongoose and Fruit Schema
const Fruit = require('../models/fruits.js');

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next();
    } else {
        res.redirect('/sessions/new');
    }
};

//ROUTES

// routes
// Index
fruitController.get('/', isAuthenticated, (req, res) => {
    // Use Fruits model to get all Fruits
    Fruit.find({}, (error, allFruits) => {
        console.log(req.session);
        res.render('Index', {
            fruits: allFruits,
            username: req.session.currentUser,
        });
    });
});

// New
fruitController.get('/new', isAuthenticated, (req, res) => {
    res.render('New');
});

// Create
fruitController.post('/', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // Use Model to create Fruit Document
    Fruit.create(req.body, (error, createdFruit) => {
        // Once created - respond to client
        res.redirect('/fruits');
    });
});

// seed
// fruitController.get('/fruits/seed', (req, res) => {
//     Fruit.create([
//         {
//             name: 'grapefruit',
//             color: 'pink',
//             readyToEat: true
//         },
//         {
//             name: 'grape',
//             color: 'purple',
//             readyToEat: false
//         },
//         {
//             name: 'avocado',
//             color: 'green',
//             readyToEat: true
//         }
//     ], (err, data) => {
//         res.redirect('/fruits');
//     })
// });

//DELETE ROUTE
fruitController.delete('/:id', isAuthenticated, (req, res) => {
    Fruit.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/fruits');
    });
});

// Show
fruitController.get('/:id', isAuthenticated, (req, res) => {
    // Find the specific document
    Fruit.findById(req.params.id, (error, foundFruit) => {
        // render the Show route and pass it the foundFruit
        res.render('Show', {
            fruit: foundFruit,
        });
    });
});

//EDIT
fruitController.get('/edit/:id', isAuthenticated, (req, res) => {
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render('Edit', { fruit: foundFruit });
    });
});

//UPDATE
fruitController.put('/edit/:id', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        res.redirect('/fruits');
    });
});

////////////

//Export
module.exports = fruitController;
