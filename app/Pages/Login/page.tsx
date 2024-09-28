import styles from "../ui/Login/login.module.css";
import LoginForm from "../ui/Login/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
