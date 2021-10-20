const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json());

const posts = {comments:[]};

app.get('/posts', (req, res) => {
    console.log('I am here', posts);
    res.send(posts);
});

app.post('/events', (req, res) => {
    console.log('Query hit from event bus', req.body);
    const { type, data } = req.body
    if (type === 'PostCreated') {
        const { title, id } = data;
        posts[id] = { id, title, comments: [] }
    }
    if (type === 'CommentCreated') {
        const { id, content, postId, status } = data;
        const post = posts[postId];
        post.comments.push({ id, content, status })
    }
    if (type === 'CommentUpdated') {
        console.log("   Updated")
        const { id, content, postId, status } = data;
        const post = posts[postId];
        const comment = post.comments.find(comment => {
            return comment.id === id;
        });
        comment.status = status;
        comment.content = content;
    }
});

app.listen(4002, () => {
    console.log('QUERY SERVICE HIT');
    console.log('Listening on 4002');
});
