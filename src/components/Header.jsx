import { Link } from "react-router-dom";
import HeaderImage from "../assets/images/HeaderImage.jpg";
import logo1 from "../assets/images/logo1.jpg"
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <header
        className=""
        style={{
          backgroundImage: `url(${HeaderImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-dark bg-opacity-50">
          <div className="container py-5 py-lg-6 text-white">
            <div className="d-flex justify-content-between align-items-center" >

              {/* Logo and contact info */}
              <div className="d-flex align-items-center">
                <div className="position-relative" style={{ width: '50px', height: '50px' }}>
                  <img src={logo1} alt="logo" className="w-100 h-100 rounded-circle " />
                </div>
                <div >
                  <h1 className="h5 h4-lg m-0 text-danger" style={{ fontSize: '3rem' }}>
                    MuscleMentor
                  </h1>
                  {/* <div className="small text-danger">
                    <div className="fs-7 fs-6-xl">052-4421044 📞</div>
                    <div className="fs-7 fs-6-xl">📍</div>
                  </div> */}
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="d-none d-xl-flex align-items-start gap-3">
                <Link
                  to="/"
                  className="btn btn-danger px-4"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/workouts"
                  className="btn btn-danger px-4"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Workouts
                </Link>
                <Link
                  to="/programs"
                  className="btn btn-danger px-4"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Programs
                </Link>
                <Link
                  to="/about"
                  className="btn btn-danger px-4"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-danger px-4"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Contact
                </Link>
              </div>
              <div className="d-xl-none d-flex gap-3">
                <button
                  className="btn btn-danger"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <i className="bi bi-layout-text-sidebar-reverse fs-4 text-black"></i>
                </button>
              </div>
            </div>

            {/* Mobile Sidebar - only visible on mobile */}
            <div
              className={`d-xl-none position-fixed top-0 end-0 h-100 bg-secondary-subtle shadow-lg p-4 ${isSidebarOpen ? 'translate-start-0' : 'translate-end-100'
                }`}
              style={{
                width: 280,
                zIndex: 1045,
                transform: isSidebarOpen ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform .3s ease-in-out',
              }}
            >
              <div className="d-flex justify-content-between align-items-center mb-4">
                <button
                  className="btn btn-outline-dark btn-sm"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>

              <div className="d-flex flex-column gap-3">
                <div className="position-relative">
                  <Link
                    to="/"
                    className="btn btn-danger px-4"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Home
                  </Link>
                </div>
                <div className="position-relative">
                  <Link
                    to="/workouts"
                    className="btn btn-danger px-4"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Workouts
                  </Link>
                </div>
                <div className="position-relative">
                  <Link
                    to="/programs"
                    className="btn btn-danger px-4"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Programs
                  </Link>
                </div>
                <div className="position-relative">
                  <Link
                    to="/about"
                    className="btn btn-danger px-4"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    About
                  </Link>
                </div>
                <div className="position-relative">
                  <Link
                    to="/contact"
                    className="btn btn-danger px-4"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Overlay - only visible when sidebar is open */}
            {isSidebarOpen && (
              <div
                className="d-xl-none position-fixed top-0 start-0 w-100 h-100 bg-dark"
                style={{
                  zIndex: 1040,
                  opacity: '0.5',
                  transition: 'opacity 0.3s ease-in-out'
                }}
                onClick={() => setIsSidebarOpen(false)}
              ></div>
            )}
            {/* 👇 HERO WITH BG IMAGE (this is the new part) */}

            <h1 className="display-5 fw-bold mt-5">Build Strength. <br /> Stay Consistent.</h1>
            <p className="lead mb-4">
              Smart workouts, structured programs, real progress — welcome to MuscleMentor.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/workouts" className="btn btn-danger btn-lg px-4">
                Start Training
              </Link>
              <Link to="/programs" className="btn btn-outline-light btn-lg px-4">
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
};

export default Header;
