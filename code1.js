// listenerModule.js
const { emitter } = require("./event.js");

// Listener for the customEvent
emitter.on("customEvent", (message) => {
  console.log(`Received event message: ${message}`);
});

console.log("Listener module is waiting for events...");
