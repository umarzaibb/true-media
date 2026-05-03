export default function Home() {
  return (
    <main className="landing-page">
      <header className="hero-header">
        <div className="brand">TrueMedia</div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#community">Community</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="signup" className="btn btn-primary">Join Now</a>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Social media simplified</p>
          <h1>Build connections, share creativity, and grow together.</h1>
          <p className="hero-description">
            TrueMedia brings your community to life with beautiful feeds,
            real-time conversations, and tools crafted for creators.
          </p>
          <div className="hero-actions">
            <a href="signup" className="btn btn-primary">Get Started</a>
            <a href="#features" className="btn btn-secondary">See Features</a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>1.8M</strong>
              <span>Active users</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Live support</span>
            </div>
            <div>
              <strong>250K</strong>
              <span>Posts shared daily</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-header">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="feed-card">
              <div className="profile-row">
                <div className="avatar"></div>
                <div>
                  <p className="profile-name">Mia Johnson</p>
                  <p className="profile-sub">Photographer · NYC</p>
                </div>
              </div>
              <p className="feed-text">Just posted a new sunset reel. Loving the summer glow!</p>
              <div className="feed-tags">#sunset #creative #truecommunity</div>
              <div className="feed-reactions">
                <span>❤️ 1.2K</span>
                <span>💬 180</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="feature-section">
        <div className="section-heading">
          <p>What you can do</p>
          <h2>Every tool for creators and communities.</h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>Story-driven feeds</h3>
            <p>Share immersive posts, highlight moments, and keep your audience engaged.</p>
          </article>
          <article className="feature-card">
            <h3>Live interactions</h3>
            <p>Host live discussions, polls, and Q&amp;A sessions with real-time reactions.</p>
          </article>
          <article className="feature-card">
            <h3>Creator tools</h3>
            <p>Schedule content, track engagement, and grow your reach with ease.</p>
          </article>
        </div>
      </section>

      <section id="community" className="community-section">
        <div className="community-card">
          <h2>Join a vibrant orange-powered community.</h2>
          <p>From brand storytellers to lifestyle creators, TrueMedia empowers every voice.</p>
          <div className="community-actions">
            <a href="signup" className="btn btn-primary">Create your profile</a>
            <a href="#contact" className="btn btn-secondary">Learn more</a>
          </div>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <p>© 2026 TrueMedia. Designed for creators, powered by connection.</p>
      </footer>
    </main>
  );
}
