import Link from "next/link";
import { database } from "@/lib/database";
import { HomePageContainer } from "@/containers/home-page-container";

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

  return <HomePageContainer posts={posts} />;
}

export default HomePage;
