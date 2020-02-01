const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const UsersController = require('./controllers/users.controller');

const usersRoutes = require('./routes/users.routes');
const pagesRoutes = require('./routes/pages.routes');

const PORT = 3000;

const usersController = new UsersController();
const app = express();



// const mongoose = require('mongoose');
// mongoose.connect('mongodb://admin:secret@localhost:27017/tp_node_js');
// const dbPath = "mongodb://<dbuser>:<dbpassword>@ds250607.mlab.com:38485/test-db";

// const mongoose = require('mongoose');
// const uri = 'mongodb://localhost:27017/mns'; mongoose.connect(uri, (error) => {
//   if (error) throw error; // Ready...
//   else console.log("connecté")
// });

const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/mns";
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;



app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.json());

app.use('/api/users', usersRoutes(usersController));
app.use('/', pagesRoutes(usersController));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});
