import { database } from "@/lib/database";

export default async function handle(req, res) {
  const postId = req.query.id;
  const post = await database.post.update({
    where: { id: postId },
    data: { published: true },
  });
  res.status(200).json(post);
}
