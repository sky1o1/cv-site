import React from 'react';
import {useSelector} from 'react-redux';

function Footer() {
    const colors = useSelector(state => state.colors)
    console.log(colors)
    
    return (
        <>
            <div
                style={{
                    background: colors.gradColor.background,
                    border: '1px solid black' 
                }}
                id="lonon-footer2">
                <div class="lonon-narrow-content">
                    <div class="row">
                        <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                            <p style={{
                                color: colors.color
                            }} 
                            class="lonon-lead">&copy; 2019 Lonon. All rights reserved</p>
                        </div>
                        <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                            <h2 
                            style={{
                                color: colors.color
                            }} 
                            class="text-center">Lonon F. Smith</h2> </div>
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
        </>
    )


}

export default Footer;