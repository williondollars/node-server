
var express = require('express');
var app = express();
var server = undefined;
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static('public'));

mount('/html-node/Homepage');
var server = app.listen(8000, function() {
});

function    mount(name) {
    var module = require(__dirname + name);
    var instance = new module();

    instance.mount(app);
}

process.on('exit', function() {
    console.log('Application is now exiting...');
//    abort();
});
process.on('SIGINT', function() {
    console.log('Application received SIGINT signal.');
    process.exit();
});
process.on('SIGTERM', function() {
    console.log('Application received SIGTERM signal.');
    process.exit();
});
process.on('uncaughtException', function(e) {
    console.log('Application received uncaughtException signal. (error: ' + e.message + ')');
    process.exit();
});
console.log('Application is now running...');
