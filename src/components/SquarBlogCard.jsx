import styles from "./SquarBlogCard.module.css";
function SquarBlogCard() {
  return (
    <div className={styles.blogCard}>
      <img src="testblog.png" alt="poster of the BLOG TITLE" />
      <div className={styles.blogCardContent}>
        <p className={styles.title}>
          How Much Firewood Do You Need for Your Camping Trip?
        </p>
        <p className={styles.publishedDate}>septembar 4,2024</p>
        <p className={styles.shortDescription}>
          Plan your camping firewood nneds for weekends and weeklong trips.
          Learn how many bundles to bring for a cozy and anojyable campfire
          experience.
        </p>
        <span className={styles.arrow}>&rarr;</span>
      </div>
    </div>
  );
}

export default SquarBlogCard;
