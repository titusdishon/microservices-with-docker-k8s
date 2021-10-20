import React from 'react';
export default ({comments}) => {

  const renderComments = Object.values(comments).map(comment=>(
    <li className="form-group" key={comment.id} >{comment.content}</li>
  ));
  
  return (
    <ul >
      {renderComments}
    </ul>
  );
};
