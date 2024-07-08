const fs = require('fs');

fs.readFile('ss.txt', function (error, data) {
    if (error) {
        return console.error('Error:', error);
    }
    console.log('Asynchronous read:', data.toString());
});

try {
    var dataSync = fs.readFileSync('ss.txt');
    console.log('Synchronous read:', dataSync.toString());
} catch (err) {
    console.error('Error reading file synchronously:', err);
}

console.log('Program Ended');
