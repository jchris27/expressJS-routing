const express = require('express');
const router = express.Router();
const path = require('path');

// create to store data
const data = {};

// get the data from the database
data.employees = require('../../data/employees.json')


router.route('/')
    .get((req, res) => {
        res.json(data.employees)
    })
    .post((req, res) => {
        res.json({
            "id": req.body.id,
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        })
    })
    .put((req, res) => {
        res.json({
            "id": req.body.id,
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        })
    })
    .delete((req, res) => {
        res.json({ "id": req.body.id })
    })

router.route('/:id')
    .get((req, res) => {
        res.json({ "id": req.params.id })
    })


module.exports = router;