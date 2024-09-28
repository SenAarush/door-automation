// "use client";

// import { authenticate } from "@/app/lib/actions";
import styles from "./RegisterForm.module.css";
import { useFormState } from "react-dom";

const RegisterForm = () => {
//   const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form className={styles.form}>
      <h1>Sign Up</h1>
      <input type="text" placeholder="name" name="name" />
      <input type="number" placeholder="rollno" name="rollno" />
      <input type="email" placeholder="email" name="email" />
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <input type="text" placeholder="domain" name="domain" />
      <button>Register</button>
      {/* {state && state} */}
    </form>
  );
};

export default RegisterForm;
