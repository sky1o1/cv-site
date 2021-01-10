import React, { useState, useRef } from 'react';
import Footer from './Footer';
import {
    makeStyles,
    TextField,
    Card,
    CardActions,
    CardContent,
    Button,
    Grid,
    Typography,
    InputAdornment,
    Slider,
} from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        width: 200,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
function Services() {
    const classes = useStyles()

    const wrapperRef = useRef(null)
    const [fields, setFields] = useState([{ value: null }]);
    function handleAddExp() {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
    }

    function handleRemoveExp(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }
    return (
        <>
        <div id="lonon-main">

            <div class="lonon-services">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12"> <span class="heading-meta style-1">What We Do</span>
                            <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Services</h2> </div>
                    </div>
                    {/* <div class="row">
                    <div class="col-md-4">
                        <div class="lonon-feature animate-box" data-animate-effect="fadeInLeft">
                            <div class="lonon-icon"> <span class="et-strategy font-35px"></span> </div>
                            <div class="lonon-text">
                                <h3>Digital Strategy</h3>
                                <p>Drana convalis lacinia est meet volutpat. Ut interdum lecis velilac venenatis the fringila.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                    {fields.map((field, idx) => {
                        return (
                            <>
                            <Button variant="contained" style={{display: 'none'}} ref={wrapperRef} type="button" color="primary" onClick={() => handleAddExp()}>
                            +
                        </Button>
                            <Card className={classes.root} variant="outlined">
                            <CardContent onClick={() => wrapperRef.current.click()} >
                         <img src='/static/images/avatar.png'/>
                            </CardContent>
                    </Card>
                            <div key={`${field}-${idx}`}>
                              
                                <Grid container spacing={3}>
                                    <Grid item
                                        xs={4}>
                                        <Card className={classes.root} variant="outlined">
                                                <CardContent  >
                                             <img src='/static/images/avatar.png'/>
                                                </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <span>
                                    <Button  variant="contained" type="button" color="secondary" onClick={() => handleRemoveExp(idx)}>
                                        X
                                                </Button>
                                </span>
                            </div>
                            </>
                        );
                    })}
                </div>
            </div>

            {/* <div class="lonon-pricing">
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
        </div> */}
            <Footer />
        </div>
        </>
    )
}

export default Services;
