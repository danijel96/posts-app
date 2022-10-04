import { CommentIcon, LikeIcon, ShareIcon } from './Icons';

const ReactIcons = () => {
  return (
    <div className="react-icons flex items-center my-3 ml-3">
      <LikeIcon width={24} className="cursor-pointer" />
      <CommentIcon
        width={24}
        className="mx-4 cursor-pointer"
        stroke="#ADB8B7"
      />
      <ShareIcon width={24} className="share cursor-pointer" />
    </div>
  );
};

export default ReactIcons;
