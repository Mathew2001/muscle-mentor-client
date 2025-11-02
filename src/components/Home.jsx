import React from "react";
import { Link } from "react-router-dom";
import how_it_works from "../assets/images/how_it_works.jpg"
import Reviews from "./reviews/Reviews";
import NewReview from "./reviews/NewReview";
// import "../css/Home.css"
import CallToAction from "../assets/images/CallToAction.jpg";

const Home = () => {
  return (
    <div className="mt-5" >
      {/* Hero Section
      <section className="hero-section d-flex flex-column align-items-center justify-content-center mb-5">
        <h1>Build Strength. Burn Fat. Stay Consistent.</h1>
        <p className="subheadline">
          At MuscleGym, we deliver a powerful training program designed to help you push limits,<br />
          stay focused, and transform your body — wherever you are.
        </p>
        <div className="hero-buttons d-flex flex-row align-items-center justify-content-center gap-2">
          <Link to="/programs" className="primary-btn btn btn-danger">Explore Programs</Link>
          <Link to="/programs" className="secondary-btn btn btn-danger">Get Started</Link>
        </div>
      </section> */}
      <div className="bg-dark text-white py-4 mt-5">
        <div className="container d-flex flex-wrap gap-4 justify-content-between text-center text-md-start">
          <div>
            <h3 className="mb-0">4,500+</h3>
            <small>Workouts completed</small>
          </div>
          <div>
            <h3 className="mb-0">120+</h3>
            <small>Active members</small>
          </div>
          <div>
            <h3 className="mb-0">92%</h3>
            <small>Stay for 3+ months</small>
          </div>
        </div>
      </div>

      <div className="card bg-dark text-white h-100 mt-5">
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="card-body">
              <h2 className="mb-3">Who Is Muscle Mentor For?</h2>
              <p className="mb-1">✅ Beginners who want a clear plan</p>
              <p className="mb-1">✅ Busy people who need short, effective workouts</p>
              <p className="mb-1">✅ Athletes who want to track progress and improve</p>
              <h2 className="mb-1"> How It Works</h2>
              <ol>
                <li>Take our quick assessment to set your goals </li>
                <li>Follow structured workout programs built by certified trainers.</li>
                <li>Monitor your results, adjust your workouts, and stay consistent.</li>
              </ol>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={how_it_works} alt="How It Works" className="w-100 h-100" />
          </div>
        </div>
      </div>

      

      {/* Why Train With Us */}
        <h2 className="text-center mb-4 text-white mt-5">💡 Why Train With Us</h2>
        <div className="row g-2">
          <div className="col-sm-6 col-md-4">
            <div className="card bg-dark h-100">
              <div className="card-body text-white">
                <h3>✅ Personalized Programs</h3>
                <p>Every plan is designed to target specific muscle groups and fitness levels — beginner to advanced.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card bg-dark h-100">
              <div className="card-body text-white">
                <h3>✅ Efficient & Effective Workouts</h3>
                <p>No fluff. Just proven routines that build real results in less time.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card bg-dark h-100">
              <div className="card-body text-white">
                <h3>✅ All Goals Welcome</h3>
                <p>Muscle gain. Fat loss. Functional fitness. We've got you covered.</p>
              </div>
            </div>
          </div>
        </div>

      <div className="text-white text-center py-5 mt-5">
        <h2>Ready to Transform Your Fitness Journey?</h2>
        <p>Start today — your best self is waiting.</p>
        <Link to="/programs" className="btn btn-light mt-3 px-4 py-2">Start Now</Link>
      </div>

      
      {/* Testimonials */}
      <div className="container mt-5 mb-5">
        <Reviews />
        <NewReview />
      </div>

    </div>
  );
};

export default Home;
