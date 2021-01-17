import React from 'react';


function Price(){

    return(
        <div class="lonon-pricing">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12"> <span class="heading-meta style-1">Pricing</span>
                    <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Pricing</h2> </div>
            </div>
            <div class="row">
                <div class="col-md-4 price-table">
                    <div class="price-box animate-box" data-animate-effect="fadeInLeft">
                        <h5><strong>Interdum</strong></h5>
                        <h1 class="bold price-price">
                            <sup>$</sup>
                            <span>29</span>
                        </h1>
                        <div class="price-features">
                            <p>Aenean Porttitor</p>
                            <p>Interdum Convallis</p>
                            <p><i class="icon ti-close"></i></p>
                            <p><i class="icon ti-close"></i></p>
                        </div>
                        <input type="submit" class="btn btn-contact" value="Interdum"/> 
                        </div>
                </div>
                <div class="col-md-4 price-table-featured">
                    <div class="price-box center animate-box" data-animate-effect="fadeInLeft">
                        <h5><strong>Convallis</strong></h5>
                        <h1 class="bold price-price">
                            <sup>$</sup>
                            <span>39</span>
                        </h1>
                        <div class="price-features">
                            <p>Aenean Porttitor</p>
                            <p>Interdum Convallis</p>
                            <p>24/7 Free Support</p>
                            <p><i class="icon ti-close"></i></p>
                        </div>
                        <input type="submit" class="btn btn-contact" value="Convallis"/> 
                        </div>
                </div>
                <div class="col-md-4 price-table">
                    <div class="price-box animate-box" data-animate-effect="fadeInLeft">
                        <h5><strong>Quisque</strong></h5>
                        <h1 class="bold price-price">
                            <sup>$</sup>
                            <span>59</span>
                        </h1>
                        <div class="price-features">
                            <p>Aenean Porttitor</p>
                            <p>Interdum Convallis</p>
                            <p>24/7 Free Support</p>
                            <p>Quisque Auctor</p>
                        </div>
                        <input type="submit" class="btn btn-contact" value="Quisque"/> 
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Price;