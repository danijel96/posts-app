import CustomDropdown from 'component/Form/CustomDropdown';
import Post from 'component/Post';
import { useEffect, useState } from 'react';
import { getAllComments } from 'services/endpoints/comments/commentsApi';
import {
  getAllPosts,
  getPostByUserId,
} from 'services/endpoints/posts/postsApi';
import { getAllUsers } from 'services/endpoints/users/usersApi';
import { IComment, IPost, IUser } from 'types';

interface IPosts {
  helloFrom: string;
}
const PostsPage = ({ helloFrom }: IPosts) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    console.log(`${helloFrom} PostsPage component`);
    getAllPosts().then((res) => setPosts(res?.result?.data));
    getAllUsers().then((res) => setUsers(res?.result?.data));
    getAllComments().then((res) => setComments(res?.result?.data));
  }, [helloFrom]);

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

  const filterComments = (postId: number): IComment[] => {
    let filterComments: IComment[] | undefined;
    filterComments = comments?.filter((comment) => comment.postId === postId);

    if (filterComments) return filterComments;
    return [];
  };
  let dropdownData = users.map((user) => ({
    value: user.id,
    label: user.name,
  }));

  if (!posts.length) return <p>Loading...</p>;
  return (
    <div className="px-5 py-1 bg-[#f0f7f6]">
      <h1>Posts Page</h1>
      <div className="flex mb-5">
        <p className="mr-3">Filter posts by User</p>
        <CustomDropdown
          name="user"
          handleChange={handleClick}
          data={dropdownData}
          placeholder="Choose user"
          helloFrom="Hello from"
        />
      </div>
      {posts.map((post) => (
        <Post
          post={post}
          key={post.id}
          filterComments={filterComments}
          findUser={findUser}
          helloFrom="Hello from"
        />
      ))}
    </div>
  );
};

export default PostsPage;
