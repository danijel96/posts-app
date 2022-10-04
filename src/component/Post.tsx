import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../services/endpoints/posts/postsApi';
import { IPost } from '../types';
import { CommentsSection } from './Comments';

const Post = () => {
  const params = useParams() as { id: string };

  const [post, setPost] = useState<IPost | null>(null);
  useEffect(() => {
    getPostById(params.id).then((res) => setPost(res?.result?.data));
  }, []);

  console.log(params);
  //  console.log(navigate);

  return (
    <div key={post?.id}>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <p>Comments</p>
      {/* @ts-ignore */}
      <CommentsSection postId={post?.id?.toString()} />
    </div>
  );
};

export default Post;
