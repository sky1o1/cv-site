import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, setProfileImage } from '../store/reducer/profile';
import {useStyles} from './styles/SidebarStyle';
import useTheme from './hooks/useTheme';
import clsx from 'clsx';
import {
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
    profileImage: Yup.mixed().required("A file is required"),
})

function Sidebar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const wrapperRef = useRef(null)
    const profile = useSelector(state => state.profile)
    const [bgColor1, textColor1, headColor, textColor2, updateColor] = useTheme('greyColor')
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

    const greyGradient = bgColor1 =='#555' ? `${classes.greyGrad}` : '';
    const blackGradient = bgColor1 =='#000' ? `${classes.blackGrad}` : '';
    const whiteGradient = bgColor1 =='#fff' ? `${classes.whiteGrad}` : '';
    const blueGradient = bgColor1 =='#0000ff' ? `${classes.blueGrad}` : '';

    const handleChange = (event) => {
        const inputFieldName = event.currentTarget.name
        const inputFieldValue = event.currentTarget.value
        const updatedProfileData = { ...profile, [inputFieldName]: inputFieldValue }
        dispatch(setProfile(updatedProfileData))
        formik.setFieldValue(inputFieldName, inputFieldValue)
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

            <aside
            id='lonon-aside'
            className={`${greyGradient} ${blackGradient} ${whiteGradient} ${blueGradient}`}  
            style={{
                backgroundColor: bgColor1,
            }}
            >
                <form onSubmit={formik.handleSubmit}>
                    <section id="lonon-logo" style={{cursor:'pointer',marginBottom:2}}>
                        <div 
                        onClick={() => wrapperRef.current.click()}  
                        
                        error={Boolean(formik.touched.profileImage && formik.errors.profileImage)}
                        helperText={formik.touched.profileImage && formik.errors.profileImage}
                         >
                            {
                                formik.initialValues.profileImage &&
                                <img src={formik.values.profileImage} />
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
                            inputProps={{ style: { color: textColor2,fontSize:20,fontWeight:700,textAlign:'center'} }}
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
                            inputProps={{ style: { color: textColor2 ,fontSize:13 ,textAlign:'center'} }}
                            InputLabelProps={{ style: { color: textColor1,} }}
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
                        <li><a style={{ color: textColor2 }}><SidebarOption title="home" /></a></li>
                        <li><a style={{ color: textColor2 }}><SidebarOption title="resume" /></a></li>
                        <li><a style={{ color: textColor2 }}><SidebarOption title="portfolio" /></a> </li>
                        <li><a style={{ color: textColor2 }}><SidebarOption title="services" /></a></li>
                        <li><a style={{ color: textColor2 }}><SidebarOption title="contact" /></a> </li>
                        <li><a style={{ color: textColor2 }}><SidebarOption title="login" /></a> </li>
                    </ul>
                </nav>
                <div class="lonon-footer">
                <Grid container className={classes.btnDiv} >
                <span className={ clsx(classes.btn, classes.btn1)} onClick={() => updateColor('greyColor')} />
                <span  className={ clsx(classes.btn, classes.btn2)} onClick={() => updateColor('blackColor')} />
                <span  className={ clsx(classes.btn, classes.btn3, classes.btn33)} onClick={() => updateColor('whiteColor')} />
                <span  className={ clsx(classes.btn, classes.btn4)} onClick={() => updateColor('blueColor')} />
                </Grid>
                </div>
               
            </aside>
        </div>
    </>

)
}

export default Sidebar
