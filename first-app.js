// it's file system
const fs = require('fs');

// method - create a file and add it to our hard drive with content added in the method
fs.writeFileSync('hello.txt', 'Hello from Node.js');