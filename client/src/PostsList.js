import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import ListComments from './ListComments';

const PostsList=() => {
  const [posts, setPosts] = useState({});

  useEffect(()=>{
    axios.get('http://posts.com/posts').then((res)=>{
         console.log(res.data)
         setPosts(res?.data);
    });
  }, [])

  const renderPosts = Object.values(posts).map(post=>(
    <>{post.id?<div key={post.id} className="border" style={{ margin:'20px',padding:'10px', borderRadius:'4px'}}>
    <h5>{post.title}</h5>
    {post.comments&&<ListComments comments={post.comments}/>}
    <CommentCreate postId={post.id}/>
  </div>:null}</>
  ))
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderPosts}
    </div>
  );
};
export default PostsList;