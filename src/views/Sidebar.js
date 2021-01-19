import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, setProfileImage } from '../store/reducer/profile';
import { setColors} from '../store/reducer/colors';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { blackColor, purple } from '@material-ui/core/colors';
import {
    makeStyles,
    AppBar,
    TextField,
    Toolbar,
    IconButton,
    Button,
    Typography,
    Switch,
    Paper,
} from '@material-ui/core/';
import CssBaseline from '@material-ui/core/CssBaseline';
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
    profession: Yup.string().required('Type is required'),
})

const useStyles = makeStyles((theme) => ({
    root: {
    },
}))

function Sidebar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const wrapperRef = useRef(null)
    const profile = useSelector(state => state.profile)
    const [theme, setTheme] = useState(false);

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
        backColor: '#fff',
        color: '#000'
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
            { ...prevData, backColor: '#fff', color: '#000' }
        ))
        const updatedColor = { ...bgColor,  backColor: '#fff', color: '#000' }
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


    const btnTheme = createMuiTheme({
        palette: {
            secondary: {
                main: '#fff',
            },
        },
      });

//   const dark = createMuiTheme({
//     palette: {
//       type: "dark"
//     },
//     text: {
//         default: "#000"
//       }
//   });

return (
    <>
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
          </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            {/* <MuiThemeProvider theme={theme? dark : light}> */}
            <aside id="lonon-aside"
                style={{
                    backgroundColor: bgColor.backColor,
                }}
            >
                {/* <Paper> */}
                <form onSubmit={formik.handleSubmit}>
                    <section id="lonon-logo">
                        <div onClick={() => wrapperRef.current.click()}   >
                            {
                                formik.initialValues.profileImage &&
                                <img src={formik.values.profileImage} />
                            }
                        </div>

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
                                console.log(selectedFile)
                                dispatch(setProfileImage(selectedUrl))

                            }}
                            style={{
                                display: 'none'
                            }}
                        />
                        <TextField
                            className="textfield"
                            fullWidth
                            name='fullName'
                            label="Full name"
                            inputProps={{ style: { color: bgColor.color } }}
                            InputLabelProps={{ style: { color: bgColor.color } }}
                            error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullName}
                            onChange={handleChange}
                        />
                        <TextField
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
                        />
                    </section>

                </form>
                <nav id="lonon-main-menu">
                    <ul>
                        <li><a style={{ color: bgColor.color }}><SidebarOption title="home" /></a></li>
                        <li><a style={{ color: bgColor.color }}><SidebarOption title="resume" /></a></li>
                        <li><a style={{ color: bgColor.color }}><SidebarOption title="portfolio" /></a> </li>
                        <li><a style={{ color: bgColor.color }}><SidebarOption title="services" /></a></li>
                        <li><a style={{ color: bgColor.color }}><SidebarOption title="blog" /></a></li>
                        <li><a style={{ color: bgColor.color }}><SidebarOption title="contact" /></a> </li>
                    </ul>
                </nav>
                {/* <Switch 
                checked={theme}
                onChange={() => setTheme(!theme)}
                />
                <h1>Test</h1> */}
                {/* </Paper> */}

                <Button variant='contained' onClick={greyColor}>Grey</Button>
                <MuiThemeProvider theme={btnTheme}>
                    <Button variant='contained' onClick={blackColor} >Black</Button>
                </MuiThemeProvider>
                <Button variant='contained' onClick={whiteColor} color="secondary">White</Button>
                <Button variant='contained' onClick={blueColor} color="primary">Blue</Button>

            </aside>
            {/* </MuiThemeProvider> */}
        </div>
    </>

)
}

export default Sidebar
