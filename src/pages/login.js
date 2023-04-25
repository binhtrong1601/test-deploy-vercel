import React from "react";
import styles from "@/styles/Login.module.css";
import { loginService } from "@/services/auth.service.js";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const HandleOnSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      if (!email || !password) {
        alert("Email or password is empty");
        return;
      }
      const { data } = await loginService(email, password);
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <h1 className={styles.title}>Login Page</h1>
      <form onSubmit={HandleOnSubmit}>
        <div>
          <label className={styles.email}>Email</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label className={styles.password}>Password</label>
          <input type="password" name="password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
