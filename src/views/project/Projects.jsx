import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../Footer';
import {setProjects} from '../../store/reducer/projects';
import validationSchema from './validationSchema/validationSchema';
import {
    makeStyles,
    TextField,
    Card,
    CardActions,
    CardContent,
    Button,
    Grid,
    Typography,
    InputAdornment,
    Slider,
} from '@material-ui/core';
import { useFormik } from 'formik';


const useStyles = makeStyles({
    root: {
        width: 200,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    container: {
        paddingLeft: 20,
    },
    gridList: {
        paddingTop: 20,
    }
});

const initialValues = {
    projectName: '',
    description: '',
}

function Projects() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const wrapperRef = useRef(null)
    const [fields, setFields] = useState([{ value: null }]);
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log('entered')
            dispatch(setProjects(values))
        },
        validationSchema
    })
    const handleSubmit = async () => {
        await formik.submitForm()
    }

    function handleAddExp() {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
    }

    function handleRemoveExp(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }

   
    return (
        <>
        <div id="lonon-main">

            <div class="lonon-services">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12"> <span class="heading-meta style-1">Take a Look at</span>
                            <h2 class="lonon-heading animate-box" data-animate-effect="fadeInLeft">My Projects</h2> </div>
                    </div>
                <Grid className={classes.container} container spacing={3}>
                    <Grid className={classes.gridList}  list xs={3}>
                        <Button variant="contained" style={{display: 'none'}} ref={wrapperRef} type="button" color="primary" onClick={() => handleAddExp()}>
                            +
                        </Button>
                            <Card className={classes.root} variant="outlined">
                            <CardContent onClick={() => wrapperRef.current.click()} >
                         <img src='/static/images/plus.jpg'/>
                            </CardContent>
                            </Card>
                            </Grid>

                            <form>
                    {fields.map((field, idx) => {
                        return (
                           
                            <Grid className={classes.gridList} list xs={3} key={`${field}-${idx}`}>
                                        <Card className={classes.root} variant="outlined">
                                                <CardContent  >
                                             <TextField 
                                             size='small' 
                                             name='projectName' 
                                             label="Project Name" 
                                             variant="outlined" 
                                             error={Boolean(formik.touched.projectName && formik.errors.projectName)}
                                             helperText={formik.touched.projectName && formik.errors.projectName}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.projectName}
                                             onChange={formik.handleChange}
                                             />
                                             <TextField 
                                             multiline size='small' 
                                             rows={4} 
                                             name='description' 
                                             label="Description" 
                                             variant="outlined" 
                                             error={Boolean(formik.touched.description && formik.errors.description)}
                                             helperText={formik.touched.description && formik.errors.description}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.description}
                                             onChange={formik.handleChange}
                                             />
                                                </CardContent>
                                        </Card>
                                <span>
                                    <Button  variant="contained" type="button" color="secondary" onClick={() => handleRemoveExp(idx)}>
                                        X
                                    </Button>
                                </span>
                                <span>
                                    <Button  variant="contained" type="button" color="secondary" onClick={handleSubmit}>
                                       Submit
                                    </Button>
                                </span>
                            </Grid>
                            
                        );
                    })}
                                             </form>
                    </Grid>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Projects;
