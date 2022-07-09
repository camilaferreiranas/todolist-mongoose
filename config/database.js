const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

let urlDatabase = 'mongodb://localhost/todolist'
mongoose.connect(urlDatabase, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Conectado'))
.catch((err) => console.log(err))