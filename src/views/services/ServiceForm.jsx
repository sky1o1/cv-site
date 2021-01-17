import React from 'react';
import { useFormik } from 'formik';
import {useDispatch} from 'react-redux';
import validationSchema from './validationSchema/validationSchema';
import {setServices} from '../../store/reducer/services';
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

const initialValues = {
    service: '',
    description: ''
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row-reverse',
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
    },
});

function ServiceForm({removeService, id}) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            dispatch(setServices(values))
        },
        validationSchema
    })

    const handleSubmit = () => {
        formik.submitForm()
    }


    return (

                    <Grid className={classes.gridList} list xs={3}>
                        <Card className={classes.root} variant="outlined" >
                            <CardContent  >
                                <form>
                                    <TextField
                                        name='service'
                                        size='small'
                                        label="Service"
                                        variant="outlined"
                                        error={Boolean(formik.touched.service && formik.errors.service)}
                                        helperText={formik.touched.service && formik.errors.service}
                                        onChange={formik.handleChange}
                                    />
                                    <TextField
                                        multiline
                                        size='small'
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
                        </Card>
                        <span>
                            <Button variant="contained" type="button" color="secondary" onClick={() => removeService(id)} >
                                X
                             </Button>
                        </span>
                        <span>
                            <Button variant="contained" type="button" color="secondary" onClick={handleSubmit} >
                                Submit
                            </Button>
                        </span>
                    </Grid>

    )
}

export default ServiceForm;