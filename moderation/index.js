const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const  cors = require('cors')
const axios = require('axios');

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.post('/events', async(req, res) => {
  console.log("Hit moderations service",req.body);
  const {type, data}=req.body;
  if (type==='CommentCreated') {
      const status  =  data.content.includes('orange')?'rejected':'approved';
      await axios.post('http://event-bus-srv:4005/events', {
        type:'CommentModerated',
        data:{
          id:data.id, 
          content:data.content,
          postId:data.postId,
          status,
        }
      })
  }
});

app.listen(4003, () => {
  console.log('MODERATIONS SERVICE');
  console.log('Listening on 4003');
});
