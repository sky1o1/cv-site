import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRequest, postRequest } from '../../services/axios.config';
import { setProfile, setImage3 } from '../../store/reducer/profile';
import validationSchema from './validationSchema/validationSchemaHome';
import { useStyles } from '../styles/HomeStyle';
import Skills from './Skills';
import Language from './Language';
import {
    TextField,
    Grid,
} from '@material-ui/core';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Footer from '../Footer';
import { useFormik } from 'formik';


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
    const colors = useSelector(state => state.colors)

    const pinkGradient = colors.bgColor == '#BB377D' ? `${classes.pinkGrad}` : '';
    const greyGradient = colors.bgColor == '#45515D' ? `${classes.greyGrad}` : '';
    const orangeGradient = colors.bgColor == '#ff4b1f' ? `${classes.orangeGrad}` : '';
    const blueGradient = colors.bgColor == '#032481' ? `${classes.blueGrad}` : '';
    const greenGradient = colors.bgColor == '#56ab2f' ? `${classes.greenGrad}` : '';
    const violetGradient = colors.bgColor == '#302b63' ? `${classes.violetGrad}` : '';
    const blackGradient = colors.bgColor == '#000' ? `${classes.blackGrad}` : '';

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
        <div id="lonon-main">
            <form onSubmit={formik.handleSubmit}>
                <div class="lonon-about">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6" style={{ cursor: 'pointer' }}>
                                <div
                                className="ImageBox" onClick={() => wrapperRef.current.click()}   >
                                    {
                                        formik.initialValues.image3 &&
                                        <img 
                                        style={{
                                           objectFit: 'contain'
                                        }} 
                                        src={formik.values.image3} />
                                    }
                                </div>

                                <input
                                    fullWidth
                                    type="file"
                                    label="Image"
                                    name="image"
                                    error={Boolean(formik.touched.image3 && formik.errors.image3)}
                                    helperText={formik.touched.image3 && formik.errors.image3}
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
                            <div class="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <span style={{ color: colors.headColor }} class="heading-meta style-1">Informations</span>
                                <h3 style={{ color: colors.headColor }} class="lonon-about-heading">I'm {profile.fullName}</h3>

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
                                <div
                                    className={`${pinkGradient} ${greyGradient} ${orangeGradient} ${blueGradient} ${greenGradient} ${violetGradient} ${blackGradient} cardvisit`}
                                >
                                    <h3 style={{ color: colors.textColor }}> {profile.fullName}</h3>
                                    <p style={{ color: colors.textColor }}>{profile.profession}</p>
                                    <div
                                        style={{
                                            backgroundColor: colors.backColor
                                        }} class="divider-line"></div>
                                    <div >
                                            <Grid container spacing={1} alignItems="flex-end">
                                                <Grid item>
                                                    <PhoneIphoneOutlinedIcon style={{ color: '#fafafa' }} fontSize="small" />

                                                </Grid>
                                                <Grid item xs>
                                                    <TextField
                                                        placeholder="Phone Number"
                                                        inputProps={{ style: { fontSize: 13, color: colors.textColor } }}
                                                        fullWidth
                                                        multiline
                                                        name='phoneNumber'
                                                        error={Boolean(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                                                        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                                        InputLabelProps={{ style: { color: 'red' } }}
                                                        onBlur={formik.handleBlur}
                                                        onChange={handleChange} />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} alignItems="flex-end">
                                                <Grid item >
                                                    <EmailOutlinedIcon style={{ color: '#fafafa' }} fontSize="small" />

                                                </Grid>
                                                <Grid item xs>
                                                    <TextField
                                                        placeholder="Email Address"
                                                        inputProps={{ style: { fontSize: 13, color: colors.textColor } }}
                                                        fullWidth
                                                        multiline
                                                        name='email'
                                                        error={Boolean(formik.touched.email && formik.errors.email)}
                                                        helperText={formik.touched.email && formik.errors.email}
                                                        onBlur={formik.handleBlur}
                                                        onChange={handleChange} />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} alignItems="flex-end">
                                                <Grid item >
                                                    <LocationOnOutlinedIcon style={{ color: '#fafafa' }} fontSize="small" />

                                                </Grid>
                                                <Grid item xs>
                                                    <TextField
                                                        placeholder="Location"
                                                        name='location'
                                                        inputProps={{ style: { fontSize: 13, color: colors.textColor } }}
                                                        fullWidth
                                                        multiline
                                                        error={Boolean(formik.touched.location && formik.errors.location)}
                                                        helperText={formik.touched.location && formik.errors.location}
                                                        onBlur={formik.handleBlur}
                                                        onChange={handleChange} />
                                                </Grid>
                                            </Grid>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider1"></div>
                <Skills color={colors} />
                <div class="divider1"></div>
                <Language color={colors} />
            </form>
            <Footer />
        </div>

    )
}

export default Home
