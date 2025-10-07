
import React, { useState } from 'react';
import '../styles/About.css';

const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
        <section className="about" id="about">
            <div className="about-img">
                <img src="/images/Arpit image.png" alt="About Me" />
            </div>
            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Frontend Developer!</h3>
                <p>
                I am Arpit Patidar, a passionate and motivated Front-End Developer with a Bachelor of Technology (B.Tech) degree in Computer Science from Acropolis Institute of Technology and Research (AITR), Indore.<br /><br />

                I have a solid foundation in programming languages such as C, C++, and core concepts like Object-Oriented Programming (OOP), along with database management using DBMS and SQL. My technical expertise also includes HTML, CSS, JavaScript, and React.js, which I use to build responsive, user-friendly, and seamless web interfaces.<br /><br />

                As a fast learner with a strong interest in problem-solving and continuous learning, I am committed to staying updated with modern web development trends and best practices. <br /><br />
                    
                    {isExpanded && (
            <span className="more-text"> 
                I enjoy turning ideas into impactful digital experiences and strive to write clean, efficient, and maintainable code.<br /><br />

                I am now seeking opportunities to contribute to real-world projects, collaborate with experienced professionals, and grow into a versatile developer while delivering value through innovative software solutions.
                        </span>
                    )}
                </p>
                <button className="btn" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            </div>
        </section>

        <section className="interests" id="interests">
            <h2 className="heading">Interests <span>&amp; Hobbies</span></h2>

            <div className="interests-grid">
                <article className="interest-card">
                    <header className="interest-card__header">
                        <div className="interest-card__icon" aria-hidden="true">🎯</div>
                        <h3 className="interest-card__title">Personal Interests</h3>
                    </header>
                    <ul className="chip-list">
                        <li className="chip">Fitness &amp; Outdoor Walks</li>
                        <li className="chip">Music</li>
                        <li className="chip">Travel &amp; Exploration</li>
                        <li className="chip">Sports</li>
                        <li className="chip">Swimming</li>
                        
                    </ul>
                </article>

                <article className="interest-card">
                    <header className="interest-card__header">
                        <div className="interest-card__icon" aria-hidden="true">💻</div>
                        <h3 className="interest-card__title">Tech &amp; Learning</h3>
                    </header>
                    <ul className="chip-list">
                    <li className="chip">Coding Challenges</li>
                    <li className="chip">Front-end Developer</li>
                    <li className="chip">Open-Source</li>
                    <li className="chip">Reading Tech Blogs</li>
                    <li className="chip">UI/UX Inspirations</li>

                    </ul>
                </article>

                <article className="interest-card">
                    <header className="interest-card__header">
                        <div className="interest-card__icon" aria-hidden="true">🤝</div>
                        <h3 className="interest-card__title">Community &amp; Hobbies</h3>
                    </header>
                    <ul className="chip-list">
                    <li className="chip">Blogging</li>
                    <li className="chip">Gaming (Strategy/Puzzle)</li>
                    <li className="chip">Mentoring &amp; Knowledge Sharing</li>
                    <li className="chip">Problem Solving</li>
                    </ul>
                </article>
            </div>
        </section>
        </>
    );
};

export default About;