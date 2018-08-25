'use strict'

let users = require('./users')
let event = require('./event')
let middleware = require('../tools/token_tools')

exports.assignRoutes = function (app) {
  app.post('/api/users', users.createUser)
  app.get('/api/users_total', middleware.ensureAuthenticated, users.getUsers)

  app.get('/api/events', event.getEvents)
  app.post('/api/event', event.createEvent)
}