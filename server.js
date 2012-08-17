var express = require('express'), 
app = express(), 
path = require('path'),
http = require('http');

// web server
var server = http.createServer(app);

app.configure(function () {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('connect-assets')())
  app.use(express.static(path.join(__dirname, 'public')));  
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function (req, res) {
   res.render('index');
});



// socket.io
var server = http.createServer(app);
var io = require('socket.io').listen(server, {log : true});

io.configure(function () {
	
  io.enable('browser client minification');  // send minified client
	io.enable('browser client etag');          // apply etag caching logic based on version number
	io.enable('browser client gzip');

  
	io.set("transports", ["xhr-polling"]);
	io.set("polling duration", 10);
	io.set("log level", 1);
	
	io.set('authorization', function (handshakeData, callback) {
		callback(null, true);
	});
	
})

io.sockets.on('connection', function (socket) {
  socket.on('disconnect', function () {
    
  })
});

//this line is necessary for heroku
server.listen(process.env.PORT || 3003);
