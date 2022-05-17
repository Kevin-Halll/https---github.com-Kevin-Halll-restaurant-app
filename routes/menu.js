const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
    db.query(`SELECT * FROM restaurant_app.menu_tbl`, (err, rows) => {
        // res.send(rows)
        res.render('menu-template', {
            title: 'Choose From Our Menu',
            menu: rows
        })
    })

})

module.exports = router