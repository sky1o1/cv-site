import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import validationSchema from '../validationSchema/validationSchemaLanguage';
import { setLanguage } from '../../../store/reducer/language';
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
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const initialValues = {
    language: '',
    listening: '',
    writing: '',
    speaking: '',
    reading: ''
}

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
        padding: 20
    }
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

    const rating = [
        { title: 'Beginner' },
        { title: 'Intermediate' },
        { title: 'Expert' },
    ];

    const handleSubmit = async () => {
        await formik.submitForm()
    }

    const handleChange = name => (event, value) => {
        formik.setFieldValue(name, value.title)
    }
    console.log(formik.values)
    return (

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
                                inputProps={{ style: { color: '#fff', fontSize: 13, fontWeight: '500' } }}
                                InputLabelProps={{ style: { color: '#fff', } }}
                                error={Boolean(formik.touched.language && formik.errors.language)}
                                helperText={formik.touched.language && formik.errors.language}
                                onBlur={formik.handleBlur}
                            />
                            <Grid container>
                                <Grid list xs={3}>
                                <Autocomplete
                                    className={classes.autofield}
                                    options={rating}
                                    size="small"
                                    getOptionLabel={(option) => option.title}
                                    style={{ width: 200 }}
                                    onChange={handleChange('listening')}
                                    renderInput={(params) => <TextField {...params} label="Listening" variant="outlined" />}
                                />
                                </Grid>

                                <Grid list xs={3}>
                                <Autocomplete
                                    className={classes.autofield}
                                    size="small"
                                    options={rating}
                                    getOptionLabel={(option) => option.title}
                                    style={{ width: 200 }}
                                    onChange={handleChange('writing')}
                                    renderInput={(params) => <TextField {...params} label="Writing" variant="outlined" />}
                                />
                                </Grid>

                                <Grid list xs={3}>
                                <Autocomplete
                                    className={classes.autofield}
                                    options={rating}
                                    size="small"
                                    getOptionLabel={(option) => option.title}
                                    style={{ width: 200 }}
                                    onChange={handleChange('speaking')}
                                    renderInput={(params) => <TextField {...params} label="Speaking" variant="outlined" />}
                                />
                                </Grid>

                                <Grid list xs={3}>
                                <Autocomplete
                                    className={classes.autofield}
                                    options={rating}
                                    size="small"
                                    getOptionLabel={(option) => option.title}
                                    style={{ width: 200 }}
                                    onChange={handleChange('reading')}
                                    renderInput={(params) => <TextField {...params} label="Reading" variant="outlined" />}
                                />
                                </Grid>
                                <Grid list xs={3}>
                                    <IconButton className={classes.iconContainer}>
                                        <DeleteIcon fontSize="small" className={classes.icon} onClick={() => removeLanguage(id)} />
                                    </IconButton>
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
    )
}

export default LanguageForm;