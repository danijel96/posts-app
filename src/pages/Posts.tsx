import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommentsSection } from '../component/Comments';
import {
  CommentIcon,
  LikeIcon,
  LocationIcon,
  ShareIcon,
  UserIcon,
} from '../component/Icons';
import ReactIcons from '../component/ReactIcons';
import { getAllComments } from '../services/endpoints/comments/commentsApi';
import {
  getAllPosts,
  getPostByUserId,
} from '../services/endpoints/posts/postsApi';
import { getAllUsers } from '../services/endpoints/users/usersApi';
import { IComment, IPost, IUser } from '../types';

const Posts = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<IPost[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    getAllPosts().then((res) => setPosts(res?.result?.data));
    getAllUsers().then((res) => setUsers(res?.result?.data));
    getAllComments().then((res) => setComments(res?.result?.data));
  }, []);

  function handleClick(e: any) {
    if (e === '0') {
      getAllPosts().then((res) => setPosts(res?.result?.data));
      return;
    }

    getPostByUserId({ userId: e }).then((res) => setPosts(res?.result?.data));
  }

  const findUser = (userId: number): IUser | undefined => {
    let findUser: IUser | undefined;
    findUser = users?.find((user) => user.id === userId) || undefined;
    if (findUser) return findUser;
  };

  const filterComments = (postId: number) => {
    let filterComments: IComment[] | undefined;
    filterComments = comments?.filter((comment) => comment.postId === postId);

    if (filterComments) return filterComments;
    return [];
  };
  return (
    <div className="px-5 py-1 bg-[#f0f7f6]">
      <h1>Posts Page</h1>
      <div className="flex mb-5">
        <p className="mr-3">Filter posts by User</p>
        <select
          name="user"
          id="user"
          onChange={(e) => handleClick(e.target.value)}
        >
          <option key={0} value={0}>
            {''}
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      {posts.map((post) => (
        <div
          key={post.id}
          onClick={() => navigate(`/post/${post.id}`)}
          className="mb-10 p-4 bg-[#F8FDFC] rounded-[35px] shadow-post"
        >
          <div className="flex items-center">
            <div className="relative w-10 h-10 rounded-full bg-[#ccc] flex items-center justify-center m-1">
              <UserIcon className="text-[#fff]" stroke="#fff" width={30} />
            </div>
            <div>
              <p className="text-[20px] mx-3 my-1">
                {findUser(post.userId)?.name}
              </p>
              <p className="flex items-center pl-4">
                <LocationIcon width={15} />
                <span className="ml-2 text-silver">
                  {findUser(post.userId)?.address?.city}
                </span>
              </p>
            </div>
          </div>
          <h2 className=" text-[#00f] font-bold hover:underline cursor-pointer text-center">
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
          <ReactIcons />
          <div>
            {filterComments(post.id).map((comment) => (
              <CommentsSection key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
