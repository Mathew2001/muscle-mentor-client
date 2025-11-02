import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-md-4">
            <h3 className="fw-bold">MuscleMentor</h3>
            <p className="text-white-50 mb-2">
              Smart workouts. Structured programs. Real progress.
            </p>
            <p className="mb-1">📞 052-4421044</p>
            <p className="mb-1">📧 support@muscementor.fit</p>
          </div>

          {/* Links */}
          <div className="col-md-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
              <li><Link to="/workouts" className="text-white-50 text-decoration-none">Workouts</Link></li>
              <li><Link to="/programs" className="text-white-50 text-decoration-none">Programs</Link></li>
              <li><Link to="/about" className="text-white-50 text-decoration-none">About</Link></li>
              <li><Link to="/contact" className="text-white-50 text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="col-md-4">
            <h5 className="mb-3">Get Weekly Workout Tips</h5>
            <p className="text-white-50">No spam. Just muscle.</p>
            <form className="d-flex gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button type="submit" className="btn btn-danger">Join</button>
            </form>
          </div>
        </div>

        <hr className="border-secondary mt-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0 text-white-50">
            © {currentYear} MuscleMentor. All rights reserved.
          </p>
          <div className="d-flex gap-3 mt-3 mt-md-0">
            <Link to="/terms" className="text-white-50 text-decoration-none">Terms</Link>
            <Link to="/privacy" className="text-white-50 text-decoration-none">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
