# Express.js Template
-----------

Node app running with express.js
uses Jade, CoffeeScript and Less.

It is a good project to start using Express, it includes :
- [Jade](http://jade-lang.com/) template engine, 
- [Less](http://lesscss.org/) CSS engine with HTML5 boilerplate
- [CoffeeScript](http://coffeescript.org/) for client side javascript compiler
- Websocket with [Socket.io](http://socket.io/).
- Template layout with [semantic grid](http://semantic.gs/)
- Responsive layout



# Installation


```
$ mkdir my-project
$ cd my-project
$ git init .
$ git remote add expressjs-template git@github.com:thelaughingman/expressjs-template.git
$ git pull expressjs-template master

$ sudo npm install express -g
$ npm install -d
````


For development better to use [nodemon](https://github.com/remy/nodemon/):

````
sudo npm install nodemon -g
````

then to run:

`node server.js`

or with nodemon:

`nodemon server.js`


## Deploy
Deploy your project to heroku:

  $ heroku login
  $ heroku create
  $ git push heroku master
  

[Example](http://expressjs-template.herokuapp.com/)

##credits
[express.js](http://expressjs.com/)<br />
[semantic.gs](http://semantic.gs/)<br />
[Jade](http://jade-lang.com/)<br />
[Less](http://lesscss.org/)<br />
[CoffeeScript](http://coffeescript.org/) <br />
[Socket.io](http://socket.io/)<br />


## License
[MIT license](http://www.opensource.org/licenses/mit-license.php)

-----------
Created by Younes benaomar [@younesbenomar](https://twitter.com/younesbenomar)