import React, { Component } from 'react';

import './FullPost.css';
import PostModel from '../../models/post';

class FullPost extends Component<{ post: PostModel | null }> {
  render() {
    return this.props.post == null ? (
      <p>Please select a Post!</p>
    ) : (
      <div className='FullPost'>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.body}</p>
        <div className='Edit'>
          <button className='Delete'>Delete</button>
        </div>
      </div>
    );
  }
}

export default FullPost;
