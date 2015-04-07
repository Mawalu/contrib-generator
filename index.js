if (process.argv.length < 3) {
    console.log("Usage: node index.js [start date]");
    process.exit(1);
}
var fs = require('fs'),
    i = 0,
    readline = require('readline');

var start = new Date(process.argv[2]);

// http://stackoverflow.com/a/17466459/3524739
function run_cmd(cmd, args, callBack ) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) { resp += buffer.toString() });
    child.stdout.on('end', function() { callBack (resp) });
}

var rd = readline.createInterface({
    input: fs.createReadStream('text.txt'),
    output: process.stdout,
    terminal: false
});

rd.on('line', function(line) {
    var date = new Date();
    date.setDate(start.getDate() + i);
    date.setYear(start.getFullYear());

    i++;
    line.split('').forEach(function(myChar) {
        date.setDate(date.getDate() + 7);
        if (myChar == '#') {
            run_cmd(
                'git',
                ['commit', '--allow-empty', '--allow-empty-message', '-m', '""', '--date', date.toISOString()],
                function(res) {
                    console.log(res);
                }
            );
        }
    });
});

