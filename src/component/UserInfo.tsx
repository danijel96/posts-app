import { useEffect } from 'react';
import { IPost, IUser } from 'types';
import { LocationIcon, UserIcon } from './Icons';

type ConditionalProps =
  | {
      findUser: (userId: number) => IUser | undefined;
      user?: never;
    }
  | {
      user: IUser | undefined;
      findUser?: never;
    };

interface IUserInfo {
  post: IPost;
  helloFrom: string;
}

type FinalProps = ConditionalProps & IUserInfo;

const UserInfo = ({ post, findUser, user, helloFrom }: FinalProps) => {
  useEffect(() => {
    console.log(`${helloFrom} UserInfo component`);
  }, [helloFrom]);
  return (
    <div className="user-info flex items-center">
      <div className="relative w-10 h-10 rounded-full bg-[#ccc] flex items-center justify-center m-1">
        <UserIcon className="text-[#fff]" stroke="#fff" width={30} />
      </div>
      <div>
        <p className="text-[20px] mx-3 my-1">
          {user ? user?.name : findUser && findUser(post.userId)?.name}
        </p>
        <p className="flex items-center pl-4">
          <LocationIcon width={15} />
          <span className="ml-2 text-silver">
            {user
              ? user?.address?.city
              : findUser && findUser(post.userId)?.address?.city}
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
