import React from 'react';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import {useStyles} from './styles/HomeStyle';

const Contact = () => {
    const colors = useSelector(state => state.colors)

    const pinkGradient = colors.bgColor =='#FC698A' ? 'pinkGrad' : '';
    const greyGradient = colors.bgColor =='#45515D' ? 'greyGrad' : '';
    const orangeGradient = colors.bgColor =='#DF6339' ? 'orangeG' : '';
    const blueGradient = colors.bgColor =='#007CC7' ? 'blueGrad' : '';

    return (
        <div id="lonon-main">
       
        <div class="lonon-contact">
            <div class="container-fluid">
                {/* <div class="row">
                    <div class="col-md-12"> <span class="heading-meta style-1">Location</span>
                        <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Contact Us</h2> </div>
                </div>
              
                <div class="map-section">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 animate-box" data-animate-effect="fadeInLeft">
                            <div id="contactMap"></div>
                        </div>
                    </div>
                </div> */}
                <div class="row">
                    
                    <div class="col-md-6 mb-30 animate-box" data-animate-effect="fadeInLeft">
                        <h3 style={{color: colors.headColor}} class="lonon-about-heading">Contact Info</h3>
                        <p>Qualamy nisl sodales sit amet sapien id, placerat sodales orciter.
                            <br />Vivamus nec magna rhoncus felis, faucibus printy.</p>
                        <p><b style={{color: colors.headColor}}>Phone:</b> +1 650-123-0000</p>
                        <p><b style={{color: colors.headColor}}>Email:</b> dev@lonon.com</p>
                        <p><b style={{color: colors.headColor}}>Address:</b> Camino Real, Palo Alto, CA 94306 US.</p>
                    </div>
                   
                    <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <h3 style={{color: colors.headColor}} class="lonon-about-heading">How Can I Help You?</h3>
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
     <Footer />
    </div>
    )
}

export default Contact
