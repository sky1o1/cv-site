import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProfile } from '../store/reducer/profile';
import { setExperience } from '../store/reducer/experience';
import { setEducation } from '../store/reducer/education';
import {
    makeStyles,
    TextField,
    InputAdornment,
    Slider,
    Button
} from '@material-ui/core';
import Footer from './Footer';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const initialValues = {
    image: '/static/images/avatar.png',
    dob: '',
    website: '',
    freelance: '',
    facebook: '',
    linkedin: '',
    skype: '',
    twitter: '',
    company: '',
    post: '',
    description: '',
    startYear: '',
    endYear: '',
    university: '',
        degree: '',
        description: '',
        uniStartYear: '',
        uniEndYear: '',
}

const validationSchema = Yup.object({
    degree: Yup.string().required('Degree is required'),
    website: Yup.string().email('Invalid email format').required('Website is required'),
    freelance: Yup.string().required('Freelancing info is required'),
    facebook: Yup.string().required('Facebook id is required'),
    linkedin: Yup.string().required('Linkedin id is required'),
    skype: Yup.string().required('Skype id is required'),
    twitter: Yup.string().required('Twitter id is required'),

})

const useStyles = makeStyles((theme) => ({
    root: {

    },
}))
function Resume() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [image, setImage] = useState(null)
    const wrapperRef = useRef(null)
    const [fields, setFields] = useState([{ value: null}]);
    const [fieldsUni, setFieldsUni] = useState([{ value: null}]);
    const formik = useFormik({
        initialValues,
        onSubmit: (values, onSubmitProps) => {
            onSubmitProps.setSubmitting(false)

        },
        validationSchema
    })
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

    function handleAddUni() {
        const values = [...fieldsUni];
        values.push({ value: null });
        setFieldsUni(values);
    }

    function handleRemoveUni(i) {
        const values = [...fieldsUni];
        values.splice(i, 1);
        setFieldsUni(values);
    }
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
                                        formik.initialValues.image &&
                                        <img src={formik.values.image} />
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
                                        formik.setFieldValue("image", selectedUrl);
                                        setImage(selectedFile)

                                    }}
                                    style={{
                                        display: 'none'
                                    }}
                                />
                            </div>
                            <div class="col-md-5 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft"> <span class="heading-meta style-1">Resume</span>
                                <h3 class="lonon-about-heading">I am a Web Designer</h3>
                                <p>Quisque convallis lacinia est et volutpat. Ut interdum lectus velit, ac venenatis odio fringilla ut. Mauris tincidunt diam a nisi mollis rhoncus. Nam non ante consequatir, malesuada dui euismod, pharetra mi.</p>
                                <p>Drana convallis urna sapien, ut porta tortor maximus ac. Sed auctor, dui sed bib endum feugiat, felis lorem pulvinar mauris.</p>
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
                                                        onChange={formik.handleChange}
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
                                                        onChange={formik.handleChange}
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
                                                        onChange={formik.handleChange}
                                                    />
                                                </p>

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
                                                        onChange={formik.handleChange}
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
                                                        onChange={formik.handleChange}
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
                                                        onChange={formik.handleChange}
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
                <div class="divider1"></div>

                <div class="lonon-lonon-timeline">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12"> <span class="heading-meta style-1">Resume</span>
                                <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Experience</h2> </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                               
                                {fields.map((field, idx) => {
                                    return (
                                        <div key={`${field}-${idx}`}>
                                <Button variant="contained" type="button" color="primary" onClick={() => handleAddExp()}>
                                    +
                                </Button>
                                <ul class="lonon-timeline">
                                    <li>
                                        <div class="lonon-timeline-content">
                                            <span >
                                            <TextField
                                                        id="date"
                                                        label="Start year"
                                                        type="date"
                                                        name='startYear'
                                                        size="small"
                                                        variant="outlined"
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.startYear}
                                                        onChange={formik.handleChange}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                        </span>
                                        <h4>--</h4>
                                        <span >
                                            <TextField
                                                        id="date"
                                                        label="End year"
                                                        type="date"
                                                        name='endYear'
                                                        size="small"
                                                        variant="outlined"
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.endYear}
                                                        onChange={formik.handleChange}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                        </span>
                                        
                                        
                                                
                                            <h5>
                                            <TextField id="standard-basic" name='company' label="Company" />
                                            </h5>
                                            <h4>
                                            <TextField id="standard-basic" name='post' label="Post" />
                                            </h4>
                                            <p>
                                            <TextField
                                             multiline 
                                             size='small'
                                             rows={5}
                                             id="standard-basic" 
                                             name='description' 
                                             label="Description" 
                                             />
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <span>
                                            <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveExp(idx)}>
                                                X
                                                </Button>
                                                </span>   
                                        </div>
                                    );
                                })}
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider1"></div>

                <div class="lonon-lonon-timeline">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12"> <span class="heading-meta style-1">Resume</span>
                                <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">Education</h2> </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                {fieldsUni.map((field, idx) => {
                                    return (
                                        <div key={`${field}-${idx}`}>
    <Button variant="contained" type="button" color="primary" onClick={() => handleAddUni()}>
                                    +
                                </Button>
                                <ul class="lonon-timeline">
                                    <li>
                                        <div class="lonon-timeline-content">
                                            <span >
                                            <TextField
                                                        id="date"
                                                        label="Start year"
                                                        type="date"
                                                        name='uniStartYear'
                                                        size="small"
                                                        variant="outlined"
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.uniStartYear}
                                                        onChange={formik.handleChange}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                        </span>
                                        <h4>--</h4>
                                        <span >
                                            <TextField
                                                        id="date"
                                                        label="End year"
                                                        type="date"
                                                        name='uniEndYear'
                                                        size="small"
                                                        variant="outlined"
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.uniEndYear}
                                                        onChange={formik.handleChange}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                    />
                                        </span>                
                                            <h5>
                                            <TextField id="standard-basic" name='university' label="University" />
                                            </h5>
                                            <h4>
                                            <TextField id="standard-basic" name='degree' label="Degree" />
                                            </h4>
                                            <p>
                                            <TextField
                                             multiline 
                                             size='small'
                                             rows={5}
                                             id="standard-basic" 
                                             name='description' 
                                             label="Description" 
                                             />
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <span>
                                            <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveUni(idx)}>
                                                X
                                                </Button>
                                                </span>   
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider1"></div>

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
