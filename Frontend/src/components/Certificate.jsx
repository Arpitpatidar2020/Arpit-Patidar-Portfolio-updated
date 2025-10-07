import React from 'react';
import '../styles/Certificate.css';

const Certificate = () => {
    const certificates = [
        { id: 1, image: "/certificate.arpit/Advance Cpp certific_page-0001.jpg", title: "Advanced C++ Certification" },
        { id: 2, image: "/certificate.arpit/ARPIT-PATIDAR-Participant-Certificate (3)_page-0001.jpg", title: "Participant Certificate" },
        { id: 3, image: "/certificate.arpit/ArpitPatidar-VIP 2023_AITR_CL-certificate_page-0001.jpg", title: "VIP 2023 AITR Certificate" },
        { id: 4, image: "/certificate.arpit/ArpitPatidar-VIP 2023_AITR_CY-certificate (3)_page-0001.jpg", title: "VIP 2023 AITR Cybersecurity" },
        { id: 5, image: "/certificate.arpit/ArpitPatidar-VIP 2023_AITR_CY-certificate_page-0001.jpg", title: "VIP 2023 AITR Achievement" },
        { id: 6, image: "/certificate.arpit/ArpitPatidar-VIP 2023_AITR_PK-certificate (1)_page-0001.jpg", title: "VIP 2023 AITR Performance" },
        { id: 7, image: "/certificate.arpit/WhatsApp Image 2024-04-29 at 4.01.33 PM.jpeg", title: "Achievement Certificate" },
        { id: 8, image: "/certificate.arpit/WhatsApp Image 2024-04-29 at 4.04.31 PM.jpeg", title: "Recognition Certificate" },
        { id: 9, image: "/certificate.arpit/Java certificate_page-0001.jpg", title: "Java Certification" },
        { id: 10, image: "/certificate.arpit/C & C++OOPS certificate crop12.jpg", title: "C & C++ OOPs Certification" },
        { id: 11, image: "/certificate.arpit/Flipkart grid 6.0 ce_page-0001.jpg", title: "Flipkart Grid 6.0 Certificate" },
        { id: 12, image: "/certificate.arpit/certificate naukari.com_page-0001.jpg", title: "Naukri.com Certification" }
    ];

    return (
        <section className="certificate" id="certificate">
            <h2 className="heading">My <span>Certificates</span></h2>
            <div className="certificates-container">
                {certificates.map((cert) => (
                    <div className="box" key={cert.id}>
                        <img 
                            src={cert.image} 
                            alt={cert.title}
                            className="certificate-img"
                        />
                        <div className="content">
                            <h2>Certification #{cert.id}</h2>
                            <p>{cert.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificate;
