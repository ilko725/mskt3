#!/usr/bin/env node

var program = require('commander');

/*program 
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


program
    .version('0.1.0')
    .option('-d, --input [name]', 'User input')
    .parse.process(process.argv);

console.log('  - %s cheese', program.cheese);
console.log('you have choosen hello')*/


process.stdin.resume()

program
    .version('0.1.1')
    .option('-i, --input [name]', 'User input')
    .parse(process.argv)

if (program.input === 'date') {
    console.log(new Date());
    process.exit(0)
} else {
    setTimeout(function() {
        console.log("hello world")
        process.exit(2)
    }, 1000)
}