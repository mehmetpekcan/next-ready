import Section from "@/components/core/section";
import { FeaturedCard } from "@/components/core/featured-card";
import { BlogCard } from "@/components/core/blog-card";

import styles from "./styles.module.scss";

function HomePageContainer({ posts = [] }) {
  if (posts.length === 0) {
    return <div>Empty screen</div>;
  }

  const [featurePost, ...otherPosts] = posts;

  return (
    <div className={styles.homepage}>
      <Section id="feature-blog">
        <FeaturedCard {...featurePost}></FeaturedCard>
      </Section>
      {otherPosts.length > 0 && (
        <Section
          id="latest-blogs"
          title="Latest Blogs"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eveniet! Amet consectetur adipisicing elit. Rem, eveniet!"
        >
          <div className={styles.otherPostsWrapper}>
            {otherPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

export { HomePageContainer };
