import styles from "./SmallBlogCard.module.css";

function SmallBlogCard() {
  return (
    <div className={styles.blogCard}>
      <img src="testblog2.png" alt="image of a TEST BLOG" />
      <p className={styles.title}>
        Exploring Mountan&apos;s Coolest Summer Camping and Sports
      </p>
      <span className={styles.arrow}>&rarr;</span>
    </div>
  );
}

export default SmallBlogCard;
