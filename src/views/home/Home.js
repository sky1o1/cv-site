import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setProfile} from '../../store/reducer/profile';
import validationSchema from './validationSchema/validationSchema';
import Skills from './Skills';
import { 
    makeStyles,
    TextField,
    InputAdornment,
    Slider,
    Button
 } from '@material-ui/core';
 import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
 import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
 import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Footer from '../Footer';
import { useFormik } from 'formik';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      resize:{
        fontSize:50
      },
      margin: {
        margin: theme.spacing(1),
      },
      cardvisit: {
        opacity: 0.7
      },
  }));

const initialValues ={
    image: '/static/images/avatar.png',
    information: '',
    phoneNumber: '',
    email: '',
    location: '',
    
    language:'',
    level:'',
    listening: '',
    writing: '',
    speaking: '',
    reading: '',
    avg:'',
}  



function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile)
        
        function handleChange( event) {
            const inputFieldName = event.currentTarget.name
            const inputFieldValue = event.currentTarget.value
            const updatedProfileData = {...profile, [inputFieldName]: inputFieldValue}
            dispatch(setProfile(updatedProfileData))
            formik.setFieldValue(inputFieldName, inputFieldValue)
          }
        

          const formik = useFormik({
            initialValues,
            validationSchema,
            onSubmit: (values, onSubmitProps) => {
            onSubmitProps.setSubmitting(false)
            }
          })

    return (
        <div id="lonon-main">
        <form onSubmit={formik.handleSubmit}>
        <div class="lonon-about">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-7"> 
                    <img src="/static/images/avatar.png" class="img-fluid mb-15 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft" alt=""/> 
                    </div>
                    <div class="col-md-5 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft"> <span class="heading-meta style-1">Informations</span>
                        <h3 class="lonon-about-heading">My name is {profile.fullName}</h3>
                        
                        <form onSubmit={formik.handleSubmit} >
                        <TextField
                            id="outlined-multiline-static"
                            fullWidth
                            label="Information"
                            multiline
                            rows={15}
                            name='information'
                            variant="outlined"
                            error={Boolean(formik.touched.information && formik.errors.information)}
                            helperText={formik.touched.information && formik.errors.information}
                            onBlur={formik.handleBlur}
                            value={formik.values.information}
                            onChange={handleChange}
                            />
                        </form>

                        <div className="cardvisit">
                            <h3> {profile.fullName}</h3>
                           <div className={classes.margin}>
                         <TextField
                            label="Phone Number"
                            fullWidth
                            name='phoneNumber'
                            onChange={handleChange}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <PhoneIphoneOutlinedIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                        
                            <TextField
                            label="Email"
                            fullWidth
                            name='email'
                            onChange={handleChange}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <EmailOutlinedIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                         <TextField  
                         
                            label="Location"
                            name='location'
                            fullWidth
                            onChange={handleChange}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <LocationOnOutlinedIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Skills/>
   
        

        <div class="lonon-testiominal">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12"> <span class="heading-meta style-1">Recommend Me</span>
                        <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">References</h2> </div>
                </div>
                <div class="row">
                    <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div class="lonon-quote-card"> 
                        <img src="images/quote.png" alt="" class="lonon-quote-2"/>
                            <p>"Drana convallis lacinia est et volutpat. Ut interdum lecistion velit, ac venenatis odio fringi ut. Mauris tincidunt diame nisi mollis rhoncus!</p>
                            <h5><strong>Samuel Tomei</strong></h5>
                            <p class="occupation">Project Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div class="lonon-testiominal">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12"> <span class="heading-meta style-1">Expertise</span>
                        <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Language</h2> </div>
                </div>
                <div class="row">
                    <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div class="lonon-quote-card"> 
                        <img src="images/quote.png" alt="" class="lonon-quote-2"/>
                            <p>"Drana convallis lacinia est et volutpat. Ut interdum lecistion velit, ac venenatis odio fringi ut. Mauris tincidunt diame nisi mollis rhoncus!</p>
                            <h5><strong>Samuel Tomei</strong></h5>
                            <p class="occupation">Project Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
      
        {/* <div class="lonon-testiominal">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12"> <span class="heading-meta style-1">Say About Us</span>
                        <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Testimonials</h2> </div>
                </div>
                <div class="row">
                    <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div class="lonon-quote-card"> 
                        <img src="images/quote.png" alt="" class="lonon-quote-2"/>
                            <p>"Drana convallis lacinia est et volutpat. Ut interdum lecistion velit, ac venenatis odio fringi ut. Mauris tincidunt diame nisi mollis rhoncus!</p>
                            <h5><strong>Samuel Tomei</strong></h5>
                            <p class="occupation">Project Manager</p>
                        </div>
                    </div>
                    <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <div class="lonon-quote-card"> 
                        <img src="images/quote.png" alt="quote" class="lonon-quote-2"/>
                            <p>"Drana convallis lacinia est et volutpat. Ut interdum lecistion velit, ac venenatis odio fringi ut. Mauris tincidunt diame nisi mollis rhoncus!</p>
                            <h5>Cobie Batalon</h5>
                            <p class="occupation">RTI International</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
     
        </form>
       <Footer/>
    </div>

    )
}

export default Home
