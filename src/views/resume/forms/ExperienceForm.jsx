import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import validationSchema from '../validationSchema/validationSchema';
import { setExperience } from '../../../store/reducer/experience';
import {
    TextField,
    Button
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const initialValues = {
    company: '',
    post: '',
    description: '',
    startYear: '',
    endYear: '',
}



function ExperienceForm({ id, removeExp }) {
    const dispatch = useDispatch()

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
    return (
        <>
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
                            <TextField
                                multiline
                                onChange={formik.handleChange}
                                name='company'
                                placeholder="Company"
                                size="small"
                                variant="outlined"
                            />
                        </h5>
                        <h4>
                            <TextField
                                multiline
                                onChange={formik.handleChange}
                                name='post'
                                placeholder="Post"
                                size="small"
                                variant="outlined"
                            />
                        </h4>
                        <p>
                            <TextField
                                multiline
                                size="small"
                                variant="outlined"
                                rows={5}
                                name='description'
                                placeholder="Description"
                                onChange={formik.handleChange}
                            />
                        </p>
                    </div>
                </li>
            </ul>
            <span>
                <IconButton  >
                    <DeleteIcon fontSize="small" onClick={() => removeExp(id)} />
                </IconButton>
            </span>
            <span>
                <Button 
                variant="contained" 
                color="secondary" 
                onClick={handleSubmit} 
                disabled={!formik.isValid || formik.isSubmitting}
                >
                    Submit
        </Button>
            </span>
        </>
    )
}

export default ExperienceForm;