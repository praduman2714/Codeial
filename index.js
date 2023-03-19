const express = require('express');
const cookieParser = require('cookie-parser');
const port = 8001;
const app = express();
const expressLayout = require('express-ejs-layouts');
const db = require('./config/mongoose');
const { urlencoded } = require('express');

app.use(express.urlencoded());

app.use(cookieParser());
app.use(expressLayout);
app.set('layout extractStyles' , true);
// app.set('layout extractScript', true);

app.use('/', require('./routes'))

app.use(express.static('./assets'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server ${err}`);
        return ;
    }
    console.log(`Server is running on port ${port}`);
})