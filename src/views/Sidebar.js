import React, { useRef, useEffect, useState } from 'react';
import firebase from 'firebase/app'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getRequest, postRequest } from '../services/axios.config';
import { setProfile, setProfileImage } from '../store/reducer/profile';
import { useStyles } from './styles/SidebarStyle';
import useTheme from './hooks/useTheme';
import Routes from '../routes';
import clsx from 'clsx';
import { TextField } from '@material-ui/core/';
import '../new.css';
import '../animate.css';
import '../bootstrap.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import ScrollToTop from '../services/ScrollToTop';

const initValues = {
    fullName: '',
    profession: '',
    profileImage: '/static/images/avatar.png',
}

const validationSchema = Yup.object().shape({
    fullName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is required'),
    profession: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Profession is required'),
})

function Sidebar({ setActivePage }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const wrapperRef = useRef(null)
    const profile = useSelector(state => state.profile)
    const [bgColor1, textColor1, headColor, textColor2, gradColor, updateColor] = useTheme('greyColor')
    const [hoverText, setHoverText] = useState(false)

    const formik = useFormik({
        initialValues: initValues,
        onChange: (event) => {
            const selectedFile = event.currentTarget.files[0]
            const selectedUrl = URL.createObjectURL(selectedFile)
            formik.setFieldValue("profileImage", selectedUrl);
            dispatch(setProfileImage(selectedUrl))
        },
        validationSchema
    })
    const handleChange = (event) => {
        const inputFieldName = event.currentTarget.name
        const inputFieldValue = event.currentTarget.value
        const updatedProfileData = { ...profile, [inputFieldName]: inputFieldValue }
        dispatch(setProfile(updatedProfileData))
        formik.setFieldValue(inputFieldName, inputFieldValue)
    }



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

    const logout = () => {
        firebase.auth().signOut().then(function () {
            console.log('logged out')
            setActivePage('login')

        }).catch(function (error) {
            console.log('error logging out')
        });
        console.log('logged out')
    }

    const mouseOver = () => {
        setHoverText(true)
    }


    return (
        <>
            <div>
                <aside
                    id='lonon-aside'
                    style={{
                        background: gradColor.background,
                    }}
                >
                    <form onSubmit={formik.handleSubmit}>
                        <section
                            id="lonon-logo"
                            className='ImageBox'
                            onMouseOver={() => setHoverText(true)}
                            onMouseOut={() => setHoverText(false)}
                            style={{ cursor: 'pointer', marginBottom: 2 }}
                        >
                            <div
                                onClick={() => wrapperRef.current.click()}
                            >
                                {
                                    hoverText &&
                                    <div style={{
                                        position: "absolute",
                                        height: '125px',
                                        width: '70%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        }}>Upload</div>
                                }
                                {
                                formik.initialValues.profileImage &&
                                <img style={{
                                    objectFit: 'cover',
                                }}
                                    src={formik.values.profileImage} />
                            }
                                
                                
                            </div>
                        </section>
                    <input
                        fullWidth
                        type="file"
                        name="profileImage"
                        ref={wrapperRef}
                        onChange={(event) => {
                            const selectedFile = event.currentTarget.files[0]
                            const selectedUrl = URL.createObjectURL(selectedFile)
                            formik.setFieldValue("profileImage", selectedUrl);
                            dispatch(setProfileImage(selectedUrl))
                        }}
                        style={{
                            display: 'none'
                        }}
                    />
                    <TextField
                        placeholder="Full Name"
                        multiline
                        rowsMax={4}
                        name='fullName'
                        inputProps={{ disableUnderline: true }}
                        inputProps={{ style: { color: textColor2, fontSize: 20, fontWeight: 700, textAlign: 'center' } }}
                        error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                        helperText={formik.touched.fullName && formik.errors.fullName}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                        onChange={handleChange}

                    />
                    < div style={{ textAlign: 'center', padding: 0 }}>
                        <TextField
                            fullWidth
                            placeholder="Profession"
                            multiline
                            rowsMax={2}
                            name='profession'
                            inputProps={{ style: { color: textColor2, fontSize: 13, textAlign: 'center' } }}
                            InputLabelProps={{ style: { color: textColor1, } }}
                            error={Boolean(formik.touched.profession && formik.errors.profession)}
                            helperText={formik.touched.profession && formik.errors.profession}
                            onBlur={formik.handleBlur}
                            value={formik.values.profession}
                            onChange={handleChange}
                        />
                    </div>
                    </form>
                <nav id="lonon-main-menu">
                    <ul>
                        <ScrollToTop />
                        <li onClick={() => setActivePage('home')} style={{ color: textColor2 }}><button>Home</button></li>
                        <li onClick={() => setActivePage('resume')} style={{ color: textColor2 }}>Resume</li>
                        <li onClick={() => setActivePage('portfolio')} style={{ color: textColor2 }}>Portfolio</li>
                        <li onClick={() => setActivePage('services')} style={{ color: textColor2 }}>Services</li>
                        <li onClick={() => setActivePage('contact')} style={{ color: textColor2 }}>Contact</li>
                        {/* <li><Link to='/home' style={{ color: textColor2 }}>Home</Link></li>
                            <li><Link to='/resume' style={{ color: textColor2 }}>Resume</Link></li>
                            <li><Link to='/portfolio' style={{ color: textColor2 }}>Portfolio</Link> </li>
                            <li><Link to='/services' style={{ color: textColor2 }}>Services</Link></li>
                            <li><Link to='/contact' style={{ color: textColor2 }}>Contact</Link> </li> */}
                        <li>
                            <button onClick={logout}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className={classes.btnDiv}>
                    <span className={clsx(classes.btn, classes.btn2)} onClick={() => updateColor('greyColor')} />
                    <span className={clsx(classes.btn, classes.btn4)} onClick={() => updateColor('blueColor')} />
                    <span className={clsx(classes.btn, classes.btn3)} onClick={() => updateColor('orangeColor')} />
                    <span className={clsx(classes.btn, classes.btn1)} onClick={() => updateColor('pinkColor')} />
                    <span className={clsx(classes.btn, classes.btn5)} onClick={() => updateColor('greenColor')} />
                    <span className={clsx(classes.btn, classes.btn6)} onClick={() => updateColor('violetColor')} />
                    <span className={clsx(classes.btn, classes.btn7)} onClick={() => updateColor('blackColor')} />
                </div>

                </aside>
            {/* <Routes /> */}
        </div>
        </>

    )
}

export default Sidebar
