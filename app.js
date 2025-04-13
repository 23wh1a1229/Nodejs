import './App.css';

function App() {
  return (
    <div className="resume">
      <h1>Valeti Malleshwari</h1>
      <p>B V R I T H, Bachupally, Hyderabad-500090</p>
      <p>
        📞 +91 7794971475 | ✉️{' '}
        <a
          href="mailto:23wh1a1229@bvrithyderabad.edu.in"
          onClick={() => alert("Opening your mail claient to contact Malleshwari!")}
        >
          23wh1a1229@bvrithyderabad.edu.in
        </a>
      </p>

      <section>
        <h2>Career Objective</h2>
        <p>
          Enthusiastic and driven B.Tech student eager to secure an internship
          position with a reputable organization where I can apply my technical
          knowledge, develop new skills, and contribute meaningfully to projects
          while gaining practical experience in a professional environment.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>BVRIT College of Engineering for Women (JNTUH)</strong> – Sep
            2023 – Present
            <br />
            B.Tech in Computer Science and Engineering | CGPA: 8.23
          </li>
          <li>
            <strong>Sri Chaitanya Bharathi Junior College</strong> – 2021–2023
            <br />
            Higher Secondary | Percentage: 93.9%
          </li>
          <li>
            <strong>Wisdom High School</strong> – 2021
            <br />
            Secondary | CGPA: 10
          </li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <p>
          <strong>Technical Skills:</strong> C, Python, Java, SQL, Tableau, MS
          Word, LaTeX
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <p>🎮 Developed a Ping Pong game in Python implementing real-time table tennis.</p>
        <p><strong>Contribution:</strong> GUI, Resource finding, and Code</p>
        <p><strong>Tech Stack:</strong> Tkinter, PIL, Pygame, pyttsx3, ttk</p>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          <li>Flipkart Grid 6.0 - E-commerce and Tech Quiz (First Level)</li>
          <li>Infosys Certification - Completion of Julia</li>
          <li>Aditya University - Data Visualization with Power BI & Tableau</li>
          <li>Semiconductor Fabrication – Purdue University & Intel</li>
          <li>Pure Earth Environment Conference – Nov 2023</li>
        </ul>
      </section>

      <section>
        <h2>Soft Skills</h2>
        <ul>
          <li>Good Communication</li>
          <li>Time Management</li>
          <li>Adaptability</li>
        </ul>
      </section>

      <section>
        <h2>Languages</h2>
        <p>Telugu (Native), English, Hindi</p>
      </section>
    </div>
  );
}

export default App;
