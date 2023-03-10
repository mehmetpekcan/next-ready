import { getSession } from "next-auth/react";
import { database } from "@/lib/database";

export default async function handle(req, res) {
  const { title, content, imageUrl } = req.body;

  const session = await getSession({ req });
  const result = await database.post.create({
    data: {
      title,
      content,
      imageUrl,
      author: { connect: { email: session?.user?.email } },
    },
  });
  res.status(200).json(result);
}
