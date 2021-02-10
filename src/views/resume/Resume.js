import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProfile, setImage2 } from '../../store/reducer/profile';
import validationSchema from './validationSchema/validationSchema';
import Experience from './Experience';
import Education from './Education';
import SocialMedia from './SocialMedia';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
    makeStyles,
    TextField,
    Grid,
    Card,
    CardContent,
    IconButton,
    Button,
    DialogTitle,
    Dialog
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
    const links = useSelector(state => state.links)
    const colors = useSelector(state => state.colors)
    const wrapperRef = useRef(null)

    const greyGradient = colors.bgColor =='#555' ? 'greyGrad' : '';
    const blackGradient = colors.bgColor =='#000' ? 'blackGrad' : '';
    const whiteGradient = colors.bgColor =='#fff' ? 'whiteGrad' : '';
    const blueGradient = colors.bgColor =='#0000ff' ? 'blueGrad' : '';

    function handleChange(event) {
        console.log(event)
        const inputFieldName = event.currentTarget.name
        const inputFieldValue = event.currentTarget.value
        const updatedProfileData = { ...profile, [inputFieldName]: inputFieldValue }
        dispatch(setProfile(updatedProfileData))
        formik.setFieldValue(inputFieldName, inputFieldValue)
    }

    const formik = useFormik({
        initialValues,
        validationSchema
    })

      // useEffect(() => {
    //     async function fetchApi() {
    //         try{
    //             let response = await postRequest('');
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    //      fetchApi()
    // },[])

    return (
        <>
            <div id="lonon-main">

               
            <div class="lonon-about">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12"> <span style={{color: colors.headColor}} class="heading-meta style-1">Resume</span>
                                <h2 style={{color: colors.headColor}} class="lonon-heading animate-box" data-animate-effect="fadeInLeft">About Me</h2> </div>

                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div 
                                style={{cursor:'pointer',marginBottom:2}}
                                className="ImageBox"  
                                onClick={() => wrapperRef.current.click()} 
                                error={Boolean(formik.touched.image2 && formik.errors.image2)}
                                helperText={formik.touched.image2 && formik.errors.image2}

                                >
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
                                    error={Boolean(formik.touched.profileImage && formik.errors.profileImage)}
                                    style={{
                                        display: 'none'
                                    }}
                                />
                            </div>
                            <div class="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft"> <span style={{color: colors.headColor}} class="heading-meta style-1">Resume</span>
                                <h3 style={{color: colors.headColor}} class="lonon-about-heading">I'm a {profile.profession}</h3>
                                <p>
                                    {profile.information}
                                </p>
                                <div class="lonon-about-contact-wrap">
                                    <form className={classes.root} onSubmit={formik.handleSubmit}>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>
                                                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                        <Grid container justify="space-around">
                                                            <KeyboardDatePicker
                                                                format="MM/dd/yyyy"
                                                                margin="normal"
                                                                id="date"
                                                                placeholder="Birthday"
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.dob}
                                                                onChange={handleChange}
                                                                KeyboardButtonProps={{
                                                                    'aria-label': 'change date',
                                                                }}
                                                            />
                                                        </Grid>
                                                    </MuiPickersUtilsProvider> */}
                                                    <TextField
                                                        id="date"
                                                        placeholder="Birthday"
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

                                                {links.facebook ?
                                                    <p>
                                                        <h2>Facebook</h2>
                                                    </p>
                                                    :
                                                    <p></p>
                                                }

                                                {links.linkedin ?
                                                    <p>
                                                        <h2>LinkedIn</h2>
                                                    </p>
                                                    :
                                                    <p></p>
                                                }

                                                {links.github ?
                                                    <p>
                                                       <h2>Github</h2>
                                                    </p>
                                                    :
                                                    <p></p>

                                                }

                                                {links.instagram ?
                                                    <p>
                                                        <h2>Instagram</h2>
                                                    </p>
                                                    :
                                                    <p></p>

                                                }

                                                {links.twitter ?
                                                    <p>
                                                       <h2>Twitter</h2>
                                                    </p>
                                                    :
                                                    <p></p>
                                                }

                                            </div>

                                            <div class="col-md-6">
                                                <Card>
                                                </Card>


                                                <SocialMedia color={colors} greyG={greyGradient} blackG={blackGradient} whiteG={whiteGradient} blueG={blueGradient} />



                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Experience color={colors} greyG={greyGradient} blackG={blackGradient} whiteG={whiteGradient} blueG={blueGradient} />
                <Education color={colors} greyG={greyGradient} blackG={blackGradient} whiteG={whiteGradient} blueG={blueGradient} />
                <Footer color={colors} greyG={greyGradient} blackG={blackGradient} whiteG={whiteGradient} blueG={blueGradient} />
            </div>
        </>
    )
}

export default Resume;
