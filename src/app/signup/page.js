'use client';

import styles from "./signup.module.css";
import { useState, useEffect } from "react";

export default function Signup() {

   let [formValues, setFormValues]= useState({
    name: '',
    email:'',
    password:''
   })

   function onChangeForm(event) {
    let eventName= event.target.name;
    let value=event.target.value;
    setFormValues((prev)=>{
        return {
            ...prev, [eventName]: value
        }
    })
   }

  return (
    <main className={styles["signup-page"]}>
      <section className={styles["signup-panel"]}>
        <div className={styles["brand-block"]}>
          <span className={styles["brand-mark"]}>T</span>
          <div>
            <p className={styles["brand-name"]}>TrueMedia</p>
            <p className={styles["brand-tag"]}>Social media for creators</p>
          </div>
        </div>

        <div className={styles["signup-copy"]}>
          <h1>Start your creative network.</h1>
          <p>
            Sign up to share stories, connect with your community, and spark engagement across your social feed.
          </p>
        </div>

        <form className={styles["signup-form"]}>
          <label>
            Email address
            <input value={formValues.email} onChange={onChangeForm} type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Full name
            <input value={formValues.name} onChange={onChangeForm} type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Password
            <input type="password" value={formValues.password} onChange={onChangeForm} name="password" placeholder="Create a password" />
          </label>
          <button type="submit">Create account</button>
        </form>

        <p className={styles["signup-help"]}>
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </section>

      <aside className={styles["hero-panel"]}>
        <div className={styles["hero-card"]}>
          <p className={styles["hero-tag"]}>Welcome to a brighter feed</p>
          <h2>Create, connect, celebrate.</h2>
          <p>
            TrueMedia helps creators build a warm and easy space for posting, collaborating, and growing audiences.
          </p>
        </div>
      </aside>
    </main>
  );
}
