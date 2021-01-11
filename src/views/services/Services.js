import React, { useState, useRef } from 'react';
import Footer from '../Footer';
import validationSchema from './validationSchema/validationSchema';
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
import { useFormik } from 'formik';


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
    container: {
        paddingLeft: 20,
    },
    gridList: {
        paddingTop: 20,
    }
});

const initialValues = {
    service: '',
    description: ''
}

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

    const formik = useFormik({
        initialValues,
        validationSchema
    })
    return (
        <>
        <div id="lonon-main">

            <div class="lonon-services">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12"> <span class="heading-meta style-1">What We Do</span>
                            <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Services</h2> </div>
                    </div>
                <Grid className={classes.container} container spacing={3}>
                    <Grid className={classes.gridList}  list xs={3}>
                        <Button variant="contained" style={{display: 'none'}} ref={wrapperRef} type="button" color="primary" onClick={() => handleAddExp()}>
                            +
                        </Button>
                            <Card className={classes.root} variant="outlined">
                            <CardContent onClick={() => wrapperRef.current.click()} >
                         <img src='/static/images/plus.jpg'/>
                            </CardContent>
                            </Card>
                            </Grid>

                          
                    {fields.map((field, idx) => {
                        return (
                           
                            <Grid className={classes.gridList} list xs={3} key={`${field}-${idx}`}>
                                        <Card className={classes.root} variant="outlined">
                                                <CardContent  >
                                             <form onSubmit={formik.handleSubmit}>
                                             <TextField 
                                             name='service' 
                                             size='small' 
                                             label="Service" 
                                             variant="outlined" 
                                             error={Boolean(formik.touched.service && formik.errors.service)}
                                             helperText={formik.touched.service && formik.errors.service}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.service}
                                            //  onChange={handleChange}
                                             />
                                             <TextField 
                                             multiline 
                                             size='small' 
                                             rows={4} 
                                             name='description' 
                                             label="Description" 
                                             variant="outlined" 
                                             error={Boolean(formik.touched.description && formik.errors.description)}
                                             helperText={formik.touched.description && formik.errors.description}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.description}
                                            //  onChange={handleChange}
                                             />
                                             </form>
                                                </CardContent>
                                        </Card>
                                <span>
                                    <Button  variant="contained" type="button" color="secondary" onClick={() => handleRemoveExp(idx)}>
                                        X
                                    </Button>
                                </span>
                            </Grid>
                            
                        );
                    })}
                    </Grid>
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
