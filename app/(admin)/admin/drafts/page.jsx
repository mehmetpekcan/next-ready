import Link from "next/link";

import { database } from "@/lib/database";
import { getSession } from "@/lib/session";

export const getDraftPosts = async () => {
  const session = await getSession();

  const drafts = await database.post.findMany({
    where: {
      author: { email: session.user.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return drafts;
};

async function Drafts() {
  const drafts = await getDraftPosts();

  return (
    <div>
      <h1>My Drafts</h1>
      <main>
        {drafts.map((post) => (
          <Link key={post.id} href={`/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>By {post.author.name}</p>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default Drafts;
