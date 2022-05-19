const express = require('express')
const router = express.Router()
const db = require('../db')

router.post("/", (req, res) => {
    let edit = [req.body.order_status, req.body.order_id];

    console.log("Working PAfesddd");
    db.query(
      `UPDATE order_tbl SET order_status = ? WHERE id = ?`, edit,
      (err, results) => {
          if(err) throw err;
        res.redirect("/admin");
      }
    );
});

router.get('/:id', (req, res) => {
  db.query(`DELETE FROM restaurant_app.order_tbl WHERE id = ${req.params.id}`, (err, rows) => {
      
      if(err) {
          res.send(err)
      }else {
          res.redirect('/admin')
          // next()
      }
  })

})

module.exports = router