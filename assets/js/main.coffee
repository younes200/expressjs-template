#= require_tree .


socket = io.connect('http://');
	
socket.on 'connect', ->
	console.log('socket connected');
	
	socket.on 'disconnect', ->
		console.log('socket disconnected');
		return;
