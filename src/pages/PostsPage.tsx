import CustomDropdown from 'component/Form/CustomDropdown';
import Post from 'component/Post';
import React, { useEffect, useState } from 'react';
import { getAllComments } from 'services/endpoints/comments/commentsApi';
import { getAllPosts, getPostByUserId } from 'services/endpoints/posts/postsApi';
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

  function handleClick(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === '0') {
      getAllPosts().then((res) => setPosts(res?.result?.data));
      return;
    }
    getPostByUserId({ userId: e.target.value }).then((res) => setPosts(res?.result?.data));
  }

  const findUser = (userId: number): IUser | undefined => {
    const findUser: IUser | undefined = users?.find((user) => user.id === userId) || undefined;
    if (findUser) return findUser;
  };

  const filterComments = (postId: number): IComment[] => {
    const filterComments: IComment[] | undefined = comments?.filter(
      (comment) => comment.postId === postId
    );

    if (filterComments) return filterComments;
    return [];
  };
  const dropdownData = users.map((user) => ({
    value: user.id,
    label: user.name
  }));

  if (!posts.length) return <p>Loading...</p>;
  return (
    <div className="bg-[#f0f7f6] min-w-[300px] mx-auto px-5 md:px-0 py-1 flex">
      <div className="px-5 py-1 lg:w-[70%] xl:w-[65%]">
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
      <div className="aside hidden mt-5 lg:flex flex-col w-[30%] xl:w-[35%] items-center [&>*]:mb-5 [&>*]:rounded-[20px] [&>*]:max-w-[300px]">
        <h3 className="flex justify-center ">Aside content</h3>
        <img src="https://via.placeholder.com/300/771796" alt="banner-1" />
        <img src="https://via.placeholder.com/300/24f355" alt="banner-2" />
        <img src="https://via.placeholder.com/300/d32776" alt="banner-3" />
        <img src="https://via.placeholder.com/300/fdf73e" alt="banner-3" />
      </div>
    </div>
  );
};

export default PostsPage;
