import './App.css';

function App() {
  return (
    <div className="App">
      <header className="resume-header">
        <h1>Jahnavi P R</h1>
        <p className="contact">
          📞 9972111526 &nbsp;|&nbsp; ✉️{' '}
          <a href="mailto:jahnavipalyaramesh@gmail.com">
            jahnavipalyaramesh@gmail.com
          </a>{' '}
          &nbsp;|&nbsp; 📍 Bangalore - 560072
        </p>
      </header>

      <main className="resume-body">
        <section>
          <h2>Objective</h2>
          <p>
            Computer Applications student eager to learn more about low-code,
            no-code systems, front end development, and the evolution of AI
            in the technology field. Looking to enhance my skills and make
            meaningful contributions.
          </p>
        </section>

        <section>
          <h2>Education</h2>

          <div className="entry">
            <div className="entry-header">
              <h3>Bachelor of Computer Applications (BCA) (Hons.)</h3>
              <span>2024 – 2028</span>
            </div>
            <p className="entry-subtitle">
              RV University, Bangalore, India — 2nd Year Student
            </p>
          </div>

          <div className="entry">
            <div className="entry-header">
              <h3>PCMB</h3>
              <span>2022 – 2024</span>
            </div>
            <p className="entry-subtitle">MES PU College</p>
          </div>

          <div className="entry">
            <div className="entry-header">
              <h3>Schooling</h3>
              <span>2022</span>
            </div>
            <p className="entry-subtitle">Sri Vani Education Centre</p>
          </div>
        </section>

        <section>
          <h2>Projects</h2>
          <div className="entry">
            <div className="entry-header">
              <h3>Time&amp;Track — Student Productivity App (UI/UX)</h3>
            </div>
            <p>
              Led the full design of Time&amp;Track, a mobile scheduling app
              for students that combines class schedules, exam tracking, and
              reminders in one platform, from early wireframes and user flow
              mapping to the final visual language.
            </p>
            <ul>
              <li>
                Designed the app's UI system — colour palette, typography,
                component library, and iconography — for a cohesive,
                student-friendly experience.
              </li>
              <li>
                Prioritized information hierarchy and layout so key details
                like deadlines and exam alerts stood out without cluttering
                the interface.
              </li>
              <li>
                Designed a dedicated Teacher's Control module allowing
                faculty to publish and update schedules and assignment
                reminders in real time.
              </li>
              <li>
                Translated designs into working frontend screens, ensuring
                implementation stayed true to the original design intent.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Skills</h2>

          <div className="skills-group">
            <h4>Programming Languages</h4>
            <ul className="skills-list">
              <li>Python</li>
              <li>Java (basics)</li>
              <li>HTML (basics)</li>
            </ul>
          </div>

          <div className="skills-group">
            <h4>Software Skills</h4>
            <ul className="skills-list">
              <li>Figma</li>
            </ul>
          </div>

          <div className="skills-group">
            <h4>Soft Skills</h4>
            <ul className="skills-list">
              <li>Teamwork &amp; Collaboration</li>
              <li>Communication Skills &amp; Time Management</li>
              <li>Quick Learning &amp; Adaptability</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Additional Information</h2>

          <div className="skills-group">
            <h4>Languages Known</h4>
            <ul className="skills-list">
              <li>Kannada</li>
              <li>Hindi</li>
              <li>English</li>
            </ul>
          </div>

          <div className="skills-group">
            <h4>Hobbies</h4>
            <ul className="skills-list">
              <li>Cooking</li>
              <li>Learning New Languages</li>
              <li>Travelling</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;