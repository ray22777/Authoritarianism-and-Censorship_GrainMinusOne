import React, { useEffect, useRef, useState } from "react";


const BackPage = ({ }) => {
  return (
        <>
    <meta charSet="utf-8" />
    <title>ChariTeam - Free Nonprofit Website Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="" name="keywords" />
    <meta content="" name="description" />
    {/* Favicon */}
    <link href="img/favicon.ico" rel="icon" />
    {/* Google Web Fonts */}
    
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Saira:wght@500;600;700&display=swap"
        rel="stylesheet"
    />
    {/* Icon Font Stylesheet */}
    <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
    />
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
    {/* Libraries Stylesheet */}
    {/* Customized Bootstrap Stylesheet */}
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    {/* Template Stylesheet */}
    <link href="css/style.css" rel="stylesheet" />
    {/* Spinner Start */}
    <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
        <div className="spinner-grow text-primary" role="status" />
    </div>
    {/* Spinner End */}
    {/* Navbar Start */}
    <div
        className="container-fluid fixed-top px-0 wow fadeIn"
        data-wow-delay="0.1s"
    >
        <div className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
            <small>
            <i className="fa fa-map-marker-alt me-2" />
            123 Street, New York, USA
            </small>
            <small className="ms-4">
            <i className="fa fa-envelope me-2" />
            info@example.com
            </small>
        </div>
        <div className="col-lg-6 px-5 text-end">
            <small>Follow us:</small>
            <a className="text-white-50 ms-3" href="">
            <i className="fab fa-facebook-f" />
            </a>
            <a className="text-white-50 ms-3" href="">
            <i className="fab fa-twitter" />
            </a>
            <a className="text-white-50 ms-3" href="">
            <i className="fab fa-linkedin-in" />
            </a>
            <a className="text-white-50 ms-3" href="">
            <i className="fab fa-instagram" />
            </a>
        </div>
        </div>
        <nav
        className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
        >
        <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
            <h1 className="fw-bold text-primary m-0">
            Chari<span className="text-white">Team</span>
            </h1>
        </a>
        <button
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="index.html" className="nav-item nav-link active">
                Home
            </a>
            <a href="about.html" className="nav-item nav-link">
                About
            </a>
            <a href="causes.html" className="nav-item nav-link">
                Causes
            </a>
            <div className="nav-item dropdown">
                <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                >
                Pages
                </a>
                <div className="dropdown-menu m-0">
                <a href="service.html" className="dropdown-item">
                    Service
                </a>
                <a href="donate.html" className="dropdown-item">
                    Donate
                </a>
                <a href="team.html" className="dropdown-item">
                    Our Team
                </a>
                <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                    404 Page
                </a>
                </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
                Contact
            </a>
            </div>
            <div className="d-none d-lg-flex ms-2">
            <a className="btn btn-outline-primary py-2 px-3" href="">
                Donate Now
                <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                <i className="fa fa-arrow-right" />
                </div>
            </a>
            </div>
        </div>
        </nav>
    </div>
    {/* Navbar End */}
    {/* Carousel Start */}
    <div className="container-fluid p-0 mb-5">
        <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        >
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
            <div className="carousel-caption">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                    <h1 className="display-4 text-white mb-3 animated slideInDown">
                        Let's Change The World With Humanity
                    </h1>
                    <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed
                        stet lorem sit clita duo justo erat amet
                    </p>
                    <btn
                        
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href=""
                    >
                        Learn More
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                        <i className="fa fa-arrow-right" />
                        </div>
                    </btn>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="carousel-item">
            <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
            <div className="carousel-caption">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                    <h1 className="display-4 text-white mb-3 animated slideInDown">
                        Let's Save More Lifes With Our Helping Hand
                    </h1>
                    <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed
                        stet lorem sit clita duo justo erat amet
                    </p>
                    <a
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href=""
                    >
                        Learn More
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                        <i className="fa fa-arrow-right" />
                        </div>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* Carousel End */}
    {/* About Start */}
    <div className="container-xxl py-5">
        <div className="container">
        <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: 400 }}
            >
                <img
                className="position-absolute w-100 h-100 pt-5 pe-5"
                src="img/about-1.jpg"
                alt=""
                style={{ objectFit: "cover" }}
                />
                <img
                className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                src="img/about-2.jpg"
                alt=""
                style={{ width: 200, height: 200 }}
                />
            </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                About Us
                </div>
                <h1 className="display-6 mb-5">
                We Help People In Need Around The World
                </h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                <p className="text-dark mb-2">
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet
                    lorem sit clita duo justo erat amet
                </p>
                <span className="text-primary">Jhon Doe, Founder</span>
                </div>
                <p className="mb-5">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                lorem sit clita duo justo magna dolore erat amet
                </p>
                <a className="btn btn-primary py-2 px-3 me-3" href="">
                Learn More
                <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                    <i className="fa fa-arrow-right" />
                </div>
                </a>
                <a className="btn btn-outline-primary py-2 px-3" href="">
                Contact Us
                <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right" />
                </div>
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* About End */}
    {/* Causes Start */}
    <div className="container-xxl bg-light my-5 py-5">
        <div className="container py-5">
        <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
        >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Feature Causes
            </div>
            <h1 className="display-6 mb-5">
            Every Child Deserves The Opportunity To Learn
            </h1>
        </div>
        <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                    <small>Education</small>
                </div>
                <h5 className="mb-3">Education For African Children</h5>
                <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet
                    diam et eos
                </p>
                <div className="causes-progress bg-light p-3 pt-2">
                    <div className="d-flex justify-content-between">
                    <p className="text-dark">
                        $10,000 <small className="text-body">Goal</small>
                    </p>
                    <p className="text-dark">
                        $9,542 <small className="text-body">Raised</small>
                    </p>
                    </div>
                    <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        <span>90%</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="position-relative mt-auto">
                <img className="img-fluid" src="img/courses-1.jpg" alt="" />
                <div className="causes-overlay">
                    <a className="btn btn-outline-primary" href="">
                    Read More
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                        <i className="fa fa-arrow-right" />
                    </div>
                    </a>
                </div>
                </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                    <small>Pure Water</small>
                </div>
                <h5 className="mb-3">Ensure Pure Drinking Water</h5>
                <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet
                    diam et eos
                </p>
                <div className="causes-progress bg-light p-3 pt-2">
                    <div className="d-flex justify-content-between">
                    <p className="text-dark">
                        $10,000 <small className="text-body">Goal</small>
                    </p>
                    <p className="text-dark">
                        $9,542 <small className="text-body">Raised</small>
                    </p>
                    </div>
                    <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        <span>90%</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="position-relative mt-auto">
                <img className="img-fluid" src="img/courses-2.jpg" alt="" />
                <div className="causes-overlay">
                    <a className="btn btn-outline-primary" href="">
                    Read More
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                        <i className="fa fa-arrow-right" />
                    </div>
                    </a>
                </div>
                </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                    <small>Healthy Life</small>
                </div>
                <h5 className="mb-3">Ensure Medical Treatment</h5>
                <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet
                    diam et eos
                </p>
                <div className="causes-progress bg-light p-3 pt-2">
                    <div className="d-flex justify-content-between">
                    <p className="text-dark">
                        $10,000 <small className="text-body">Goal</small>
                    </p>
                    <p className="text-dark">
                        $9,542 <small className="text-body">Raised</small>
                    </p>
                    </div>
                    <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        <span>90%</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="position-relative mt-auto">
                <img className="img-fluid" src="img/courses-3.jpg" alt="" />
                <div className="causes-overlay">
                    <a className="btn btn-outline-primary" href="">
                    Read More
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                        <i className="fa fa-arrow-right" />
                    </div>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* Causes End */}
    {/* Service Start */}
    <div className="container-xxl py-5">
        <div className="container">
        <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
        >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            What We Do
            </div>
            <h1 className="display-6 mb-5">
            Learn More What We Do And Get Involved
            </h1>
        </div>
        <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="img/icon-1.png" alt="" />
                <h4 className="mb-3">Child Education</h4>
                <p className="mb-4">
                Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
                justo sed vero dolor duo.
                </p>
                <a className="btn btn-outline-primary px-3" href="">
                Learn More
                <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right" />
                </div>
                </a>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="img/icon-2.png" alt="" />
                <h4 className="mb-3">Medical Treatment</h4>
                <p className="mb-4">
                Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
                justo sed vero dolor duo.
                </p>
                <a className="btn btn-outline-primary px-3" href="">
                Learn More
                <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right" />
                </div>
                </a>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="img/icon-3.png" alt="" />
                <h4 className="mb-3">Pure Drinking Water</h4>
                <p className="mb-4">
                Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
                justo sed vero dolor duo.
                </p>
                <a className="btn btn-outline-primary px-3" href="">
                Learn More
                <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right" />
                </div>
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* Service End */}
    {/* Donate Start */}
    <div
        className="container-fluid donate my-5 py-5"
        data-parallax="scroll"
        data-image-src="img/carousel-2.jpg"
    >
        <div className="container py-5">
        <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                Donate Now
            </div>
            <h1 className="display-6 text-white mb-5">
                Thanks For The Results Achieved With You
            </h1>
            <p className="text-white-50 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                lorem sit clita duo justo magna dolore erat amet
            </p>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="h-100 bg-white p-5">
                <form>
                <div className="row g-3">
                    <div className="col-12">
                    <div className="form-floating">
                        <input
                        type="text"
                        className="form-control bg-light border-0"
                        id="name"
                        placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-floating">
                        <input
                        type="email"
                        className="form-control bg-light border-0"
                        id="email"
                        placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="btn-group d-flex justify-content-around">
                        <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        defaultChecked=""
                        />
                        <label className="btn btn-light py-3" htmlFor="btnradio1">
                        $10
                        </label>
                        <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio2"
                        />
                        <label className="btn btn-light py-3" htmlFor="btnradio2">
                        $20
                        </label>
                        <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio3"
                        />
                        <label className="btn btn-light py-3" htmlFor="btnradio3">
                        $30
                        </label>
                    </div>
                    </div>
                    <div className="col-12">
                    <button
                        className="btn btn-primary px-5"
                        style={{ height: 60 }}
                    >
                        Donate Now
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                        <i className="fa fa-arrow-right" />
                        </div>
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* Donate End */}
    {/* Team Start */}
    <div className="container-xxl py-5">
        <div className="container">
        <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
        >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Team Members
            </div>
            <h1 className="display-6 mb-5">
            Let's Meet With Our Ordinary Soldiers
            </h1>
        </div>
        <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                </div>
                <div className="team-text bg-light text-center p-4">
                <h5>Full Name</h5>
                <p className="text-primary">Designation</p>
                <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square" href="">
                    <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square" href="">
                    <i className="fab fa-instagram" />
                    </a>
                </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                </div>
                <div className="team-text bg-light text-center p-4">
                <h5>Full Name</h5>
                <p className="text-primary">Designation</p>
                <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square" href="">
                    <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square" href="">
                    <i className="fab fa-instagram" />
                    </a>
                </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                </div>
                <div className="team-text bg-light text-center p-4">
                <h5>Full Name</h5>
                <p className="text-primary">Designation</p>
                <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square" href="">
                    <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square" href="">
                    <i className="fab fa-instagram" />
                    </a>
                </div>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-4.jpg" alt="" />
                </div>
                <div className="team-text bg-light text-center p-4">
                <h5>Full Name</h5>
                <p className="text-primary">Designation</p>
                <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square" href="">
                    <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square" href="">
                    <i className="fab fa-instagram" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* Team End */}
    {/* Testimonial Start */}
    <div className="container-xxl py-5">
        <div className="container">
        <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
        >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Testimonial
            </div>
            <h1 className="display-6 mb-5">
            Trusted By Thousands Of People And Nonprofits
            </h1>
        </div>
        <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
        >
            <div className="testimonial-item text-center">
            <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="img/testimonial-1.jpg"
                style={{ width: 100, height: 100 }}
            />
            <div className="testimonial-text rounded text-center p-4">
                <p>
                Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
                duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
                erat magna elitr erat sit sit erat at rebum justo sea clita.
                </p>
                <h5 className="mb-1">Doner Name</h5>
                <span className="fst-italic">Profession</span>
            </div>
            </div>
            <div className="testimonial-item text-center">
            <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="img/testimonial-2.jpg"
                style={{ width: 100, height: 100 }}
            />
            <div className="testimonial-text rounded text-center p-4">
                <p>
                Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
                duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
                erat magna elitr erat sit sit erat at rebum justo sea clita.
                </p>
                <h5 className="mb-1">Doner Name</h5>
                <span className="fst-italic">Profession</span>
            </div>
            </div>
            <div className="testimonial-item text-center">
            <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="img/testimonial-3.jpg"
                style={{ width: 100, height: 100 }}
            />
            <div className="testimonial-text rounded text-center p-4">
                <p>
                Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
                duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
                erat magna elitr erat sit sit erat at rebum justo sea clita.
                </p>
                <h5 className="mb-1">Doner Name</h5>
                <span className="fst-italic">Profession</span>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* Testimonial End */}
    {/* Footer Start */}
    <div
        className="container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
    >
        <div className="container py-5">
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
            <h1 className="fw-bold text-primary mb-4">
                Chari<span className="text-white">Team</span>
            </h1>
            <p>
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                ipsum et lorem et sit, sed stet lorem sit clita
            </p>
            <div className="d-flex pt-2">
                <a className="btn btn-square me-1" href="">
                <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square me-1" href="">
                <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square me-1" href="">
                <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-square me-0" href="">
                <i className="fab fa-linkedin-in" />
                </a>
            </div>
            </div>
            <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Address</h5>
            <p>
                <i className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
            </p>
            <p>
                <i className="fa fa-phone-alt me-3" />
                +012 345 67890
            </p>
            <p>
                <i className="fa fa-envelope me-3" />
                info@example.com
            </p>
            </div>
            <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>
            <a className="btn btn-link" href="">
                About Us
            </a>
            <a className="btn btn-link" href="">
                Contact Us
            </a>
            <a className="btn btn-link" href="">
                Our Services
            </a>
            <a className="btn btn-link" href="">
                Terms &amp; Condition
            </a>
            <a className="btn btn-link" href="">
                Support
            </a>
            </div>
            <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
                />
                <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                SignUp
                </button>
            </div>
            </div>
        </div>
        </div>
        <div className="container-fluid copyright">
        <div className="container">
            <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a href="#">Your Site Name</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By <a href="https://htmlcodex.com">HTML Codex</a>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* Footer End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
    </a>
    {/* JavaScript Libraries */}
    {/* Template Javascript */}
    </>

  );
};

export default BackPage;