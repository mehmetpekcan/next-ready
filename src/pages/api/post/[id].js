import { database } from "@/lib/database";

export default async function handle(req, res) {
  const postId = req.query.id;
  if (req.method === "DELETE") {
    const post = await database.post.delete({
      where: { id: postId },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
