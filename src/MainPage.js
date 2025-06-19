import React, { useEffect, useRef, useState } from "react";


const MainPage = ({ onExplore }) => {
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
                    <btn
                        onClick={onExplore}
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