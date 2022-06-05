//constants/vars
const express = require('express')
const path = require ('path')
const mysql = require('mysql')
const dotenv = require('dotenv')
var livereload = require('livereload')
var connectLiveReload = require('connect-livereload')

//env security measures
dotenv.config({ path: './.env' })

//whatever this does
const app = express()

//setting public directory
const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))

//live reload server (update constantly in browser)
const liveReloadServer = livereload.createServer()
liveReloadServer.watch(publicDirectory)
liveReloadServer.watch('index.html')
liveReloadServer.watch('./classes/index.html')
liveReloadServer.watch('./about/index.html')
liveReloadServer.watch('./contact/index.html')
liveReloadServer.watch('./login/index.html')
liveReloadServer.watch('./register/index.html')
liveReloadServer.watch('./register/success.html')
app.use(connectLiveReload())

//mysql database stuff
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

//return error if something goes wrong with db
db.connect( (error) => {
    if(error) {
        console.log(error)
    }
    else {
        console.log('MySQL Connected...')
    }
})

//use forms?
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//define routes
app.use('/', require('./routes/pages.js'))
app.use('/auth', require('./routes/auth.js'))

//listener?
app.listen(5000, () => {
    console.log('Server started on port 5000')
})