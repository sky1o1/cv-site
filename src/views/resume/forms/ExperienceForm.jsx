import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import validationSchema from '../validationSchema/validationSchema';
import {setExperience} from '../../../store/reducer/experience';
import {
    TextField,
    Button
} from '@material-ui/core';


const initialValues = {
    company: '',
    post: '',
    description: '',
    startYear: '',
    endYear: '',
}



function ExperienceForm({id, removeExp}) {
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
                                            <TextField id="standard-basic" onChange={formik.handleChange} name='company' label="Company" />
                                            </h5>
                                            <h4>
                                            <TextField id="standard-basic" onChange={formik.handleChange} name='post' label="Post" />
                                            </h4>
                                            <p>
                                            <TextField
                                             multiline 
                                             size='small'
                                             rows={5}
                                             name='description' 
                                             label="Description" 
                                             onChange={formik.handleChange}
                                             />
                                            </p>
                                        </div>
                                    </li>
                                </ul>
            <span>
                <Button variant="contained" type="button" color="secondary" onClick={() => removeExp(id)}>
                    X
        </Button>
            </span>
            <span>
                <Button variant="contained" color="secondary" onClick={handleSubmit} >
                    Submit
        </Button>
            </span>
        </>
    )
}

export default ExperienceForm;