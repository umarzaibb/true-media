import styles from "./feed.module.css";

const suggestedTopics = ["#OrangeDesign", "#CreatorLife", "#Community", "#Trends"];

const posts = [
  {
    author: "Amina Noor",
    handle: "@aminanoor",
    time: "12m",
    title: "Fresh ideas for a brighter content calendar",
    body:
      "A small orange accent can completely change the feel of a landing page. I’m testing a warm, editorial look today.",
    stats: { likes: 124, comments: 18, reposts: 9 },
  },
  {
    author: "Leo Chen",
    handle: "@leoch",
    time: "36m",
    title: "Quick tip: keep your feed readable and punchy",
    body:
      "Large headlines, clear spacing, and a calm neutral background make posts feel lighter and more approachable.",
    stats: { likes: 86, comments: 12, reposts: 5 },
  },
  {
    author: "Sofia Hale",
    handle: "@sofiahale",
    time: "1h",
    title: "A simple social feed can still feel premium",
    body:
      "This mockup uses soft orange highlights, rounded cards, and a clean layout to keep the focus on the content.",
    stats: { likes: 210, comments: 31, reposts: 14 },
  },
];

export default function FeedPage() {
  return (
    <main className={styles.feedPage}>
      <div className={styles.shell}>
        <aside className={styles.sidebar}>
          <div className={styles.brandCard}>
            <p className={styles.brandMark}>T</p>
            <div>
              <h1>TrueMedia Feed</h1>
              <p>Simple social vibes with an orange glow.</p>
            </div>
          </div>

          <nav className={styles.sideNav}>
            <a href="#">Home</a>
            <a href="#">Explore</a>
            <a href="#">Notifications</a>
            <a href="#">Messages</a>
            <a href="#">Bookmarks</a>
          </nav>

          <div className={styles.trendingCard}>
            <h2>Trending</h2>
            <ul>
              <li>Design inspiration</li>
              <li>Creator tools</li>
              <li>Community spotlight</li>
            </ul>
          </div>
        </aside>

        <section className={styles.feedColumn}>
          <div className={styles.composeCard}>
            <div className={styles.avatar}>TM</div>
            <div className={styles.composeBody}>
              <p>What would you like to share today?</p>
              <div className={styles.composeActions}>
                <span>Photo</span>
                <span>Poll</span>
                <span>Article</span>
              </div>
            </div>
            <button type="button">Post</button>
          </div>

          <div className={styles.feedList}>
            {posts.map((post) => (
              <article key={post.handle + post.time} className={styles.postCard}>
                <div className={styles.postHeader}>
                  <div className={styles.avatar}>{post.author[0]}</div>
                  <div>
                    <h2>{post.author}</h2>
                    <p>
                      {post.handle} · {post.time}
                    </p>
                  </div>
                </div>

                <h3>{post.title}</h3>
                <p>{post.body}</p>

                <div className={styles.tagRow}>
                  {suggestedTopics.slice(0, 2).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.postActions}>
                  <span>♥ {post.stats.likes}</span>
                  <span>💬 {post.stats.comments}</span>
                  <span>↺ {post.stats.reposts}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className={styles.rightRail}>
          <div className={styles.profileCard}>
            <div className={styles.avatarLarge}>TM</div>
            <h2>@yourprofile</h2>
            <p>Building a place for great conversations.</p>
          </div>

          <div className={styles.suggestedCard}>
            <h2>Suggested for you</h2>
            <div className={styles.suggestionItem}>
              <strong>Design Sprint</strong>
              <p>Creative ideas for modern UI</p>
            </div>
            <div className={styles.suggestionItem}>
              <strong>Orange Lab</strong>
              <p>Visual systems and product tips</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
