import Link from "next/link";
import { database } from "@/lib/database";

const fetchPosts = async () => {
  const feed = await database.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return feed;
};

async function HomePage() {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Full Stack App Test</h1>
      {posts?.length > 0 &&
        posts.map((post) => (
          <Link key={post.id} href={`/${post.id}`}>
            <h3>- {post.title}</h3>
          </Link>
        ))}
    </div>
  );
}

export default HomePage;
