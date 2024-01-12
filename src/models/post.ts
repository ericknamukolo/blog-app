type PostModel = {
  id: number;
  body: string;
  title: string;
  userId: number;
  author: string | undefined;
};

export default PostModel;
