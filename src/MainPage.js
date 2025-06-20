import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = ({}) => {
const navigate = useNavigate();
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
            <img className="w-100" src="img/authoritarianism-3.jpg" alt="Image" />
            <div className="carousel-caption">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                    <h1 className="display-4 text-white mb-3 animated slideInDown">
                        Authoritarianism and Censorship
                    </h1>
                    <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        It has happened before, and it is happening again. Don't ignore it.
                    </p>

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
                src="img/about-11.jpg"
                alt=""
                style={{ width:800, height: 800 }}
                />
            </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                Authoritarianism and Censorship
                </div>
                <h1 className="display-6 mb-5">
                The Shift Towards Authoritarianism Is Back
                </h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                <p className="text-dark mb-2">
                   Then they came for me—and there was no one left to speak for me.
                </p>
                <span className="text-primary">Martin Niemöller</span>
                </div>
                <p className="mb-5">
                Authoritarian autocrats consolidate more power for themselves whilst leaving the people powerless to stand out against them. Shockingly, there are a lot of similar tactics used by historically famous and present dictators.
                </p>
                <btn
                    onClick={() => navigate("/leaders")}
                    className="btn btn-primary py-2 px-3 animated slideInDown"
                    href=""
                >
                    Tell Me More
                    <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                    <i className="fa fa-arrow-right" />
                    </div>
                </btn>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* About End */}
   
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

export default MainPage;