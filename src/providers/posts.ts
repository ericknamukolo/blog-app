import axios, { AxiosResponse } from 'axios';
import PostModel from '../models/post';

class Posts {
  async fetchPosts(): Promise<PostModel[]> {
    var res: AxiosResponse = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const postsData: PostModel[] = res.data;
    postsData.map((post) => {
      return (post.author = 'Erick');
    });
    return postsData.splice(0, 4);
  }
}

export default Posts;
