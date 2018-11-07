const EventEmitter = require('events');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter();
const server = require('./server')(client);

server.on('response', (resp) => {
    // Special command to clear the terminal:
    process.stdout.write('\u001B[2J\u001B[0;0f');
    // Output the server response
    process.stdout.write(resp);
    // Then output a prompt to receive other commands
    process.stdout.write('\n\> ');
});

let command, args;
rl.on('line', (input) => {
    [command, ...args] = input.split(' ');
    client.emit('command', command, args);
});

