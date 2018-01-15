const request = require('request')
const crypto = require('crypto')
const User = require('../models/user')
const redirect = require('../helpers/redirect')
const genHmac = require('../helpers/hmac')

exports.index = (req, res) => {
    res.render('index')
}

exports.auth = (req, res) => {
    res.send('auth')
}

exports.callback = (req, res) => {
    res.send('callback')
}
