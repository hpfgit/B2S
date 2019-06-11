let express = require('express')
let app = new express();
let bodyParser = require('body-parser')
let urlencodedParser = bodyParser.urlencoded({extended: false})
const user = require('./user.json')
const ranking = require('./ranking.json')
const stock = require('./stock.json')
const order = require('./order.json')

app.get('/user/login', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.json(user)
})

app.get('/user/info', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.json(user)
})

app.get('/user/logout', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.json(user)
})

app.get('/get/ranking', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.json(ranking)
})

app.get('/get/stock', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.json(stock)
})

app.get('/get/order', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.json(order)
})

app.listen(3000)