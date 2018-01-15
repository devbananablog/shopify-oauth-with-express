// Environment Variables
require('dotenv').config()

// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const bluebird = require('bluebird')
const path = require('path')
const router = require('./router')

// Create App
const app = express()

// Database
mongoose.Promise = bluebird
mongoose.connect(process.env.DB, { useMongoClient: true })

// Views
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.set('trust proxy', 1)

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    })
)

// Routes
router(app)

// Start Server
app.listen(process.env.PORT)