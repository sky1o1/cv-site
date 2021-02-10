import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import {getRequest, postRequest} from '../../../services/axios.config';
import validationSchema from '../validationSchema/validationSchemaExp';
import { setExperience } from '../../../store/reducer/experience';
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
    company: '',
    post: '',
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
    },
    error: {
        color: 'red',
        textAlign: 'start',
        fontSize: '13px',
    },
    expGrid: {
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


function ExperienceForm({ id, removeExp }) {
    const dispatch = useDispatch()
    const classes = useClasses()
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            dispatch(setExperience(values))
        },
        validationSchema
    })

    const handleSubmit = async () => {
        await formik.submitForm()
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
        <>
            <ul class="lonon-timeline">
                <li>
                    <div class="lonon-timeline-content">
                        <Grid container className={classes.expGrid}>
                            <Grid list>
                                <TextField
                                    style={{ paddingRight: 15 }}
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
                                <TextField
                                    style={{ paddingRight: 15 }}
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

                                </Grid>

                            <Grid list>
                                <TextField
                                    multiline
                                    onChange={formik.handleChange}
                                    name='company'
                                    placeholder="Company"
                                    size="small"
                                    variant="outlined"
                                    error={Boolean(formik.touched.company && formik.errors.company)}
                                    helperText={formik.touched.company && formik.errors.company}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid list>
                                <TextField
                                    multiline
                                    onChange={formik.handleChange}
                                    name='post'
                                    placeholder="Post"
                                    size="small"
                                    variant="outlined"
                                    error={Boolean(formik.touched.post && formik.errors.post)}
                                    helperText={formik.touched.post && formik.errors.post}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>

                            <Grid list>
                                <TextField
                                    multiline
                                    size="small"
                                    variant="outlined"
                                    rows={5}
                                    name='description'
                                    placeholder="Description"
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.description && formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid list>
                            <Tooltip title="Delete" placement="right-start">
                                    <IconButton
                                        classes={{
                                            root: classes.iconContainer
                                        }}
                                        onClick={() => removeExp(id)} >
                                        <DeleteOutlineRoundedIcon style={{ fontSize: 18 }} className={classes.icon} />
                                    </IconButton>
                                </Tooltip>
                                
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleSubmit}
                                    disabled={!formik.isValid || formik.isSubmitting}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </li>
            </ul>
            <span>

            </span>
            <span>

            </span>
        </>
    )
}

export default ExperienceForm;