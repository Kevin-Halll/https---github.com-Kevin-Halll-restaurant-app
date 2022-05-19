const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/:id', (req, res) => {
    db.query(`SELECT * FROM restaurant_app.menu_tbl WHERE id = ${req.params.id}`, (err, rows) => {
        res.render('order-template', {
            title: 'Thank You For Your Order',
            order: rows[0]
        })
    })

})

router.post('/', (req, res) => {
    let sql = "INSERT INTO order_tbl SET ?" 
    db.query(sql, req.body, (err, results) => {
        if (err) throw err;
        
        db.query(`SELECT * FROM restaurant_app.menu_tbl mt, restaurant_app.order_tbl ot 
            WHERE mt.id = ot.menu_id AND ot.id = ${results.insertId};`, 
            (err, rows) => {
            res.render('reciept-template', {
                title: 'Your Reciept',
                reciept: rows[0]
            })
        })
    })
})

module.exports = router
