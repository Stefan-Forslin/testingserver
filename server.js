const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const PORT = 1338
const staticFolder = path.join(__dirname, 'public')
app.use( (req, res, next) => {
	console.log(`${req.method} ${req.url} `, req.params);
	next()
})
app.use( express.json() )
app.use( cors())
app.use( express.static(staticFolder) )
app.get('/', (req, res) => {
	res.send('Welcome to nothing')
})
//app.get('/index.html', (req, res) =>{
//	res.sendFile(path.join(__dirname,'public/index.html'))
//})
//app.get('/style.css', (req, res) =>{
//	res.sendFile(path.join(__dirname,'public/style.css'))
//})
//app.get('/script.js', (req, res) =>{
//	res.sendFile(path.join(__dirname,'public/script.js'))
//})
app.listen(PORT,() =>{
	console.log('Server listening on port ' + PORT);
})
