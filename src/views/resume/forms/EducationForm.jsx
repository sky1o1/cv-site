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
    makeStyles,
    withStyles
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components';
import { TimeLine, Content } from '../../Styled components/style';
import { green } from '@material-ui/core/colors';

const initialValues = {
    university: '',
    degree: '',
    description: '',
    startYear: '',
    endYear: '',
    present: false
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

function EducationForm({ id, removeEdu, color }) {
    const classes = useClasses()
    const dispatch = useDispatch()

    const GreenCheckbox =withStyles
    ({
      root: {
        color: green[400],
        '&$checked': {
          color: green[600],
        },
      },
      checked: {},
    })((props) => <Checkbox color="default" {...props} />);

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
                        end_date: values.endyear,
                        present: values.present
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

    const ButtonA = styled.div`
    position: absolute;
    background-color:#555;
    left: 0;
    top: 8px;
    width: 20px;
    height: 20px;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    z-index: 100;
    margin-left: -10px;
    margin-top: 25px;
    border-radius: 50%;
    border: 0;
    ${TimeLine} :hover &{
        background-color:${props => props.primary ? "palevioletred" : `${color.bgColor}`};
        }
    ${TimeLine} :active &{
        background-color:${props => props.primary ? "palevioletred" : `${color.bgColor}`};
        }
`;

    return (
        <>
            <TimeLine>
                <li>
                    <Content>
                        <Grid container>
                        <ButtonA />
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
                                    {
                                        (!formik.values.present)?
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
                                    :
                                    <Grid item>
                                        <h2>Current</h2>
                                    </Grid>
                                    }
                                </Grid>
                                <FormControlLabel
                                    control={<GreenCheckbox checked={formik.values.present} onChange={formik.handleChange} name="present" />}
                                    label="I curently study here"
                                />
                                <Grid container spacing={2}>
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
                    </Content>
                </li>
            </TimeLine>
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