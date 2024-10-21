import styles from "../ui/Register/Register.module.css";
import RegisterForm from "../ui/Register/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
