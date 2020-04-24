const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const path = require('path');


const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, './public/dist/public')));

app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

require('./server/config/database');
app.use(require('./server/config/routes'));

// this route will be triggered if any of the routes above did not match
app.all("*", (req, res, next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});


app.listen(port, () => console.log(`Express server is running on port ${port}`));
