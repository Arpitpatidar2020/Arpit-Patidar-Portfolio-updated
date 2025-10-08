
# Arpit-Patidar-Portfolio-updated-
# Arpit Patidar - Portfolio

I built this portfolio website using **React.js** along with **HTML**, **CSS**, and **JavaScript** to showcase my projects, skills, and contact information in a modern, responsive interface.


[**Visit Now 🚀**](https://arpitpatidar.netlify.app/)

---

## 📌 Tech Stack
![HTML](https://img.shields.io/badge/html%20-%23E34F26.svg?&style=for-the-badge&logo=html&logoColor=white)
![CSS](https://img.shields.io/badge/css%20-%231572B6.svg?&style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge)

---

## 📬 Contact

Feel free to reach me through the below handles:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arpit-patidar-32205724b)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/arpit_patidar2020?igsh=MW8yaTl5Y210MDNlag==)
[![Telegram](https://img.shields.io/badge/Telegram-E3490F?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/Arpitpatidar_2020)
[![Facebook](https://img.shields.io/badge/Facebook-blue?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/arpit.patidar.7311?mibextid=ZbWKwL)

---

## 🖥️ Backend (Contact Form)

The **contact form** on this React portfolio is powered by a **Node.js + Express backend** with **Nodemailer** for email handling.

### Features:
- Sends **email to admin** (`arpitpatidar851@gmail.com`) on form submission.  
- Sends **auto-reply HTML email to user** including their submitted details and portfolio link.  
- Backend deployed on **Vercel / Render** (Serverless function). 
- **Frontend deployed on Netlify** (React static site).  

---

### React Integration

In your `Contact.jsx`, the form data is sent to the backend using a **POST request**:

```javascript
fetch("https://your-backend.vercel.app/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: values.name,
    email: values.email,
    phone: values.phone,
    subject: values.subject,
    message: values.message,
  }),
})
.then(response => response.json())
.then(data => {
  if(data.success){
    alert("Your message has been sent! Check your email for confirmation.");
  } else {
    alert("Error sending message. Please try again.");
  }
});


