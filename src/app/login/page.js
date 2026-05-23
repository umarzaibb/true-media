import styles from "./login.module.css";

export default function Login() {
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
            Sign in to manage your posts, connect with followers, and share your next great story.
          </p>
        </div>

        <form className={styles["login-form"]}>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>
          <button type="submit">Continue</button>
        </form>

        <p className={styles["login-help"]}>
          New to TrueMedia? <a href="/signup">Create an account</a>
        </p>
      </section>

      <aside className={styles["hero-panel"]}>
        <div className={styles["hero-card"]}>
          <p className={styles["hero-tag"]}>Feed made fresh</p>
          <h2>Create, connect, celebrate.</h2>
          <p>
            Grow your audience with a warm, modern space for stories, conversations, and creative momentum.
          </p>
        </div>
      </aside>
    </main>
  );
}