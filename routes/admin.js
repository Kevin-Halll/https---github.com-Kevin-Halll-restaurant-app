const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res)=>{
    db.query(`SELECT *, ot.id AS order_id FROM restaurant_app.order_tbl ot JOIN restaurant_app.menu_tbl mt ON ot.menu_id = mt.id ORDER BY order_id`, (err, rows) => {
        res.render('admin-template', {
            title: 'Order Process Status',
            orders: rows 
        })
    })
})

router.post('/login', (req, res) => {
    let data = [
        req.body.user_nm,
        req.body.user_pw
    ]
     
    let sql = `SELECT * FROM restaurant_app.admin_tbl WHERE user_nm = ? AND user_pw = ?` 
    db.query(sql, data, (err, results) => {
        if (err) throw err;

        res.redirect("/admin")
    })
   
})

// router.post("/", (req, res, next) => {

//     let edit = [req.body.order_status, req.body.order_id];
//     db.query(
//       `UPDATE order_tbl SET ? WHERE order_id = ?`, edit,
//       (err, results) => {
//           if(err) throw err;
//         res.redirect("/admin/login");
//       }
//     );
//   });



module.exports = router