let db_tools = require('../tools/db_tools')
let mongoose = require('mongoose')

let EventSchema = new mongoose.Schema({
  title: String,
  latitude: String,
  longitude: String,
  description: String,
  img: String
})

let Event = mongoose.model('event', EventSchema)
exports.Event = Event

exports.saveEvent = function(eventData) {
  let event = new Event(eventData)
  
  return new Promise((resolve, reject) => {
    event.save()
    .then(event => {
      console.log("Event event!")
      resolve(event)
    })
    .catch(err => {
      console.log("Error saving event: " + err)
      reject(err)
    })
  })
}

exports.getEvents = function(eventIds) {
  return new Promise((resolve, reject) => {
    Event.find({})
    .then(event => resolve(event))
    .catch(err => {
        console.log('error: ' + err)
        reject(err)
    })
  })
}