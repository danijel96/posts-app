import { IComment } from '../types';

interface ICommentSection {
  comment: IComment;
}
export function CommentsSection({ comment }: ICommentSection) {
  return (
    <div key={comment.id} className="pl-5 pr-10 mt-5">
      <p className="text-[12px] text-[#1A272A] font-bold">{comment.name}</p>
      <p className="py-2">{comment.body}</p>
      <p className="text-[11px] [&>*]:text-silver">
        <span className="cursor-pointer hover:underline">Like</span>
        <span className="mx-3">|</span>
        <span className="cursor-pointer hover:underline">Reply</span>
      </p>
    </div>
  );
}
