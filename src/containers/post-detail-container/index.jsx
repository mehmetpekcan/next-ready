import ReactMarkdown from "react-markdown";
import PublishButton from "@/components/core/publish-button";

import styles from "./styles.module.scss";
import Image from "next/image";

function PostDetailContainer({ post }) {
  return (
    <div className={styles.postDetailContainer}>
      <div className={styles.imageWrapper}>
        <Image src={post.imageUrl} alt={post.title} fill />
      </div>
      <p className={styles.author}>By {post.author.name}</p>
      <h2>
        {post.title}
        {!post.published && " (draft)"}
      </h2>
      <ReactMarkdown>{post.content}</ReactMarkdown>
      {!post.published && <PublishButton id={post.id} />}
    </div>
  );
}

export { PostDetailContainer };
