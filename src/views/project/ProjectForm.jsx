import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import validationSchema from './validationSchema/validationSchema';
import { setProjects } from '../../store/reducer/projects';
import {
    makeStyles,
    TextField,
    Card,
    CardContent,
    Button,
    Grid,
} from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        width: 200,
        flexDirection: 'row-reverse',
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
        flexDirection: 'row-reverse',
    }
});

const initialValues = {
    projectName: '',
    description: '',
}

function ProjectForm({removeProject, id}) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            dispatch(setProjects(values))
        },
        validationSchema
    })

    const handleSubmit = () => {
        formik.submitForm()
    }

    return (
        <Grid list className={classes.gridList} list xs={3}>
            <Card className={classes.root} variant="outlined">
                <CardContent  >
                    <form>
                        <TextField
                            size='small'
                            name='projectName'
                            label="Project Name"
                            variant="outlined"
                            error={Boolean(formik.touched.projectName && formik.errors.projectName)}
                            helperText={formik.touched.projectName && formik.errors.projectName}
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
                            onChange={formik.handleChange}
                        />
                    </form>
                </CardContent>
                <span>
                    <Button variant="contained" type="button" color="secondary" 
                    onClick={() => removeProject(id)}
                    >
                        X
    </Button>
                </span>
                <span>
                    <Button variant="contained" type="button" color="secondary" onClick={handleSubmit}>
                        Submit
    </Button>
                </span>
            </Card>

        </Grid>
    )
}

export default ProjectForm;