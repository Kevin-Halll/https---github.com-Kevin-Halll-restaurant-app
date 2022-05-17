const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
    res.render('status-form-template')
})

router.post('/', (req, res) => {
    let data = [
        req.body.order_num,
        req.body.key_code
    ]
    // let sql = "INSERT INTO projects_table SET ?" 
    let sql = `SELECT * FROM restaurant_app.order_tbl WHERE id = ? AND key_code = ?` 
    db.query(sql, data, (err, results) => {
        if (err) throw err;
        res.render('status-template', {
            title: 'Order Process Status',
            reciept: results[0] 
        })
    })
})


module.exports = router