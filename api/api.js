// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
// var cors = require('cors');
// var morgan = require('morgan');
//
// var data = require('./data.json');
//
//
// const http = require('http');
// var server = http.createServer(app);
//
// const WebSocket = require('websocket-stream');
// const wss = new WebSocket.Server({ server });
//
// wss.on('connection', function connection(ws) {
//   ws.on('message', function incoming(message) {
//     console.log('message', message);
//     ws.send(newData);
//   });
// });
//
//
// app.use(morgan('dev'));
// app.use(cors());
//
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//
// var router = express.Router();
//
// app.get('/', function(request, response) {
//   response.json({message: 'The api'})
// });
//
// router.route('/test').get(function(request, response) {
//   response.json(data);
//   data.users.push({name: 'tom', age: '222'});
// });
//
// app.use('/api', router);
//
// app.listen(7001, function() {
//   console.log('Listening on port 7001');
// });

// var express = require('express');
// var app = express();
// var http = require('http');
// var server = http.createServer(app);
//
// var bodyParser = require('body-parser');
// var morgan = require('morgan');
// var cors = require('cors');
//
// const WebSocket = require('websocket-stream');
// const wss = new WebSocket.Server({ server });
//
// var data = require('./data.json');
// var newData = JSON.stringify(data);
//
// var test = {
//   "users": [
//     { "name": "one", "age": "20" },
//     { "name": "two", "age": "21" },
//     { "name": "three", "age": "22" }
//   ]
// }
//
// var testData = JSON.stringify(test);
//
// wss.on('connection', function connection(ws) {
//   ws.on('message', function incoming(message) {
//     console.log('message', message);
//     ws.send(newData);
//
//     setTimeout(function() {
//       ws.send(testData);
//     }, 5000);
//   });
// });
//
//
//
//
// app.use(morgan('dev'));
// app.use(cors());
//
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//
// var router = express.Router();
//
// app.get('/', function(request, response) {
//   response.json({message: 'The api'})
// });
//
// app.post('/')
//
// router.route('/test').get(function(request, response) {
//   data.users.push({name: 'tom', age: '222'});
//   response.json(data);
//
//   console.log(data);
// });
//
// app.use('/api', router);
//
//
//
//
// server.listen(7001, function() {
//   console.log('Listening on port 7001');
// });



var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var data = require('./data.json');
var newData = JSON.stringify(data);

io.on('connection', function(socket) {
  socket.on('message', function () {
    socket.emit('test', newData);
  });
});

server.listen(7001, function() {
  console.log('Listening on port 7001');
});







// var app = require('express')();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);
//
// var data = require('./data.json');
// var newData = JSON.stringify(data);
//
// server.listen(7001);
//
// app.get('/', function (req, res) {
//
// });
//
// io.on('connection', function (socket) {
//   socket.on('message', function () {
//     socket.emit(newData);
//   });
// });
