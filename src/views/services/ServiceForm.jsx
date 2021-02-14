import React from 'react';
import { useFormik } from 'formik';
import {useDispatch} from 'react-redux';
import {getRequest, postRequest} from '../../services/axios.config';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
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
        flexDirection: 'reverse',
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

// const theme = createMuiTheme({
//     overrides: {
//       MuiTextField:{
//           root:{
//                 textDecoration: 'none'
//           }
//       }
//     }
// });

function ServiceForm({removeService, id, index}) {
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

<MuiThemeProvider >
                        <div class="col-md-4 col-sm-6">
                            <div class="lonon-feature animate-box" data-animate-effect="fadeInLeft">
                                <div class="lonon-icon"> <span class="et-shield font-35px"></span> </div>
                                <div class="lonon-text">
                                <TextField
                                        name='service'
                                        multiline
                                        size='small'
                                        label="Service"
                                        variant="outlined"
                                        error={Boolean(formik.touched.service && formik.errors.service)}
                                        helperText={formik.touched.service && formik.errors.service}
                                        onChange={formik.handleChange}
                                        style={{marginBottom: 12}}
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
                                </div>
                            </div>
                        </div>
                     

       
    {/* <Card className={classes.root} variant="outlined" >
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
                            <Button 
                            variant="contained" 
                            type="button" 
                            color="secondary" 
                            onClick={handleSubmit} 
                            disabled={!formik.isValid || formik.isSubmitting}
                            >
                                Submit
                            </Button>
                        </span>
                         */}
        </MuiThemeProvider>
               </>         
            

    )
}

export default ServiceForm;