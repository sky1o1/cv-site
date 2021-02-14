import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { getRequest, postRequest } from '../../../services/axios.config';
import validationSchema from '../validationSchema/validationSchemaEdu';
import { setEducation } from '../../../store/reducer/education';
import {
    TextField,
    Button,
    Grid,
    makeStyles
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import Tooltip from '@material-ui/core/Tooltip';


const initialValues = {
    university: '',
    degree: '',
    description: '',
    startYear: '',
    endYear: '',
}

const useClasses = makeStyles(theme => ({
    iconContainer: {
        "&:hover $icon": {
            color: 'black',
            transition: '1s',
        },
    },
    icon: {
        color: 'grey',
        justifyContent: 'center'
    },
    eduGrid: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        gridGap: '15px'
    },
    btnGrid: {
        display: 'flex',
        flexDirection: 'row',
    }
}))

function EducationForm({ id, removeEdu }) {
    const classes = useClasses()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            dispatch(setEducation(values))
            console.log(values)
            async function fetchApi() {
                try {
                    await postRequest('/api/auth/add-education', {
                        university: values.university,
                        course: values.degree,
                        course_description: values.description,
                        start_date: values.startYear,
                        end_date: values.endyear
                    });
                } catch (err) {
                    console.log(err)
                }
            }
            fetchApi()
        },
        validationSchema
    })

    const handleSubmit = async () => {
        await formik.submitForm()
    }

    return (
        <>
            <ul class="lonon-timeline">
                <li>
                    <div class="lonon-timeline-content">
                        <Grid container>
                            <Grid item xs={12} sm={7}>
                                <Grid container spacing={1} style={{ marginBottom: 4 }} >
                                    <Grid item >
                                        <TextField
                                            style={{ width: 185 }}
                                            id="date"
                                            label="Start year"
                                            type="date"
                                            name='startYear'
                                            size="small"
                                            variant="outlined"
                                            onChange={formik.handleChange}
                                            error={Boolean(formik.touched.startYear && formik.errors.startYear)}
                                            helperText={formik.touched.startYear && formik.errors.startYear}
                                            onBlur={formik.handleBlur}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            style={{ width: 185 }}
                                            id="date"
                                            label="End year"
                                            type="date"
                                            name='endYear'
                                            size="small"
                                            variant="outlined"
                                            onChange={formik.handleChange}
                                            error={Boolean(formik.touched.endYear && formik.errors.endYear)}
                                            helperText={formik.touched.endYear && formik.errors.endYear}
                                            onBlur={formik.handleBlur}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <TextField
                                            multiline
                                            name='university'
                                            label="University"
                                            size="small"
                                            variant="outlined"
                                            onChange={formik.handleChange}
                                            error={Boolean(formik.touched.university && formik.errors.university)}
                                            helperText={formik.touched.university && formik.errors.university}
                                            onBlur={formik.handleBlur}
                                            style={{ width: 185 }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            multiline
                                            name='degree'
                                            label="Degree"
                                            size="small"
                                            variant="outlined"
                                            onChange={formik.handleChange}
                                            error={Boolean(formik.touched.degree && formik.errors.degree)}
                                            helperText={formik.touched.degree && formik.errors.degree}
                                            onBlur={formik.handleBlur}
                                            style={{ width: 185 }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs sm>

                                <TextField
                                    multiline
                                    size='small'
                                    rows={3}
                                    name='description'
                                    label="Description"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.description && formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}
                                    onBlur={formik.handleBlur}
                                    style={{ width: '100%' }}
                                />
                            </Grid>

                            <Grid style={{
                                display: "flex",
                                justifyContent: "center"
                                }} list>
                                <Tooltip title="Delete" placement="right-start">
                                    <IconButton
                                        classes={{
                                            root: classes.iconContainer
                                        }}
                                        onClick={() => removeEdu(id)} >
                                        <DeleteOutlineRoundedIcon style={{ fontSize: 18 }} className={classes.icon} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>


                        </Grid>

                        {/*                   
                                <Grid item  >
                                    <TextField
                                        style={{paddingRight: 15}}
                                        id="date"
                                        label="Start year"
                                        type="date"
                                        name='startYear'
                                        size="small"
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                        error={Boolean(formik.touched.startYear && formik.errors.startYear)}
                                        helperText={formik.touched.startYear && formik.errors.startYear}
                                        onBlur={formik.handleBlur}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    </Grid>
                                    <Grid item  >
                                        <TextField
                                            id="date"
                                            label="End year"
                                            type="date"
                                            name='endYear'
                                            size="small"
                                            variant="outlined"
                                            onChange={formik.handleChange}
                                            error={Boolean(formik.touched.endYear && formik.errors.endYear)}
                                            helperText={formik.touched.endYear && formik.errors.endYear}
                                            onBlur={formik.handleBlur}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>


                            <Grid item>
                                <TextField
                                    multiline
                                    name='university'
                                    label="University"
                                    size="small"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.university && formik.errors.university)}
                                    helperText={formik.touched.university && formik.errors.university}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>

                            <Grid item >
                                <TextField
                                    multiline
                                    name='degree'
                                    label="Degree"
                                    size="small"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.degree && formik.errors.degree)}
                                    helperText={formik.touched.degree && formik.errors.degree}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>

                     
                            <Grid list xs={6}>
                                <TextField
                                    multiline
                                    size='small'
                                    rows={5}
                                    name='description'
                                    label="Description"
                                    variant="outlined"
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.description && formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                             */}


                    </div>
                </li>
            </ul>
            <Grid container className={classes.btnGrid}>

                {/* <Grid list>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleSubmit}
                        disabled={!formik.isValid || formik.isSubmitting}
                    >
                        Submit
        </Button>
                </Grid> */}
            </Grid>

        </>
    )
}

export default EducationForm;