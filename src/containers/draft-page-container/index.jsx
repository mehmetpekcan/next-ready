import Section from "@/components/core/section";
import { BlogCard } from "@/components/core/blog-card";

import styles from "./styles.module.scss";

function DraftPageContainer({ posts = [] }) {
  if (posts.length === 0) {
    return <div>Empty screen</div>;
  }

  return (
    <div>
      {posts.length > 0 && (
        <Section
          id="draft-posts"
          title="Draft Posts"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eveniet! Amet consectetur adipisicing elit. Rem, eveniet!"
        >
          <div className={styles.postsWrapper}>
            {posts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

export { DraftPageContainer };
