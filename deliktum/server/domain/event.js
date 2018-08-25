'use strict'

let eventDB = require('../db/event')

exports.getEvents = function() {
  return new Promise((resolve, reject) =>{
    eventDB.getEvents()
    .then(event => resolve(event))
    .catch(err => reject(err))
  })
}

exports.createEvent = function(eventData) {
  return new Promise((resolve, reject) => {
    if (!eventData) return reject('Missing fields')
    eventDB.saveEvent(eventData)
    .then(event => resolve(event))
    .catch(err => reject(err))
  })
}
