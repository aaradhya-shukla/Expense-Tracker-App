const express = require('express');

const app = express();

var cors = require('cors');

const bodyParser = require('body-parser');

const tracker = require('./routes/tracker');

const sequelize = require('./util/database');

app.use(bodyParser.json());

app.use(cors());

app.use('/user',tracker);

sequelize.sync().
then(()=>{
    app.listen(3000);
}).
catch(err=>console.log(err));
