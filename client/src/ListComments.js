import React from 'react';
const  ListComments=({comments}) => {

  const renderComments = Object.values(comments).map(comment=>(
    <li className="form-group" key={comment.id} >{comment.content}</li>
  ));
  
  return (
    <ul >
      {renderComments}
    </ul>
  );
};

export default ListComments;