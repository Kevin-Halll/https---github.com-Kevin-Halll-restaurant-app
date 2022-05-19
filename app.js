const express = require('express')
const app = express()
const PORT = 5000;

app.listen(process.env.PORT || PORT, () => console.info(`App listening on port ${PORT}`))

const expressLayouts = require('express-ejs-layouts');
const flash = require('express-flash')
const session = require('express-session')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// set where view files will be directed to
app.set('views', __dirname + '/views')
// set where layout files will be directed to
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const menu = require('./routes/menu')
const order = require('./routes/order')
const reciept = require('./routes/reciept')
const status = require('./routes/order-status')
const admin = require('./routes/admin')
const statusUpdate = require('./routes/statusUpdate')


app.get('/home', (req, res) => {
    res.render('index')
})

app.use('/menu', menu)
app.use('/order/', order)
app.use('/order/add-order', order)   
app.use('/order/all-orders', order)
app.use('/reciept', order)

// app.use('/all-orders', reciept)
app.use('/status-check', status)
app.use('/status/check', status)
app.use('/admin', admin)
app.use('/status/change', statusUpdate)
app.use('/delete-order', statusUpdate)


