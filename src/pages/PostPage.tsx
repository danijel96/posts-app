import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from 'services/endpoints/posts/postsApi';
import { IComment, IPost, IUser } from 'types';
import Post from 'component/Post';
import { getCommentsByPostId } from 'services/endpoints/comments/commentsApi';
import { getUserByUserId } from 'services/endpoints/users/usersApi';

interface IPosts {
  helloFrom: string;
}
const PostPage = ({ helloFrom }: IPosts) => {
  const params = useParams() as { id: string };

  const [post, setPost] = useState<IPost | null>(null);
  const [comments, setComments] = useState<IComment[] | undefined>(undefined);
  const [user, setUser] = useState<IUser | undefined>(undefined);
  useEffect(() => {
    console.log(`${helloFrom} PostPage component`);

    getPostById(params.id).then((res) => setPost(res?.result?.data));
    getCommentsByPostId({ postId: params?.id }).then((res) =>
      setComments(res?.result?.data)
    );
  }, [helloFrom]);
  useEffect(() => {
    if (post?.userId) {
      getUserByUserId(post?.userId).then((res) => setUser(res?.result?.data));
    }
  }, [post]);

  if (!post) return <p>Loading...</p>;
  return (
    <div key={post?.id} className="max-w-[750px] mx-auto my-7">
      <Post
        post={post}
        key={post.id}
        comments={comments}
        user={user}
        helloFrom="Hello from"
      />
    </div>
  );
};

export default PostPage;
