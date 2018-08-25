'use strict'
let eventDomain = require('../domain/event')

exports.getEvents = function (req, res, next) {
  eventDomain.getEvents()
  .then(events => res.send(events))
  .catch(err => res.status(400).send(err))
}

exports.createEvent = function (req, res, next) {
  let eventData = req.body
  eventDomain.createEvent(eventData)
  .then(event => res.status(200).send('ok'))
  .catch(err => res.status(400).send(err))
}