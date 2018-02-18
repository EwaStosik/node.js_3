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
    
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
    console.log('Uptime: ', time.print(uptime).toFixed(0) + ' seconds');
}

exports.print = getOSinfo;