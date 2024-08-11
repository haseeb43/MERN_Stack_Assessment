import React, { useEffect, useState } from "react";
import PageWrapper from "../../wrappers/pageWrapper";
import { useParams } from "react-router-dom";
import BlogPostApi from "../../api/post/post";
import FormattedDate from "../../components/helpers/formateDate";

const ReadPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    BlogPostApi.get_single(id)
      .then((res) => {
        setPost(res.data.data);
      })
      .catch((err) => {
        toast.errpr(err.response.data.message);
      });
  }, []);
  console.log(`post`, post);
  return (
    <PageWrapper>
      <div>
        <h1 className="text-6xl mb-20 text-[#0cbf83]">{post?.title}</h1>
        <p className="text-xl mb-10">{post?.content}</p>

        <div className="flex justify-between items-center text-xs text-slate-400">
          <div>
            Posted : <FormattedDate timestamp={post?.createdAt} />
          </div>
          <div>
            Last Update : <FormattedDate timestamp={post?.updatedAt} />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ReadPost;
