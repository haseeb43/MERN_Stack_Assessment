import { Link } from "react-router-dom";
import { BackgroundGradient } from "../ui/background-gradient";

const PostCard = ({ post, deletePost }) => {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] min-w-[350px] max-w-[350px] min-h-[24rem] max-h-[24rem] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {post.title.length > 55
            ? post.title.substring(0, 55) + "..."
            : post.title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          {post.content.length > 300
            ? post.content.substring(0, 300) + "..."
            : post.content}
        </p>
        <div className="flex gap-1">
          <Link
            to={`/posts/${post._id}`}
            className="rounded-sm p-4 py-1 text-[#e4e4e4] space-x-1 bg-black text-xs font-bold dark:bg-zinc-800"
          >
            Read More
          </Link>

          <button
            className="rounded-sm p-4 py-1 text-[#ff4444] space-x-1 bg-black text-xs font-bold dark:bg-zinc-800"
            onClick={() => deletePost(post._id)}
          >
            Delete
          </button>

          <Link
            to={`/admin/update-post/${post._id}`}
            className="rounded-sm p-4 py-1 text-[#278cf8] space-x-1 bg-black text-xs font-bold dark:bg-zinc-800"
          >
            Update
          </Link>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default PostCard;
