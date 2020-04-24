const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsPath = path.join(__dirname, '../models');
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/movies', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});


mongoose.connection.on('connected', () =>
  console.log('mongodb is connected')
);

mongoose.Promise = global.Promise;

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath, file)));
