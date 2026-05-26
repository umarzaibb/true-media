"use client";
import styles from "./login.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  let [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  function onChangeForm(event) {
    let eventName = event.target.name;
    let value = event.target.value;
    setFormValues((prev) => {
      return {
        ...prev,
        [eventName]: value,
      };
    });
  }

  function onSubmit() {
    axios
      .post("http://localhost:3000/api/user/login", { ...formValues })
      .then((res) => {

        if (res.status == 200) {
          // Add a request interceptor
          axios.interceptors.request.use(function (config) {
            // console.log(res.data.accessToken);
            if(res.data.accessToken) config.headers.set('Authorization', `Bearer ${res.data.accessToken}`);
            // console.log(config.headers);
            return config;
          },()=>{
            alert('Login failed! PLease try again.')
          });

          router.push('/feed');
        }
      }).catch(()=>{
      
          alert('Login failed! PLease try again with correct info');
        
      });
  }

  return (
    <main className={styles["login-page"]}>
      <section className={styles["login-panel"]}>
        <div className={styles["brand-block"]}>
          <span className={styles["brand-mark"]}>T</span>
          <div>
            <p className={styles["brand-name"]}>TrueMedia</p>
            <p className={styles["brand-tag"]}>Social media for creators</p>
          </div>
        </div>

        <div className={styles["login-copy"]}>
          <h1>Welcome back to your community.</h1>
          <p>
            Sign in to manage your posts, connect with followers, and share your
            next great story.
          </p>
        </div>

        <div className={styles["login-form"]}>
          <label>
            Email address
            <input
              type="email"
              onChange={onChangeForm}
              name="email"
              placeholder="you@example.com"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              onChange={onChangeForm}
              name="password"
              placeholder="Enter your password"
            />
          </label>
          <button onClick={onSubmit}>Continue</button>
        </div>

        <p className={styles["login-help"]}>
          New to TrueMedia? <a href="/signup">Create an account</a>
        </p>
      </section>

      <aside className={styles["hero-panel"]}>
        <div className={styles["hero-card"]}>
          <p className={styles["hero-tag"]}>Feed made fresh</p>
          <h2>Create, connect, celebrate.</h2>
          <p>
            Grow your audience with a warm, modern space for stories,
            conversations, and creative momentum.
          </p>
        </div>
      </aside>
    </main>
  );
}
