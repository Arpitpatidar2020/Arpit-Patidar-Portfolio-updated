import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span></h2>

      <div className="skills-grid">
        {/* Technologies / Programming Languages */}
        <article className="skill-card">
          <header className="skill-card__header">
            <div className="skill-card__icon" aria-hidden="true">🖥️</div>
            <h3 className="skill-card__title">Technologies / Programming Languages</h3>
          </header>
          <div className="skill-card__body">
            <ul className="pill-list">
              <li className="pill">HTML</li>
              <li className="pill">CSS</li>
              <li className="pill">JavaScript</li>
              <li className="pill">React.js</li>
              <li className="pill">C</li>
              <li className="pill">C++</li>
              <li className="pill">OOPs (Object-Oriented Programming)</li>
            </ul>
          </div>
        </article>

        {/* Database / Query Language */}
        <article className="skill-card">
          <header className="skill-card__header">
            <div className="skill-card__icon" aria-hidden="true">📊</div>
            <h3 className="skill-card__title">Database / Query Language</h3>
          </header>
          <div className="skill-card__body">
            <ul className="bullet-list">
              <li><strong>Database</strong> — General concept of storing and managing data.</li>
              <li><strong>SQL</strong> — Database query language.</li>
            </ul>
          </div>
        </article>

        {/* Soft Skills / Interpersonal Skills */}
        <article className="skill-card">
          <header className="skill-card__header">
            <div className="skill-card__icon" aria-hidden="true">🤝</div>
            <h3 className="skill-card__title">Soft Skills / Interpersonal Skills</h3>
          </header>
          <div className="skill-card__body">
            <ul className="pill-list">
            <li className="pill">Active Listening</li>
            <li className="pill">Collaboration</li>
            <li className="pill">Communication</li>
            <li className="pill">Conflict Resolution</li>
            <li className="pill">Empathy</li>
            <li className="pill">Leadership</li>
            <li className="pill">Networking</li>
            <li className="pill">Teamwork</li>
            </ul>
          </div>
        </article>

        {/* Cognitive & Work Skills */}
        <article className="skill-card">
          <header className="skill-card__header">
            <div className="skill-card__icon" aria-hidden="true">🧠</div>
            <h3 className="skill-card__title">Cognitive &amp; Work Skills</h3>
          </header>
          <div className="skill-card__body">
            <ul className="pill-list">
            <li className="pill">Adaptability &amp; Flexibility</li>
            <li className="pill">Creativity</li>
            <li className="pill">Critical Thinking</li>
            <li className="pill">Decision Making</li>
            <li className="pill">Dedication</li>
            <li className="pill">Problem-Solving</li>
            <li className="pill">Time Management</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Skills;