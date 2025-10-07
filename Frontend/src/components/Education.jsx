import React from 'react';
import '../styles/Education.css';

const Education = () => {
    return (
        <section className="education" id="education">
            <h1 className="heading">
                <i className="fas fa-graduation-cap"></i> My <span>Education</span>
            </h1>
            <p className="quote">Education is not the learning of facts, but the training of the mind to think.</p>
            <div className="box-container">
                <div className="box">
                    <div className="image">
                        <img draggable="false" src="images/AITR Image.jpg" alt="AITR" />
                    </div>
                    <div className="content">
                        <h3>Bachelor Of Technology In Computer Science</h3>
                        <p style={{ color: 'black', marginLeft: '1rem', textAlign: 'left' }}>
                            Acropolis Institute Of Technology And Research, Indore (AITR)  |  RGPV
                        </p>
                        <h4>CGPA: 7.78 / 10.0</h4>
                        <h4>2021-2025 | Completed </h4>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img draggable="false" src="images/saraswati vidhya mandir shajapur .jpg" alt="Saraswati Vidhya Mandir" />
                    </div>
                    <div className="content">
                        <h3>HSC Mathematics | Informatic Practices</h3>
                        <p style={{ color: 'black', marginLeft: '1rem', textAlign: 'left' }}>
                            Saraswati Vidhya Mandir H.S School, Shajapur  | State Board
                        </p>
                        <h4>Percentage: 90.0% / 100%</h4>
                        <h4>2019-2021 | Completed</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;




