import React from "react";
import { useNavigate } from "react-router-dom";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {

    const navigate = useNavigate();

    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Sales</h1>
                    <p>
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">
                            <li onClick={() => navigate("/about")}> Read More </li>
                        </div>
                        <div className="banner-cta v2">
                            <li onClick={() => navigate("/category/1")}> Shop Now </li>
                        </div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
