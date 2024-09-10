import styles from "./MyInfo.module.css";
function MyInfo() {
  return (
    <div className={styles.myDetailsContainer}>
      <h1>Hey,I&apos;m Ayan Ghanta.</h1>
      <div className={styles.images}>
        <img src="myPhoto.jpg" alt="photo of ayan ghanta" />
      </div>
      <div className={styles.content}>
        <p>
          A developer passionate about turning ideas into reality through code.
        </p>
        <p>
          I started my journey in Physics, earning my degree in 2024. But it
          wasn&apos;t long before I realized my true passion wasn&apos;t in the
          world of formulas and equations. In 2022, I was introduced to coding,
          and everything changed. I discovered the thrill of writing code and
          watching the world transform, bit by bit, on the screen in front of
          me.
        </p>
        <p>
          Since August of that year, I&apos;ve immersed myself in web
          development, learning and building with one goal in mind: to create
          meaningful apps that can make a real difference. The idea of being an
          indie hacker excites me—working independently, building products that
          help people, and living life on my own terms, with code as my constant
          companion.
        </p>
        <p>
          My dream is simple yet powerful: to be a full-time developer, doing
          what I love every day, creating something new with every line I write.
        </p>
        <p>
          And when I&apos;m not in front of a computer, I&apos;m probably lost
          in the pages of a good thriller novel, always on the lookout for the
          next great story.
        </p>
      </div>
    </div>
  );
}
// inspire form https://alexkondov.com/

export default MyInfo;
