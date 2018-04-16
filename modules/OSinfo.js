var os = require('os');
var colors = require('colors');
var time = require('./time');

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.blue, type);
    console.log('Release:'.yellow, release);
    console.log('CPU model:'.red, cpu);
    process.stdout.write('Uptime: ~ '.magenta);
    time.print(uptime);
    console.log('User name:'.cyan, userInfo.username);
    console.log('Home dir:'.gray, userInfo.homedir);
}

exports.print = getOSinfo;