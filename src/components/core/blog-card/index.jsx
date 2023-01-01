import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.scss";

function BlogCard({ imageUrl, title, author, content, id, ...props }) {
  return (
    <div className={styles.blogCard}>
      <div className={styles.imageWrapper}>
        <Image src={imageUrl} alt={title} fill className={styles.image} />
      </div>

      <div className={styles.contentWrapper}>
        <span>
          <p className={styles.author}>By {author.name}</p>
          <h3>{title}</h3>
        </span>
        <p>{content}</p>
        <Link href={`/${id}`} className={styles.readMoreButton}>
          Read more
        </Link>
      </div>
    </div>
  );
}

export { BlogCard };
