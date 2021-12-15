//getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/saurav', {useNewUrlParser: true, useUnifiedTopology: true});

//now connecting node.js to mongoose
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We are connected now...")
});