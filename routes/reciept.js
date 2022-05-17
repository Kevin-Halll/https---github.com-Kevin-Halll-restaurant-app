const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
    db.query(`SELECT * FROM restaurant_app.order_tbl`, (err, rows) => {
        res.render('reciept-template', {

        })
    })

})

module.exports = router