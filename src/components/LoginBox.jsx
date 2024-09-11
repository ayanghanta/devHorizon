import Button from "./Button";
import styles from "./LoginBox.module.css";
function LoginBox() {
  return (
    <div className={styles.loginBoxContainer}>
      <input type="email" placeholder="Your email" />
      <input type="password" placeholder="password" />

      <Button type="login">Login</Button>
    </div>
  );
}

export default LoginBox;
