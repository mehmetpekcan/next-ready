import Link from "next/link";

import { database } from "@/lib/database";
import { getSession } from "@/lib/session";
import { DraftPageContainer } from "@/containers/draft-page-container";

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

  return <DraftPageContainer posts={drafts} />;
}

export default Drafts;
