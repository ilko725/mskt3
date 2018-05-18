#!/usr/bin/env node

var program = require('commander');
var currentDate = new Date();

program
    .version('1.0.0')
    .command('info <user_input>')
    .alias('i')
    .action(function(user_input) {
        var exitProgram = function() { process.exitCode = 1; }
        if (user_input === 'date') {
            console.log('This date is: ' + currentDate);
            process.exit(1);
        } else if (user_input === 'hello') {
            console.log('Hello World')
            setTimeout(process.exit(1), 1000);
        };
    });

program.parse(process.argv);