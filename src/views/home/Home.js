import React,{useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setProfile, setImage3} from '../../store/reducer/profile';
import validationSchema from './validationSchema/validationSchemaHome';
import Skills from './Skills';
import Language from './Language';
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
    profileImage: '/static/images/avatar.png',
    image3:'/static/images/avatar.png',
    information: '',
    phoneNumber: '',
    email: '',
    location: '',
    }  

function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const wrapperRef = useRef();
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
          })

    return (
        <div id="lonon-main">
        <form onSubmit={formik.handleSubmit}>
        <div class="lonon-about">
            <div class="container-fluid">
                <div class="row">
                     <div class="col-md-7">
                                <div onClick={() => wrapperRef.current.click()}   >
                                    {
                                        formik.initialValues.image3 &&
                                        <img src={formik.values.image3} />
                                    }
                                </div>


                                <input
                                    fullWidth
                                    type="file"
                                    label="Image"
                                    name="image"
                                    ref={wrapperRef}
                                    onChange={(event) => {
                                        const selectedFile = event.currentTarget.files[0]
                                        const selectedUrl = URL.createObjectURL(selectedFile)
                                        formik.setFieldValue("image3", selectedUrl);
                                        dispatch(setImage3(selectedUrl))

                                    }}
                                    style={{
                                        display: 'none'
                                    }}
                                />
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

        <Language/>
      
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
