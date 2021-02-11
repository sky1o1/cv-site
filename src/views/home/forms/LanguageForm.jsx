import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {getRequest, postRequest} from '../../../services/axios.config';
import validationSchema from '../validationSchema/validationSchemaLanguage';
import { setLanguage } from '../../../store/reducer/language';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import Tooltip from '@material-ui/core/Tooltip';
import {
    makeStyles,
    TextField,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    Input,
    Grid
} from '@material-ui/core';

const initialValues = {
    language: '',
    listening: '',
    writing: '',
    speaking: '',
    reading: ''
}

const theme = createMuiTheme({
    overrides: {
      MuiSelect:{
          root:{
                padding: '10px'
          }
      }
    }
});

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    iconContainer: {
        "&:hover $icon": {
            color: 'black',
            transition: '1s',
        },
    },
    icon: {
        color: 'grey',
    },
    autofield: {
        padding: 13
    },
}));

function LanguageForm({ id, removeLanguage }) {
    const classes = useStyles();
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values)
            dispatch(setLanguage(values))
        },
        validationSchema
    })

    const handleSubmit = async () => {
        await formik.submitForm()
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        formik.setFieldValue(name, value)
        console.log(event.target.value)
        console.log(event.target.name)
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
    
    return (
        <MuiThemeProvider theme={theme}>
            <div class="row">
                <ul class="lonon-timeline " style={{ width: '100%' }}>
                    <li>
                        <div class="lonon-timeline-content">
                            <form>
                                <TextField
                                    placeholder="Language"
                                    multiline
                                    rowsMax={2}
                                    name='language'
                                    className="lonon-timeline-date"
                                    inputProps={{ style: { color: '#fff', fontSize: 15, fontWeight: '500' } }}
                                    InputLabelProps={{ style: { color: '#fff' } }}
                                    error={Boolean(formik.touched.language && formik.errors.language)}
                                    helperText={formik.touched.language && formik.errors.language}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                                <Grid container>
                                    <Grid list xs>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel>Reading</InputLabel>
                                            <Select
                                                onChange={handleChange}
                                                label="Reading"
                                                defaultValue={'Beginner'}
                                                name='reading'
                                                className={`${classes.textField} without-padding`}
                                            >
                                                <MenuItem value={'Beginner'}>Beginner</MenuItem>
                                                <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
                                                <MenuItem value={'Expert'}>Expert</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid list xs>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel>Writing</InputLabel>
                                            <Select
                                                onChange={handleChange}
                                                label="Writing"
                                                defaultValue={'Beginner'}
                                                name='writing'
                                            >
                                                <MenuItem value={'Beginner'}>Beginner</MenuItem>
                                                <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
                                                <MenuItem value={'Expert'}>Expert</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid list xs>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel>Speaking</InputLabel>
                                            <Select
                                                onChange={handleChange}
                                                label="Speaking"
                                                defaultValue={'Beginner'}
                                                name='speaking'
                                            >
                                                <MenuItem value={'Beginner'}>Beginner</MenuItem>
                                                <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
                                                <MenuItem value={'Expert'}>Expert</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid list xs>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel>Listening</InputLabel>
                                            <Select
                                                onChange={handleChange}
                                                label="Listening"
                                                defaultValue={'Beginner'}
                                                name='listening'
                                            >
                                                <MenuItem value={'Beginner'}>Beginner</MenuItem>
                                                <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
                                                <MenuItem value={'Expert'}>Expert</MenuItem>
                                            </Select>
                                        </FormControl>

                                    </Grid>
                                    <Grid list xs>
                                        <Tooltip title="Delete" placement="right-start">
                                            <IconButton
                                                classes={{
                                                    root: classes.iconContainer
                                                }}
                                                onClick={() => removeLanguage(id)} >
                                                <DeleteOutlineRoundedIcon style={{ fontSize: 18 }} className={classes.icon} />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>

                                </Grid>
                            </form>
                        </div>
                    </li>
                </ul>
                {/* <div class="row">
                    <div class="col-md-12"> <span className={`${greyG} ${blackG} ${whiteG} ${blueG} heading-meta style-1` } >Expertise</span>
                        <h2 class="lonon-heading animate-box" className={`${greyG} ${blackG} ${whiteG} ${blueG} heading-meta style-1` } data-animate-effect="fadeInLeft">Language</h2> </div>
                </div>  */}
            </div>
        </MuiThemeProvider>
    )
}

export default LanguageForm;