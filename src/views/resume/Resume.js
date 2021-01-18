import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProfile, setImage2 } from '../../store/reducer/profile';
import validationSchema from './validationSchema/validationSchema';
import Experience from './Experience';
import Education from './Education';
import {
    makeStyles,
    TextField,
} from '@material-ui/core';
import Footer from '../Footer';
import { useFormik } from 'formik';

const initialValues = {
    image2: '/static/images/avatar.png',
    dob: '',
    website: '',
    freelance: '',
    facebook: '',
    linkedin: '',
    skype: '',
    twitter: '',
}


const useStyles = makeStyles((theme) => ({
    root: {

    },
}))

function Resume() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profile)
    const wrapperRef = useRef(null)


    function handleChange( event) {
        const inputFieldName = event.currentTarget.name
        const inputFieldValue = event.currentTarget.value
        const updatedProfileData = {...profile, [inputFieldName]: inputFieldValue}
        dispatch(setProfile(updatedProfileData))
        formik.setFieldValue(inputFieldName, inputFieldValue)
      }

    const formik = useFormik({
        initialValues,
        validationSchema
    })

   
    return (
        <>
            <div id="lonon-main">

                <div class="lonon-about">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12"> <span class="heading-meta style-1">Resume</span>
                                <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">About Me</h2> </div>

                        </div>
                        <div class="row">
                            <div class="col-md-7">
                                <div onClick={() => wrapperRef.current.click()}   >
                                    {
                                        formik.initialValues.image2 &&
                                        <img src={formik.values.image2} />
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
                                        formik.setFieldValue("image2", selectedUrl);
                                        dispatch(setImage2(selectedUrl))

                                    }}
                                    style={{
                                        display: 'none'
                                    }}
                                />
                            </div>
                            <div class="col-md-5 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft"> <span class="heading-meta style-1">Resume</span>
                                <h3 class="lonon-about-heading">I'm a {profile.profession}</h3>
                                <p>
                                    {profile.information}
                                </p>
                                <div class="lonon-about-contact-wrap">
                                    <form className={classes.root} onSubmit={formik.handleSubmit}>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>
                                                    <TextField
                                                        id="date"
                                                        label="Birthday"
                                                        type="date"
                                                        name='dob'
                                                        size="small"
                                                        variant="outlined"
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.dob}
                                                        onChange={handleChange}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                                </p>
                                                <p>
                                                    <TextField
                                                        id="standard-size-normal"
                                                        fullWidth
                                                        label="Website"
                                                        name='website'
                                                        size="small"
                                                        error={Boolean(formik.touched.website && formik.errors.website)}
                                                        helperText={formik.touched.website && formik.errors.website}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.website}
                                                        onChange={handleChange}
                                                        variant="outlined"
                                                    />
                                                </p>
                                                <p>
                                                    <TextField
                                                        id="standard-size-normal"
                                                        label="Skype"
                                                        name='skype'
                                                        size="small"
                                                        variant="outlined"
                                                        error={Boolean(formik.touched.skype && formik.errors.skype)}
                                                        helperText={formik.touched.skype && formik.errors.skype}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.skype}
                                                        onChange={handleChange}
                                                    />
                                                </p>
                                                <TextField
                                                        id="standard-size-normal"
                                                        fullWidth
                                                        label="Twitter"
                                                        name='twitter'
                                                        size="small"
                                                        error={Boolean(formik.touched.twitter && formik.errors.twitter)}
                                                        helperText={formik.touched.twitter && formik.errors.twitter}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.twitter}
                                                        onChange={handleChange}
                                                        variant="outlined"
                                                    />

                                            </div>

                                            <div class="col-md-6">
                                                <p>
                                                    <TextField
                                                        id="standard-size-normal"
                                                        label="Facebook"
                                                        name='facebook'
                                                        size="small"
                                                        variant="outlined"
                                                        error={Boolean(formik.touched.facebook && formik.errors.facebook)}
                                                        helperText={formik.touched.facebook && formik.errors.facebook}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.facebook}
                                                        onChange={handleChange}
                                                    />
                                                </p>
                                                <p>
                                                    <TextField
                                                        id="standard-size-normal"
                                                        label="Freelance"
                                                        name='freelance'
                                                        size="small"
                                                        variant="outlined"
                                                        error={Boolean(formik.touched.freelance && formik.errors.freelance)}
                                                        helperText={formik.touched.freelance && formik.errors.freelance}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.freelance}
                                                        onChange={handleChange}
                                                    />
                                                </p>
                                                <p>
                                                    <TextField
                                                        id="standard-size-normal"
                                                        label="Linkedin"
                                                        name='linkedin'
                                                        size="small"
                                                        variant="outlined"
                                                        error={Boolean(formik.touched.linkedin && formik.errors.linkedin)}
                                                        helperText={formik.touched.linkedin && formik.errors.linkedin}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.linkedin}
                                                        onChange={handleChange}
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
                <Experience/>
                <Education/>

              

                <div class="lonon-skills">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12"> <span class="heading-meta style-1">Abilities</span>
                                <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">My Skills</h2> </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5 animate-box" data-animate-effect="fadeInLeft">
                                <p>Skills convallis lacinia est et volutpat. Ut interdum lecis velit, ac venenatis odio fringilla ut. Mauris tincidunt diame nisi mollis rhoncus. Nam non ante consequatir, malesuada dui euismod, pharetra mi.</p>
                                <p>Sed auctor, dui sed bibendum feugiat, felis lorem pulvinar mauris vel porttitor risu nunc et risus. Aenean vehicula dictum magna non venenatis.</p>
                            </div>
                            <div class="col-md-7 animate-box" data-animate-effect="fadeInLeft">
                                <p class="bar-title">JavaScript<span class="percent align-right">90%</span></p>
                                <div class="bar">
                                    <div class="bar-fill bar-fill-developer start"></div>
                                </div>
                                <p class="bar-title">PHP<span class="percent align-right">80%</span></p>
                                <div class="bar">
                                    <div class="bar-fill bar-fill-photoshop start"></div>
                                </div>
                                <p class="bar-title">HTML / CSS<span class="percent align-right">95%</span></p>
                                <div class="bar">
                                    <div class="bar-fill bar-fill-webdesign start"></div>
                                </div>
                                <p class="bar-title">jQuery<span class="percent align-right">85%</span></p>
                                <div class="bar">
                                    <div class="bar-fill bar-fill-socialmedia start"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Resume;
