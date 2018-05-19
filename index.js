#!/usr/bin/env node


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
*/

var program = require('commander');

process.stdin.resume()

program
    .version('0.1.1')
    .option('-i, --input [name]', 'User input')
    .parse(process.argv)

function dateHelloError(value) {
    return new Promice(function(resolve, reject) {
        switch (program.input) {
            case 'date':
                console.log(new Date());
                process.exit(2);
                break;
            case 'hello':
                setTimeout(function() {
                    console.log("hello world");
                    process.exit(2);
                }, 1000);
                break;
            default:
                console.log("Oh, g*vno! An error occured! Only 'date' or 'hello' appropriate.");
                process.exit(2);
                break;
        };
    })
}
dateHelloError(program.input);
/*throw new Error('Oh, g*vno! Only "date" or "hello" appropriate.');*/

/*if (program.input === 'date') {
    console.log(new Date());
    process.exit(0)
} else {
    setTimeout(function() {
        console.log("hello world")
        process.exit(2)
    }, 1000)
}*/