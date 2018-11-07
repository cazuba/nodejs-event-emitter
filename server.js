const EventEmitter = require('events');

class Server extends EventEmitter {
  constructor(client) {
    super();
    process.nextTick(() => {
      this.emit('response', 'Type a command (help to list commands)');
    });

    client.on('command', (command, args) => {
      switch (command) {
        case 'help':
        case 'ls':
        case 'add':
        case 'delete':
          this[command](args);
          break;
        default:
          this.emit('response', 'Unknown command...');
          break;
      }
    });
  }

  help() {
    this.emit('response', 'Available commands: \nadd task\nls\ndelete :id\nhelp');
  }

  ls() {
    this.emit('response', 'ls...');
  }

  add(args) {
    this.emit('response', args.join(' '));
  }

  delete() {
    this.emit('response', 'delete...');
  }
}

module.exports = client => new Server(client);
