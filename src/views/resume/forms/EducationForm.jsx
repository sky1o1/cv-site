import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import validationSchema from '../validationSchema/validationSchema';
import {setEducation} from '../../../store/reducer/education';
import {
    TextField,
    Button
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const initialValues = {
    university: '',
    degree: '',
    description: '',
    startYear: '',
    endYear: '',
}


function EducationForm({id, removeEdu}) {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            dispatch(setEducation(values))
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
                                onChange={formik.handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        <h4>--</h4>
                            <TextField
                                id="date"
                                label="End year"
                                type="date"
                                name='endYear'
                                size="small"
                                variant="outlined"
                                onChange={formik.handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </span>
                        <h5>
                            <TextField
                            multiline
                                name='university'
                                label="University"
                                size="small"
                                variant="outlined"
                                onChange={formik.handleChange}
                            />
                        </h5>
                        <h4>
                            <TextField
                            multiline
                                name='degree'
                                label="Degree"
                                size="small"
                                variant="outlined"
                                onChange={formik.handleChange}
                            />
                        </h4>
                        <p>
                            <TextField
                                multiline
                                size='small'
                                rows={5}
                                name='description'
                                label="Description"
                                variant="outlined"
                                onChange={formik.handleChange}
                            />
                        </p>
                    </div>
                </li>
            </ul>
            <span>
            <IconButton aria-label="delete" >
                    <DeleteIcon fontSize="small" onClick={() => removeEdu(id)} />
                </IconButton>
            </span>
            <span>
                <Button variant="contained" color="secondary" onClick={handleSubmit} >
                    Submit
        </Button>
            </span>
        </>
    )
}

export default EducationForm;