const EventEmitter = require("events");

class Server extends EventEmitter {
  constructor(client) {
    super();
    client.on("command", command => {
      switch (command) {
        case 'help':
        case 'ls':
        case 'add':
        case 'delete':
          this[command]();
          break;
        default:
          this.emit("response", "Unknown command...");
          break;
      }
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
