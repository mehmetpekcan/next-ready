import ReactMarkdown from "react-markdown";
import { database } from "@/lib/database";
import PublishButton from "./publish-button";

const fetchPost = async (id) => {
  const post = await database.post.findUnique({
    where: {
      id: String(id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });

  return post;
};

async function Post({ params }) {
  const post = await fetchPost(params.id);

  let title = post.title;

  if (!post.published) {
    title = `${title} (Draft)`;
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>By {post?.author?.name || "Unknown author"}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
      {!post.published && <PublishButton id={post.id} />}
    </div>
  );
}

export default Post;
