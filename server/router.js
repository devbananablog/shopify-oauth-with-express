const authController = require('./controllers/auth')

module.exports = function(app) {
    app.get('/', authController.index)
    app.get('/auth', authController.auth)
    app.get('/auth/callback', authController.callback)
}
