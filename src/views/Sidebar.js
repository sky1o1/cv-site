import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, setProfileImage } from '../store/reducer/profile';
import { setColors} from '../store/reducer/colors';
import clsx from 'clsx';
import {
    makeStyles,
    AppBar,
    TextField,
    Toolbar,
    IconButton,
    Button,
    Typography,
    Grid
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import '../new.css';
import '../animate.css';
import '../bootstrap.css';
import SidebarOption from './SidebarOption';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const initValues = {
    fullName: '',
    profession: '',
    profileImage: '/static/images/avatar.png',
}

const validationSchema = Yup.object({
    fullName: Yup.string().required('Name is required'),
    profession: Yup.string().required('Profession is required'),
})

const useStyles = makeStyles((theme) => ({
    btnDiv: {
        display:'flex',
        justifyContent: 'center',
    },
    btn: {
        borderRadius: '50%',
        height: '18px',
        width: '18px',
        border: '2px solid white',
        marginRight:10,
        // boxShadow: "5px 5px 15px 1px #fff"
    },
    btn1: {
        backgroundColor: '#555',
     
    },
    btn2: {
        backgroundColor: '#212121',
    },
    btn3: {
        backgroundColor: '#fff',
    },
    btn4: {
        backgroundColor: '#000080',
    },
    root: {
        '&$disabled $notchedOutline': {
           borderColor: 'orange'
        }
     },
}))

function Sidebar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const wrapperRef = useRef(null)
    const profile = useSelector(state => state.profile)

    const formik = useFormik({
        initialValues: initValues,
        validationSchema
    })


    const handleChange = (event) => {
        const inputFieldName = event.currentTarget.name
        const inputFieldValue = event.currentTarget.value
        const updatedProfileData = { ...profile, [inputFieldName]: inputFieldValue }
        dispatch(setProfile(updatedProfileData))
        formik.setFieldValue(inputFieldName, inputFieldValue)
    }
    const [bgColor, setBgColor] = useState({
        backColor: '#000',
        color: 'white'
    })

    const greyColor = () => {
        console.log('grey called')
        setBgColor(prevData => (
            { ...prevData, backColor: '#555', color: '#fff' }
        ))
        const updatedColor = { ...bgColor,  backColor: '#555', color: '#fff'}
        dispatch(setColors(updatedColor))
    }

    const blackColor = () => {
        console.log('black called')
        setBgColor(prevData => (
            { ...prevData, backColor: '#000', color: '#fff' }
        ))
        const updatedColor = { ...bgColor,  backColor: '#000', color: '#fff'}
        dispatch(setColors(updatedColor))
    }

    const whiteColor = () => {
        console.log('white called')
        setBgColor(prevData => (
            { ...prevData, backColor: '#fff', color: '#707070' }
        ))
        const updatedColor = { ...bgColor,  backColor: '#fff', color: '#707070' }
        dispatch(setColors(updatedColor))
    }
    const blueColor = () => {
        console.log('white called')
        setBgColor(prevData => (
            { ...prevData, backColor: '#000080', color: '#fff' }
        ))
        const updatedColor = { ...bgColor, backColor: '#000080', color: '#fff'}
        dispatch(setColors(updatedColor))
    }


return (
    <>
        <div>
            {/* <AppBar style={{
                backgroundColor: bgColor.backColor,
                color: bgColor.color 
            }} position="static">
                <Toolbar>
                    <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
          </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar> */}

            <aside id="lonon-aside"
                style={{
                    backgroundColor: bgColor.backColor,
                }}
            >
                <form onSubmit={formik.handleSubmit}>
                    <section id="lonon-logo" style={{cursor:'pointer',marginBottom:2}}>
                        <div onClick={() => wrapperRef.current.click()}   >
                            {
                                formik.initialValues.profileImage &&
                                <img src={formik.values.profileImage} />
                            }
                        </div>
                    </section>
                    <input
                            fullWidth
                            type="file"
                            label="Image"
                            name="profileImage"
                            ref={wrapperRef}
                            onChange={(event) => {
                                const selectedFile = event.currentTarget.files[0]
                                const selectedUrl = URL.createObjectURL(selectedFile)
                                formik.setFieldValue("profileImage", selectedUrl);
                                // console.log(selectedFile)
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
                            inputProps={{ style: { color: bgColor.color,fontSize:20,fontWeight:700,textAlign:'center'} }}
                            error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullName}
                            onChange={handleChange}
                            
                        />
                        < div style={{textAlign:'center',padding:0}}> 
                        <TextField
                            fullWidth
                            placeholder="Profession"
                            multiline
                            rowsMax={2}
                            name='profession'
                            inputProps={{ style: { color: bgColor.color ,fontSize:13 ,textAlign:'center'} }}
                            InputLabelProps={{ style: { color: bgColor.color,} }}
                            error={Boolean(formik.touched.profession && formik.errors.profession)}
                            helperText={formik.touched.profession && formik.errors.profession}
                            onBlur={formik.handleBlur}
                            value={formik.values.profession}
                            onChange={handleChange}
                        />
                        </div>
                    
                        {/* <TextField
                            // className="textfield"
                            fullWidth
                            name='fullName'
                            // label="Full name"
                            id="standard-multiline-flexible"
                            inputProps={{ style: { color: bgColor.color } }}
                            InputLabelProps={{ style: { color: bgColor.color } }}
                            error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullName}
                            onChange={handleChange}
                            
                        /> */}
                        {/* <TextField
                            className="textfield"
                            id="standard-basic"
                            fullWidth
                            name='profession'
                            label="Profession"
                            inputProps={{ style: { color: bgColor.color } }}
                            InputLabelProps={{ style: { color: bgColor.color } }}
                            error={Boolean(formik.touched.profession && formik.errors.profession)}
                            helperText={formik.touched.profession && formik.errors.profession}
                            onBlur={formik.handleBlur}
                            value={formik.values.profession}
                            onChange={handleChange}
                        /> */}
                </form>
                <nav id="lonon-main-menu">
                    <ul>
                        <li><a style={{ color: bgColor.color }}><SidebarOption title="home" /></a></li>
                        <li><a style={{ color: bgColor.color }}><SidebarOption title="resume" /></a></li>
                        <li><a style={{ color: bgColor.color }}><SidebarOption title="portfolio" /></a> </li>
                        <li><a style={{ color: bgColor.color }}><SidebarOption title="services" /></a></li>
                        {/* <li><a style={{ color: bgColor.color }}><SidebarOption title="blog" /></a></li> */}
                        <li><a style={{ color: bgColor.color }}><SidebarOption title="contact" /></a> </li>
                    </ul>
                </nav>
                <div class="lonon-footer">
                <Grid container className={classes.btnDiv} >
                <span className={ clsx(classes.btn, classes.btn1)} onClick={greyColor} />
                <span  className={ clsx(classes.btn, classes.btn2)} onClick={blackColor} />
                <span  className={ clsx(classes.btn, classes.btn3)} onClick={whiteColor} />
                <span  className={ clsx(classes.btn, classes.btn4)} onClick={blueColor} />
                </Grid>
                </div>
               
            </aside>
        </div>
    </>

)
}

export default Sidebar
