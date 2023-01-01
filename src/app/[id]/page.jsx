import { database } from "@/lib/database";
import { PostDetailContainer } from "@/containers/post-detail-container";
import { notFound } from "next/navigation";

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

  if (!post) {
    notFound();
  }

  return <PostDetailContainer post={post} />;
}

export default Post;
