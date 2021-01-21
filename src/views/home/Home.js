import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProfile, setImage3 } from '../../store/reducer/profile';
import validationSchema from './validationSchema/validationSchemaHome';
import Skills from './Skills';
import Language from './Language';
import {
    makeStyles,
    TextField,
    Grid
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
    resize: {
        fontSize: 50
    },
    margin: {
        margin: theme.spacing(1),
    },
    cardvisit: {
        opacity: 0.7
    },
}));

const initialValues = {
    profileImage: '/static/images/avatar.png',
    image3: '/static/images/avatar.png',
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

    function handleChange(event) {
        const inputFieldName = event.currentTarget.name
        const inputFieldValue = event.currentTarget.value
        const updatedProfileData = { ...profile, [inputFieldName]: inputFieldValue }
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
                            <div class="col-md-6" >
                                <div className="ImageBox" onClick={() => wrapperRef.current.click()}   >
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
                            <div class="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft"> <span class="heading-meta style-1">Informations</span>
                                <h3 class="lonon-about-heading">I'm {profile.fullName}</h3>

                                <form onSubmit={formik.handleSubmit} >
                                    <TextField
                                        id="outlined-multiline-static"
                                        fullWidth
                                        label="Information"
                                        multiline
                                        rows={8}
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
                                    <p>{profile.profession}</p>
                                    <div class="divider-line"></div>
                                    <div >

                                        <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item>
                                            <PhoneIphoneOutlinedIcon fontSize="small" />
                                                
                                            </Grid>
                                            <Grid item xs>
                                                <TextField 
                                                  placeholder="Phone Number"
                                                  inputProps={{ style: { fontSize:13} }}
                                                  fullWidth
                                                  multiline
                                                  name='phoneNumber'
                                                  onChange={handleChange} />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item >
                                            <EmailOutlinedIcon fontSize="small" />
                                                
                                            </Grid>
                                            <Grid item xs>
                                                <TextField 
                                                  placeholder="Email Address"
                                                  inputProps={{ style: { fontSize:13} }}
                                                  fullWidth
                                                  multiline
                                                  name='email'
                                                  onChange={handleChange} />
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item >
                                            <LocationOnOutlinedIcon fontSize="small"   />
                                                
                                            </Grid>
                                            <Grid item xs>
                                                <TextField 
                                                 placeholder="Location"
                                                 name='location'
                                                 inputProps={{ style: { fontSize:13} }}
                                                 fullWidth
                                                 multiline
                                                 onChange={handleChange}  />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider1"></div>
                <Skills />
                <div class="divider1"></div>
                <Language />


            </form>
            <Footer />
        </div>

    )
}

export default Home
