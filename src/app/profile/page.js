import styles from "./profile.module.css";

const fields = [
  { label: "Full name", type: "text", placeholder: "Amina Noor" },
  { label: "Profession", type: "text", placeholder: "Product designer" },
  { label: "Location", type: "text", placeholder: "New York, USA" },
  { label: "Website", type: "url", placeholder: "https://example.com" },
];

export default function ProfilePage() {
  return (
    <main className={styles.profilePage}>
      <section className={styles.heroPanel}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Profile builder</p>
          <h1>Create a clean profile card for your audience.</h1>
          <p>
            This simple frontend-only page is designed for a polished, Twitter or LinkedIn-like profile setup
            with a warm orange theme.
          </p>
        </div>

        <div className={styles.previewCard}>
          <div className={styles.previewTop}>
            <div className={styles.avatar}>AN</div>
            <div>
              <p className={styles.previewName}>Amina Noor</p>
              <p className={styles.previewTitle}>Product designer · New York</p>
            </div>
          </div>
          <p className={styles.previewBio}>
            Helping brands share thoughtful stories with clear visuals and confident design.
          </p>
          <div className={styles.previewTags}>
            <span>#Design</span>
            <span>#Creators</span>
            <span>#BrandStory</span>
          </div>
        </div>
      </section>

      <section className={styles.formCard}>
        <div className={styles.formHeader}>
          <div>
            <p className={styles.eyebrow}>Tell your story</p>
            <h2>Complete your profile</h2>
          </div>
          <button type="button">Save draft</button>
        </div>

        <form className={styles.formGrid}>
          {fields.map((field) => (
            <label key={field.label} className={styles.field}>
              <span>{field.label}</span>
              <input type={field.type} placeholder={field.placeholder} />
            </label>
          ))}

          <label className={styles.fieldWide}>
            <span>Bio</span>
            <textarea
              rows="5"
              placeholder="Tell people what you do, what you care about, and what you’re building."
            />
          </label>

          <label className={styles.fieldWide}>
            <span>Highlights</span>
            <textarea
              rows="3"
              placeholder="Add your top achievements, topics, and goals."
            />
          </label>

          <div className={styles.actions}>
            <button type="submit" className={styles.primaryBtn}>Publish profile</button>
            <button type="button" className={styles.secondaryBtn}>Preview</button>
          </div>
        </form>
      </section>
    </main>
  );
}
