import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import PostModel from '../../models/post';

class Blog extends Component {
  state = {
    posts: [] as PostModel[],
  };
  async componentDidMount(): Promise<any> {
    var res: AxiosResponse = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const postsData: PostModel[] = res.data;
    this.setState({ posts: postsData });
  }

  render() {
    return (
      <div>
        <section className='Posts'>
          {this.state.posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
