import React from 'react';
import PostModel from '../../models/post';
import './Post.css';

const post: React.FC<{
  post: PostModel;
  clicked: (post: PostModel) => void;
}> = (props) => (
  <article className='Post' onClick={() => props.clicked(props.post)}>
    <h1>{props.post.title}</h1>
    <div className='Info'>
      <div className='Author'>{props.post.author}</div>
    </div>
  </article>
);

export default post;
