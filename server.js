var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
app = express();
var port = process.env.PORT || 4200; // used to create, sign, and verify tokens
// use body parser so we can get info from POST and/or URL parameters\
app.use(express.static('dist/payment-app'));

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static('dist'));
app.get('/*', function(req, res) {
    try{
        res.sendFile(__dirname + '/dist/payment-app/index.html');       
    }
    catch(err){
        console.log("b")
        res.sendFile(__dirname + '/serverDown.html');
    }
});

app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.use(express.static(path.join(__dirname, 'dist')));

// start the server 
app.listen(port, '0.0.0.0');

console.log('http://localhost:' + port);

// console.log('http://localhost': + port);