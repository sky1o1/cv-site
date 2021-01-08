import React from 'react'

const Contact = () => {
    return (
        <div id="lonon-main">
       
        <div class="lonon-contact">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12"> <span class="heading-meta style-1">Location</span>
                        <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Contact Us</h2> </div>
                </div>
              
                <div class="map-section">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 animate-box" data-animate-effect="fadeInLeft">
                            <div id="contactMap"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    
                    <div class="col-md-6 mb-30 animate-box" data-animate-effect="fadeInLeft">
                        <h3 class="lonon-about-heading">Contact Info</h3>
                        <p>Qualamy nisl sodales sit amet sapien id, placerat sodales orciter.
                            <br />Vivamus nec magna rhoncus felis, faucibus printy.</p>
                        <p><b>Phone:</b> +1 650-123-0000</p>
                        <p><b>Email:</b> dev@lonon.com</p>
                        <p><b>Address:</b> Camino Real, Palo Alto, CA 94306 US.</p>
                    </div>
                   
                    <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <h3 class="lonon-about-heading">How Can I Help You?</h3>
                        <p>We would like to hear from you</p>
                        {/* <form method="post" class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Name" required> </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Email"> </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <input type="submit" class="btn btn-contact" value="Say Hello!"> </div>
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>
        </div>
     
        <div id="lonon-footer2">
            <div class="lonon-narrow-content">
                <div class="row">
                    <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                        <p class="lonon-lead">&copy; 2019 Lonon. All rights reserved</p>
                    </div>
                    <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                        <h2 class="text-center">Lonon F. Smith</h2> </div>
                    <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                        <ul class="social-network">
                            <li><a href="#"><i class="ti-facebook font-14px black-icon"></i></a></li>
                            <li><a href="#"><i class="ti-twitter-alt font-14px black-icon"></i></a></li>
                            <li><a href="#"><i class="ti-instagram font-14px black-icon"></i></a></li>
                            <li><a href="#"><i class="ti-linkedin font-14px black-icon"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact
