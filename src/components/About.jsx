import React from 'react'
import ContactUs from './ContactUs'
const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-danger">🏋️ About MuscleGym</h1>

      <div className="mt-2 text-white">
        <p>
          At MuscleGym, we believe that fitness is more than just lifting weights it's a lifestyle.<br />
          Our mission is to empower individuals of all levels to achieve their health and fitness goals.<br />
          Whether you're aiming to build muscle, improve endurance, or simply stay active.<br />
          our carefully designed training programs are tailored to help you make real
          progress.
        </p>
      </div>
      <hr className="text-white" />
      <div className="mt-2">
        <h2 className="text-danger">💪 What We Offer</h2>
        <ul className="text-white">
          <li>Structured workout programs for all levels</li>
          <li>Focused training plans by muscle group</li>
          <li>Time-efficient workouts that deliver results</li>
          <li>Supportive community and fitness insights</li>
        </ul>
      </div>
      <hr className="text-white" />
      <div className="mt-2">
        <h2 className="text-danger">🧠 Our Philosophy</h2>
        <div className="text-white">
          <p>
            We believe that every individual has the power to transform — physically and mentally — through consistent training and a strong mindset.<br />
            At MuscleGym, fitness is not about perfection; it's about progress, commitment, and growth.
          </p>

          <p>We emphasize:</p>
          <ul>
            <li>Simplicity over trends – proven methods that work</li>
            <li>Discipline over motivation – because consistency builds results</li>
            <li>Strength inside and out – because real fitness is holistic</li>
          </ul>

          <p>
            We're here to support you every step of the way — through every rep, every drop of sweat, and every breakthrough.<br />
            When you train with purpose, results follow.
          </p>
        </div>
      </div>
      <hr className="text-white" />
      <div className="mt-2">
        <h2 className="text-danger">🎯 Our Mission</h2>
        <div className="text-white">
          <p>
            Our goal is to make fitness accessible, enjoyable, and part of your everyday routine.<br />
            With a focus on discipline, performance, and balance — MuscleGym is where progress begins.
          </p>
          <p>
            Let's build strength, confidence, and health — together.
          </p>
        </div>
      </div>
      <hr className="text-white" />
      <ContactUs />
    </div>
  )
}

export default About