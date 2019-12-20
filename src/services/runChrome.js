//https://stackoverflow.com/questions/38033127/node-js-how-to-check-a-process-is-running-by-the-process-name
// first arg - path

const exec = require('child_process').exec;
// eslint-disable-next-line no-unused-vars
let child = {};
let arg = [];
let processName = 'chrome';

console.log('Launch Daemon for ElariAdvertisment');

arg = process.argv.slice(2);

const chromeLauncher = (
    path = 'https://elariadv.herokuapp.com',
    screenMode = '--start-fullscreen', // also may --kiosk
    browserName = 'google-chrome'
    ) => {
    child = exec(`${browserName} ${path} ${screenMode}`, function(err) {
        if(err) console.log("error ", err);
        else console.log("google-chrome close success")
    })
};
const isRunning = (query, cb) => {
    let platform = process.platform;
    let cmd = '';
    switch (platform) {
        case 'win32' : cmd = `tasklist`; break;
        case 'darwin' : cmd = `ps -ax | grep ${query}`; break;
        case 'linux' : cmd = `ps -A`; break;
        default: break;
    }
    exec(cmd, (err, stdout, stderr) => {
       cb(stdout.toLowerCase().indexOf(query.toLowerCase()) > -1);
    });
};

chromeLauncher(arg[0]);
// console.log('chrome PID process - ', child.pid); //google-chrome pid
// console.log('node process', process.pid); //node pid

setInterval(() =>
    // isRunning(child.pid.toString(), (isLaunched) => {
     isRunning(processName, (isLaunched) => {
    if(!isLaunched) chromeLauncher(arg[0])}), 2000);
// process.exit(-1);