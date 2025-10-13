import React from 'react'
import "../css/About.css"

const About = () => {
  return (
    <div className="about-container">
      <h1>🏋️ About MuscleGym</h1>
      
      <div className="about-section">
        <p>
          At MuscleGym, we believe that fitness is more than just lifting weights — it's a lifestyle. 
          Our mission is to empower individuals of all levels to achieve their health and fitness goals 
          through expert guidance, effective workout programs, and consistent motivation.
        </p>

        <p>
          Whether you're aiming to build muscle, improve endurance, or simply stay active, 
          our carefully designed training programs are tailored to help you make real 
          progress — one workout at a time.
        </p>
      </div>

      <div className="offerings-section">
        <h2>💪 What We Offer</h2>
        <ul>
          <li>Structured workout programs for all levels</li>
          <li>Focused training plans by muscle group</li>
          <li>Time-efficient workouts that deliver results</li>
          <li>Supportive community and fitness insights</li>
        </ul>
      </div>

      <div className="philosophy-section">
        <h2>🧠 Our Philosophy</h2>
        <p>
          We believe that every individual has the power to transform — physically and mentally — through consistent training and a strong mindset. 
          At MuscleGym, fitness is not about perfection; it's about progress, commitment, and growth.
        </p>

        <p>We emphasize:</p>
        <ul>
          <li>Simplicity over trends – proven methods that work</li>
          <li>Discipline over motivation – because consistency builds results</li>
          <li>Strength inside and out – because real fitness is holistic</li>
        </ul>

        <p>
          We're here to support you every step of the way — through every rep, every drop of sweat, and every breakthrough. 
          When you train with purpose, results follow.
        </p>
      </div>

      <div className="mission-section">
        <p>
          Our goal is to make fitness accessible, enjoyable, and part of your everyday routine. 
          With a focus on discipline, performance, and balance — MuscleGym is where progress begins.
        </p>

        <p>
          Let's build strength, confidence, and health — together.
        </p>
      </div>

      <div className="contact-section">
        <h2>📝 Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default About