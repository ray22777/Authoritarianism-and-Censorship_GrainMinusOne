import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const BackPage = ({ }) => {
const navigate = useNavigate();
  const redirect = () => {
    navigate('/'); // go to the new route
    setTimeout(() => {
      window.location.reload(); // force reload after routing
    }, 2); // slight delay to allow route to change
  };
  return (
        <>
    <meta charSet="utf-8" />
    <title>Authoritarianism and Censorship</title>
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
  
    {/* Carousel Start */}
    <div className="container-fluid p-0 mb-5">
        <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        >
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="w-100" src="img/protest-1.jpg" alt="Image" />
            <div className="carousel-caption">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                    <h1 className="display-4 text-white mb-3 animated slideInDown">
                        Don't Fear, You Are Powerful
                    </h1>
                    <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        Not all hope is loss, because you can still do something about it. Scroll down to learn more
                    </p>
                    <btn
                        
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href=""
                        onClick={() => redirect()}
                    >
                        Take Me Home Instead
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                        <i className="fa fa-arrow-right" />
                        </div>
                    </btn>
                    </div>
                </div>
                </div>
            </div>
            </div>
          
        </div>
        </div>
    </div>
    {/* Carousel End */}
    {/* Service Start */}
    <div className="container-xxl py-5">
        <div className="container">
        <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
        >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Taking Action
            </div>
            <h1 className="display-6 mb-5">
            What You Can Do
            </h1>
        </div>
        <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="img/icon-11.png" alt="" />
                <h4 className="mb-3">Join Protests</h4>
                <p className="mb-4">
                Like the recent No Kings protests across the United States, joining protests helps to exercise your rights of free speech and pressure governments.
                </p>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="img/icon-12.png" alt="" />
                <h4 className="mb-3">Donations</h4>
                <p className="mb-4">
                Donating to activist groups/grassroots politicians/credible independent media... can help them to continue their work and disrupt dictators' rule towards authoritarianism.
                </p>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="img/icon-13.png" alt="" />
                <h4 className="mb-3">Spread Awareness</h4>
                <p className="mb-4">
                Reposting in social media or even telling a friend may be seem just like a little action, but everyone performing it collectively has a large impact.
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* Service End */}

    {/* Footer Start */}
    <div
        className="container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
    >
        <div className="container-fluid copyright">
        <div className="container">
            <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a href="#">Authoritarianism and Censorship</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Made By <a href="https://htmlcodex.com">Guanray and Jayden</a>
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