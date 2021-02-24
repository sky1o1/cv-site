import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { getRequest, postRequest } from '../../../services/axios.config';
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
import styled from 'styled-components';
import { TimeLine, Content } from '../../Styled components/style';


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

function ExperienceForm({ id, removeExp, colors }) {
    const dispatch = useDispatch()
    const classes = useClasses()
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            dispatch(setExperience(values))

            async function fetchApi() {
                try {
                    await postRequest('/api/auth/add-experience', {
                        company_name: values.company,
                        post: values.post,
                        description: values.description,
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
        background-color:${props => props.primary ? "palevioletred" : `${colors.bgColor}`};
        }
    ${TimeLine} :active &{
        background-color:${props => props.primary ? "palevioletred" : `${colors.bgColor}`};
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
                                            onBlur={formik.handleBlur}
                                            value={formik.values.startYear}
                                            onChange={formik.handleChange}
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
                                            onBlur={formik.handleBlur}
                                            value={formik.values.endYear}
                                            onChange={formik.handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <TextField
                                            style={{ width: 185 }}
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
                                    <Grid item>
                                        <TextField
                                            style={{ width: 185 }}
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
                                </Grid>
                            </Grid>
                            <Grid item xs sm>
                                <TextField
                                    multiline
                                    size="small"
                                    variant="outlined"
                                    rows={3}
                                    style={{ width: '100%' }}
                                    name='description'
                                    placeholder="Description"
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.description && formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}
                                    onBlur={formik.handleBlur}
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
                                        onClick={() => removeExp(id)} >
                                        <DeleteOutlineRoundedIcon style={{ fontSize: 18 }} className={classes.icon} />
                                    </IconButton>
                                </Tooltip>
                            </Grid>


                        </Grid>
                    </Content>
                </li>
            </TimeLine>
            <span>

            </span>
            <span>

            </span>
        </>
    )
}

export default ExperienceForm;