"use client"

import styles from "@/styles/Login.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Signin = () => {
  const { data: session } = useSession();
  return (
    <>
      {session?.user?.email ? (
        <>
          <p>{session.user.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <div className={styles.container}>
          <form className={styles.form}>
            <h1>Login</h1>
            <input
              type="text"
              placeholder="username"
              name="username"
            />
            <input
              type="password"
              placeholder="password"
              name="password"
            />
            <button onClick={() => signIn()}>
              Login with Github
            </button>
          </form>
        </div >
      )}
    </>
  );
};

export default Signin;
