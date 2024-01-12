import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import PostModel from '../../models/post';
import Posts from '../../providers/posts';

class Blog extends Component {
  state = {
    posts: [] as PostModel[],
  };
  async componentDidMount(): Promise<any> {
    const postsData: PostModel[] = await new Posts().fetchPosts();

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
