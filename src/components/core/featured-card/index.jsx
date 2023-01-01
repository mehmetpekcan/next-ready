import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.scss";

function FeaturedCard({ imageUrl, title, author, content, id, ...props }) {
  return (
    <div className={styles.featuredCard}>
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

      <Image src={imageUrl} alt={title} fill className={styles.image} />
    </div>
  );
}
export { FeaturedCard };
