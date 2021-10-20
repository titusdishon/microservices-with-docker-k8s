const express = require('express');
const bodyParser = require('body-parser');
const  cors = require('cors')
const axios = require('axios');

const app = express();
app.use(cors())
app.use(bodyParser.json());


app.post('/events',(req, res)=>{
    const event = req.body;
    console.log('Event Bus hit with data:', req.body);
    axios.post('http://posts-cluster-ip-srv:4000/events', event);
    axios.post('http://comments-srv:4001/events', event);
    axios.post('http://query-srv:4002/events', event);
    axios.post('http://moderations-srv:4003/events', event);
    res.send({status:'ok'});
})
app.listen(4005, ()=>{
    console.log('Event bus hit');
    console.log('Listening on 4005');
    
})