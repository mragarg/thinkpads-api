const express = require('express');
const Router = express.Router;

// const controller = require('../controllers/thinkpad');
const {
    create,
    retrieveAll,
    update,
    deleteOne
} = require('../controllers/thinkpad');

// Create the router
const thinkpadRoutes = Router();

// Add handlers for my routers
// GET
// thinkpadRoutes.get('/', controller.retrieveAll);
thinkpadRoutes.get('/', retrieveAll);

// POST
// thinkpadRoutes.post('/', controller.create);
thinkpadRoutes.post('/', create);

// PUT

// DELETE


// Export the router
module.exports = thinkpadRoutes;