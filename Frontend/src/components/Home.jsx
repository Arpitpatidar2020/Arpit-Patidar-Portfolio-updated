import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello 👋,It's Me</h3>
                <h1>Arpit Patidar</h1>
                <h3>And I'm a <span>DEVELOPER</span></h3>
                <p>I am a web developer with over 1.5 year of experience building responsive, user-friendly websites and creating clean, modern interfaces. I’m passionate about writing efficient code and delivering great user experiences.</p>
                <div className="social-media">
                    <a href="https://www.facebook.com/arpit.patidar.7311?mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://github.com/Arpitpatidar2020"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/arpit_patidar2020?igsh=MW8yaTl5Y210MDNlag=="><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/arpit-patidar-32205724b"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://t.me/Arpitpatidar_2020"><i className="fab fa-telegram-plane"></i></a>
                </div>
                <a href="arpit.cv/Arpit Patidar Resume new.pdf" target="_blank" download className="btn">Download Resume<i className="fas fa-download"></i></a>
            </div>
        </section>
    );
};

export default Home;