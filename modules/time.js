var os = require('os');

function displayTime() {

    var uptime = os.uptime(); //uptime is given in seconds (acc to documentation)
    var hrs = Math.floor(uptime / 3600);
    var mins = Math.floor((uptime - (hrs * 3600)) / 60);
    var secs = Math.floor(uptime - (hrs * 3600) - (mins * 60));

    console.log(uptime.toFixed(0) + ' seconds');
    console.log(mins + ' minutes ' + secs + ' seconds');
    console.log(hrs + ' hours ' + mins + ' minutes ' + secs + ' seconds');

    return uptime;
}

exports.print = displayTime;