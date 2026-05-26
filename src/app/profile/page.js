'use client';

import styles from "./profile.module.css";

const interests = ["Design", "Tech", "Wellness", "Travel", "Marketing", "Music"];

export default function ProfileFormPage() {
  return (
    <main className={styles.profilePage}>
      <section className={styles.profilePanel}>
        <div className={styles.brandBlock}>
          <span className={styles.brandMark}>T</span>
          <div>
            <p className={styles.brandName}>TrueMedia</p>
            <p className={styles.brandTag}>Build your creator profile</p>
          </div>
        </div>

        <div className={styles.profileIntro}>
          <p className={styles.eyebrow}>Profile setup</p>
          <h1>Create a simple profile that feels like Twitter or LinkedIn.</h1>
          <p>
            Add your basics, choose what you care about, and make your profile feel warm, polished, and ready to share.
          </p>
        </div>

        <form className={styles.profileForm}>
          <label>
            Full name
            <input type="text" placeholder="Alex Rivera" />
          </label>

          <label>
            Headline
            <input type="text" placeholder="Product designer • storyteller" />
          </label>

          <label>
            Location
            <input type="text" placeholder="New York, USA" />
          </label>

          <label>
            Bio
            <textarea rows="4" placeholder="Tell people what you create, learn, or care about."></textarea>
          </label>

          <div className={styles.formGrid}>
            <label>
              Website
              <input type="url" placeholder="https://example.com" />
            </label>

            <label>
              Career
              <input type="text" placeholder="Creative strategist" />
            </label>
          </div>

          <div className={styles.interestWrap}>
            <p>Interests</p>
            <div className={styles.interestChips}>
              {interests.map((item) => (
                <button type="button" key={item}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.secondaryButton}>
              Preview
            </button>
            <button type="submit" className={styles.primaryButton}>
              Save profile
            </button>
          </div>
        </form>
      </section>

      <aside className={styles.previewPanel}>
        <div className={styles.previewCard}>
          <div className={styles.previewHeader}>
            <div className={styles.avatar}>AR</div>
            <div>
              <h2>Alex Rivera</h2>
              <p>Product designer • storyteller</p>
            </div>
          </div>

          <p className={styles.previewBio}>
            Building thoughtful digital experiences and sharing creative notes about design, community, and growth.
          </p>

          <div className={styles.previewMeta}>
            <span>📍 New York, USA</span>
            <span>🌐 example.com</span>
          </div>

          <div className={styles.previewChips}>
            <span>Design</span>
            <span>Tech</span>
            <span>Travel</span>
          </div>
        </div>
      </aside>
    </main>
  );
}
