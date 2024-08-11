import { Link } from "react-router-dom";
import { BackgroundGradient } from "../ui/background-gradient";
import ShowIfAdmin from "../../wrappers/showIfAdmin";
import FormattedDate from "../helpers/formateDate";
import ShowIf from "../../wrappers/showIf";
const PostCard = ({ post, deletePost }) => {
  return (
    <div>
      <BackgroundGradient className="group z-10 rounded-[22px] min-w-[300px] max-w-[300px] min-h-[24rem] max-h-[24rem] bg-white dark:bg-zinc-900 overflow-hidden">
        <div className="absolute w-full h-full flex justify-center items-center gap-1 opacity-0 group-hover:opacity-100 bg-[#00000000] backdrop-blur-sm rounded-[22px] transition duration-500">
          <Link
            to={`/posts/${post._id}`}
            className="rounded-sm p-4 py-1 text-[#e4e4e4] space-x-1 bg-black text-xs font-bold dark:bg-zinc-800"
          >
            Read More
          </Link>

          <ShowIfAdmin>
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
          </ShowIfAdmin>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start text-[8px] text-neutral-600 dark:text-neutral-400 mb-4">
            {<FormattedDate timestamp={post?.createdAt} />}
            <ShowIf condition={post.createdAt !== post.updatedAt}>
              <span>(Edited)</span>
            </ShowIf>
          </div>
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
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default PostCard;
