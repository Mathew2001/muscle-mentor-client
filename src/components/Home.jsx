import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css"

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Build Strength. Burn Fat. Stay Consistent.</h1>
        <p className="subheadline">
          At MuscleGym, we deliver powerful training programs designed to help you push limits, 
          stay focused, and transform your body — wherever you are.
        </p>
        <div className="hero-buttons">
          <Link to="/programs" className="primary-btn">Explore Programs</Link>
          <Link to="/programs" className="secondary-btn">Get Started</Link>
        </div>
      </section>

      {/* Why Train With Us */}
      <section className="why-us-section">
        <h2>💡 Why Train With Us</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>✅ Personalized Programs</h3>
            <p>Every plan is designed to target specific muscle groups and fitness levels — beginner to advanced.</p>
          </div>
          <div className="benefit-card">
            <h3>✅ Efficient & Effective Workouts</h3>
            <p>No fluff. Just proven routines that build real results in less time.</p>
          </div>
          <div className="benefit-card">
            <h3>✅ All Goals Welcome</h3>
            <p>Muscle gain. Fat loss. Functional fitness. We've got you covered.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>🏃‍♂️ How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <h3>Choose Your Goal</h3>
            <p>Select a program based on your fitness focus.</p>
          </div>
          <div className="step">
            <h3>Train Smart</h3>
            <p>Follow step-by-step workouts tailored to your level.</p>
          </div>
          <div className="step">
            <h3>Track Your Progress</h3>
            <p>Stay motivated with consistency and measurable gains.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>⭐ What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"I've seen more results in 8 weeks with MuscleGym than in the past year on my own."</p>
            <span className="testimonial-author">— A satisfied client</span>
          </div>
          <div className="testimonial-card">
            <p>"Great programs and super easy to follow. My confidence and strength are on a new level."</p>
            <span className="testimonial-author">— Fitness enthusiast</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to take control of your fitness?</h2>
        <p>Let MuscleGym guide you every rep of the way.</p>
        <div className="cta-buttons">
          <Link to="/programs" className="primary-btn">View Programs</Link>
          <Link to="/about" className="secondary-btn">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
