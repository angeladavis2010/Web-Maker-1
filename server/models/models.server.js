var connectionString = 'mongodb://127.0.0.1:27017/web-maker'; // for local

if(process.env.MLAB_USERNAME_WEBDEV) { 
  // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = `mongodb+srv://${username}:${password}@cluster0-fbxy8.mongodb.net/test?retryWrites=true&w=majority`
}

var mongoose = require('mongoose');
var db = mongoose.connect(connectionString, { useNewUrlParser: true })
  
module.exports = db;

