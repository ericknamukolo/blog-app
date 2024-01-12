import React from 'react';
import PostModel from '../../models/post';
import './Post.css';

const post: React.FC<{ post: PostModel }> = (props) => (
  <article className='Post'>
    <h1>{props.post.title}</h1>
    <div className='Info'>
      <div className='Author'>{props.post.author}</div>
    </div>
  </article>
);

export default post;
