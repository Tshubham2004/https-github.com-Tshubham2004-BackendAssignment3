// emitterModule.js
const EventEmitter = require("events");

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Function to simulate raising an event
function raiseEvent() {
  console.log("Event raised in emitterModule");
  emitter.emit("customEvent", "Hello from emitterModule");
}

module.exports = {
  raiseEvent,
  emitter,
};
