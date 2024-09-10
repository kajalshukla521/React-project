
import React from "react";
import './Footer.css';
const Footer = () => {


    return (

        <>
            {/* footer top part */}
            <footer class="app-footer">
                <div class="container">
                    <div class="footer-top-part">
                        <div class="footer-col footer-col1">
                            <h4>Precious Infosystem Pvt. Ltd.</h4>
                            <p>Our Commitment: Making Technology Work for You! </p>
                        </div>
                        <div class="footer-col footer-col2">
                            <h4>Quick Links</h4>
                            <div class="footer-links">
                                <a href="#">Industries we serve</a>
                                <a href="#">Press Release</a>
                                <a href="#">Press Release</a>
                            </div>
                        </div>
                        <div class="footer-col footer-col3">
                            <h4>Services</h4>
                            <div class="footer-links">
                                <a href="#">Website Development</a>
                                <a href="#">Mobile App Development
                                </a>
                                <a href="#">Software Development
                                </a>
                                <a href="#">Digital Marketing

                                </a>
                                <a href="#">UI/UX Design
                                </a>

                            </div>
                        </div>
                        <div class="footer-col footer-col4">
                            <h4>Contact Us</h4>
                            <p>01, MR 9, Scheme No 51, Sector B, Chandra Nagar, Indore, Madhya Pradesh, India ( 452010 )</p>
                            <address class="address">
                                <a href="mailto:contact@preciousinfosystem.com">contact@preciousinfosystem.com</a><br></br>
                                <a href="tel:+917880087103">P: +91-7880087103</a>
                            </address>
                        </div>

                    </div>


                    {/* footer bottom part */}
                    <div class="footer-bottom-part">
                        <div class="footer-b-col1">
                            &copy; Copyright 2024. All rights reserved.
                        </div>

                    </div>
                </div>
            </footer>



        </>

    );

};
export default Footer;
