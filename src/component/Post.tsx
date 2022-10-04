import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IComment, IPost, IUser } from 'types';
import { CommentsSection } from './Comments';
import ReactIcons from './ReactIcons';
import UserInfo from './UserInfo';

interface IPostComponent {
  post: IPost;
  findUser?: (userId: number) => IUser | undefined;
  filterComments?: (postId: number) => IComment[];
  comments?: IComment[] | undefined;
  user?: IUser | undefined;
  helloFrom: string;
}
const Post = ({
  post,
  findUser,
  filterComments,
  comments,
  user,
  helloFrom,
}: IPostComponent) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(`${helloFrom} Post component`);
  }, [helloFrom]);

  const handleNavigate = () => {
    if (location.pathname.split('/')[1] === 'post') return;
    navigate(`/post/${post.id}`);
  };
  return (
    <div
      key={post.id}
      className="mb-10 p-4 bg-[#F8FDFC] rounded-[35px] shadow-post"
    >
      {findUser ? (
        <UserInfo post={post} findUser={findUser} helloFrom="Hello from" />
      ) : (
        <UserInfo post={post} user={user} helloFrom="Hello from" />
      )}
      <h2
        onClick={handleNavigate}
        className=" text-[#00f] font-bold hover:underline cursor-pointer text-center"
      >
        {post.title}
      </h2>
      <p
        className="pb-8 pt-3 px-7"
        style={{
          borderBottom: '1px solid #ccc',
        }}
      >
        {post.body}
      </p>
      <ReactIcons helloFrom="Hello from" />
      <div>
        {filterComments
          ? filterComments(post.id).map((comment: IComment) => (
              <CommentsSection
                key={comment.id}
                comment={comment}
                helloFrom="Hello from"
              />
            ))
          : comments &&
            comments.map((comment: IComment) => (
              <CommentsSection
                key={comment.id}
                comment={comment}
                helloFrom="Hello from"
              />
            ))}
      </div>
    </div>
  );
};

export default Post;
