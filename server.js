const EventEmitter = require("events");

class Server extends EventEmitter {
  constructor(client) {
    super();
    client.on("command", command => {
      console.log(`Command: ${command}`);
    });
  }

  help() {
    this.emit("response", "help...");
  }

  ls() {
    this.emit("response", "ls...");
  }

  add() {
    this.emit("response", "add...");
  }

  delete() {
    this.emit("response", "delete...");
  }
}

module.exports = client => new Server(client);
