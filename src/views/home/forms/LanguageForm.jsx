import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { getRequest, postRequest } from '../../../services/axios.config';
import validationSchema from '../validationSchema/validationSchemaLanguage';
import { setLanguage } from '../../../store/reducer/language';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components';
import {
    makeStyles,
    TextField,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    Input,
    Button,
    Grid
} from '@material-ui/core';

const initialValues = {
    language: 'Beginner',
    listening: 'Beginner',
    writing: 'Beginner',
    speaking: 'Beginner',
    reading: 'Beginner'
}

const theme = createMuiTheme({
    overrides: {
        MuiSelect: {
            root: {
                padding: '10px'
            }
        }
    }
});

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    iconContainer: {
        "&:hover $icon": {
            color: 'black',
            transition: '1s',
        },
    },
    icon: {
        color: 'grey',
    },
    autofield: {
        padding: 13
    },
}));

function LanguageForm({ id, removeLanguage, colors }) {
    const classes = useStyles();
    const dispatch = useDispatch()
    console.log(colors)
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values)
            dispatch(setLanguage(values))

            // async function fetchApi() {
            //     try{
            //         await postRequest('/api/auth/add-language',{

            //         });
            //     }catch(err){
            //         console.log(err)
            //     }
            // }
            //  fetchApi()
        },
        validationSchema
    })

    const handleSubmit = async () => {
        await formik.submitForm()
    }

    // const handleChange = (event) => {
    //     const name = event.target.name
    //     const value = event.target.value
    //     formik.setFieldValue(name, value)
    //     console.log(event.target.value)
    //     console.log(event.target.name)
    // }
    const TimeLine = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-right: 20px;
    &:hover{
        border: 1px solid grey;
        border-radius: 20px;
    }
    &:active{
        border: 1px solid grey;
        border-radius: 20px;
    }
    &:before{
        content: "";
  position: absolute;
  width: 1px;
  left: 10%;
  top: 0;
  bottom: 0;
  background-color: #ececec;
    }
    `;

    const Content = styled.div`
    padding: 0 50px;
  position: relative;
    `;

    const Date = styled.div`
    margin-left: -16px;
    position: relative;
  display: inline-block;
  padding: 0 12px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-bottom: 15px;
  color: #fff;
  background-color: #101010;
  /* height: 22px; */
  line-height: 22px;
  margin-left: -12px;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
    `;


    const ButtonA = styled.div`
            position: absolute;
            background-color:#000;
            left: 0;
            top: 8px;
            width: 20px;
            height: 20px;
            -webkit-transition: all .3s ease;
            transition: all .3s ease;
            z-index: 100;
            margin-left: -10px;
            border-radius: 50%;
            border: 0;
            ${TimeLine} :hover &{
                background-color:${props => props.primary ? "palevioletred" : `${colors.bgColor}`};
            }
            ${TimeLine} :hover &{
                background-color:${props => props.primary ? "palevioletred" : `${colors.bgColor}`};
            }
            `;

    return (
        <MuiThemeProvider theme={theme}>
            <div class="row">
                <TimeLine >
                    <li >
                        <div>
                            <ButtonA >

                            </ButtonA>
                            <form>
                                <TextField
                                    placeholder="Language"
                                    multiline
                                    rowsMax={2}
                                    name='language'
                                    style={{
                                        backgroundColor: colors.bgColor
                                    }}
                                    className={Date}
                                    inputProps={{ style: { color: '#fff', fontSize: 15, fontWeight: '500' } }}
                                    InputLabelProps={{ style: { color: '#fff' } }}
                                    error={Boolean(formik.touched.language && formik.errors.language)}
                                    helperText={formik.touched.language && formik.errors.language}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                                <Grid container>
                                    <Grid list xs>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel>Reading</InputLabel>
                                            <Select
                                                onChange={formik.handleChange}
                                                label="Reading"
                                                defaultValue={'Beginner'}
                                                name='reading'
                                                className={`${classes.textField} without-padding`}
                                            >
                                                <MenuItem value={'Beginner'}>Beginner</MenuItem>
                                                <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
                                                <MenuItem value={'Expert'}>Expert</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid list xs>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel>Writing</InputLabel>
                                            <Select
                                                onChange={formik.handleChange}
                                                label="Writing"
                                                defaultValue={'Beginner'}
                                                name='writing'
                                            >
                                                <MenuItem value={'Beginner'}>Beginner</MenuItem>
                                                <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
                                                <MenuItem value={'Expert'}>Expert</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid list xs>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel>Speaking</InputLabel>
                                            <Select
                                                onChange={formik.handleChange}
                                                label="Speaking"
                                                defaultValue={'Beginner'}
                                                name='speaking'
                                            >
                                                <MenuItem value={'Beginner'}>Beginner</MenuItem>
                                                <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
                                                <MenuItem value={'Expert'}>Expert</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid list xs>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel>Listening</InputLabel>
                                            <Select
                                                onChange={formik.handleChange}
                                                label="Listening"
                                                defaultValue={'Beginner'}
                                                name='listening'
                                            >
                                                <MenuItem value={'Beginner'}>Beginner</MenuItem>
                                                <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
                                                <MenuItem value={'Expert'}>Expert</MenuItem>
                                            </Select>
                                        </FormControl>

                                    </Grid>
                                    <Grid list xs>
                                        <Tooltip title="Delete" placement="right-start">
                                            <IconButton
                                                classes={{
                                                    root: classes.iconContainer
                                                }}
                                                onClick={() => removeLanguage(id)} >
                                                <DeleteOutlineRoundedIcon style={{ fontSize: 18 }} className={classes.icon} />
                                            </IconButton>
                                        </Tooltip>
                                        {/* <span>
                                            <Button
                                                onClick={handleSubmit}
                                                variant="contained"
                                                type="button"
                                                color="primary"
                                                disabled={!formik.isValid || formik.isSubmitting}
                                            >
                                                Submit
        </Button>
                                        </span> */}
                                    </Grid>

                                </Grid>
                            </form>
                        </div>
                    </li>
                </TimeLine>
            </div>
        </MuiThemeProvider>
    )
}

export default LanguageForm;