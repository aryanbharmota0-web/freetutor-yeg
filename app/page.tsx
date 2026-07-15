const parentForm = "https://docs.google.com/forms/d/e/1FAIpQLSddDDxtDnKcZRHzgFTDkF-YntJAnkoCUYZDrosCix3UTNKOeg/viewform?usp=preview";
const tutorForm = "https://docs.google.com/forms/d/1_U4X0ofJGwWXTUO5CXNKCwNw3f2Nbjw8u83d46HGeLk/viewform";

function Logo() {
  return (
    <span className="logo">
      <span className="logo-badge">FT</span>
      <span className="logo-name">FreeTutor<span>YEG</span></span>
    </span>
  );
}

const Arrow = () => <span aria-hidden="true">&#8599;</span>;

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <nav className="shell nav" aria-label="Main navigation">
          <a href="#top" aria-label="FreeTutor YEG home">
            <Logo />
          </a>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#subjects">Subjects</a>
            <a href="#signup">Sign up</a>
          </div>
          <a className="nav-button" href={parentForm} target="_blank" rel="noreferrer">
            Get started
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="shell hero-copy-solo">
          <div className="status-pill">
            <span /> Volunteer-run &middot; Edmonton, AB
          </div>
          <h1>
            Tutoring help,
            <br />
            <em>on the house.</em>
          </h1>
          <p className="hero-lede">
            Free online Math and English support for Edmonton kids in
            grades K-6 &mdash; matched with a high-school volunteer who actually
            wants to help them succeed.
          </p>
          <div className="hero-actions">
            <a className="button button-solid" href={parentForm} target="_blank" rel="noreferrer">
              Get free tutoring
            </a>
            <a className="button button-outline" href={tutorForm} target="_blank" rel="noreferrer">
              Volunteer as a tutor
            </a>
          </div>
          <div className="hero-facts" aria-label="Program facts">
            <div>
              <strong>$0</strong>
              <span>Always free</span>
            </div>
            <div>
              <strong>K-6</strong>
              <span>Grades served</span>
            </div>
            <div>
              <strong>1:1</strong>
              <span>Online sessions</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="shell intro-grid">
          <div>
            <p className="kicker">Why we started this</p>
            <h2>A tutor shouldn&apos;t be a luxury.</h2>
          </div>
          <div className="intro-copy">
            <p>
              We connect younger students who need a bit of extra support
              with high-school volunteers who remember exactly what that
              felt like &mdash; no cost, no catch, no pressure.
            </p>
          </div>
        </div>
      </section>

      <section className="section process-section" id="how">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="kicker">How it works</p>
              <h2>Three simple steps.</h2>
            </div>
          </div>
          <div className="process-grid">
            <article>
              <span className="process-number">01</span>
              <h3>Tell us what you need</h3>
              <p>
                A parent fills out the request form with their student&apos;s
                grade, subject, and availability.
              </p>
            </article>
            <article>
              <span className="process-number">02</span>
              <h3>We find a match</h3>
              <p>
                We pair the student with a volunteer tutor who fits their
                subject and schedule.
              </p>
            </article>
            <article>
              <span className="process-number">03</span>
              <h3>Start learning</h3>
              <p>
                Sessions run online, roughly an hour at a time, at whatever
                pace works best.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section subjects-section" id="subjects">
        <div className="shell">
          <div className="subjects-heading">
            <p className="kicker">What we cover</p>
            <h2>Math and English, done right.</h2>
          </div>
          <div className="subject-grid">
            <article className="subject-card">
              <span className="subject-symbol">&divide;</span>
              <h3>Math</h3>
              <p>
                Number sense, fractions, homework help, and building real
                confidence with numbers.
              </p>
            </article>
            <article className="subject-card">
              <span className="subject-symbol">Aa</span>
              <h3>English</h3>
              <p>
                Reading comprehension, grammar, and writing practice with
                patient, clear feedback.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section action-section" id="signup">
        <div className="shell">
          <div className="action-head">
            <p className="kicker">Ready when you are</p>
            <h2>Choose how you want to get involved.</h2>
          </div>
          <div className="action-grid">
            <a className="action-card action-parent" href={parentForm} target="_blank" rel="noreferrer">
              <span className="action-label">For parents</span>
              <h3>Request free tutoring</h3>
              <p>Tell us how we can support your child in Math or English.</p>
              <span className="action-link">Open parent form <Arrow /></span>
            </a>
            <a className="action-card action-tutor" href={tutorForm} target="_blank" rel="noreferrer">
              <span className="action-label">For high-school students</span>
              <h3>Become a volunteer tutor</h3>
              <p>Turn what you know into confidence for a younger student.</p>
              <span className="action-link">Open tutor form <Arrow /></span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-main">
          <div>
            <Logo />
            <p>
              Free online Math and English tutoring,
              <br />
              powered by Edmonton students.
            </p>
          </div>
          <div className="footer-links">
            <a href="#how">How it works</a>
            <a href="#subjects">Subjects</a>
            <a href="#signup">Sign up</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>&copy; 2026 FreeTutor YEG</span>
          <span>Student-led &middot; Edmonton, Alberta</span>
        </div>
      </footer>
    </main>
  );
}

