import React from 'react';
import PostCreate from './PostCreate';
import PostsList from './PostsList';

const App=() => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <PostsList/>
    </div>
  );
};
export default App;