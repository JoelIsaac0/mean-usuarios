const express=require('express');
const app=express();
const cors=require('cors');

require('./database');

app.use(cors());
app.use(express.json());

app.use('/api-user',require('./routes/server.routes'));

app.listen('4000');
console.log('server corriendo en el puerto',4000);
