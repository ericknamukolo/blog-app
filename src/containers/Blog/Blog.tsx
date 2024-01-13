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
    selectedPost: null as PostModel | null,
  };
  async componentDidMount(): Promise<any> {
    const postsData: PostModel[] = await new Posts().fetchPosts();

    this.setState({ posts: postsData });
  }

  // clickPost(post: PostModel): void {
  //   this.setState({ selectedPost: post });
  // }

  clickPost = (post: PostModel) => {
    this.setState({ selectedPost: post });
  };

  deletePost = (postId: number) => {
    let posts: PostModel[] = this.state.posts.filter(
      (post) => post.id !== postId
    );

    this.setState({ posts: posts, selectedPost: null });
  };

  render() {
    return (
      <div>
        <section className='Posts'>
          {this.state.posts.map((post) => {
            return <Post key={post.id} post={post} clicked={this.clickPost} />;
          })}
        </section>
        <section>
          <FullPost post={this.state.selectedPost} onRemove={this.deletePost} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
