import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ServiceForm from './ServiceForm';
import Footer from '../Footer';
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

function Services() {
    const classes = useStyles()
    const [formList, setFormList] = useState([1,1])
    const colors = useSelector(state => state.colors)
    
    function handleAddExp() {
       setFormList(prevFormList => ([
           ...prevFormList, uuidv4()
           ]))
    }

    function handleRemoveExp(id) {
        const index = formList.indexOf(id);
        const formListClone = [...formList]
        formListClone.splice(index, 1)
        setFormList(formListClone)
    }

    console.log(formList)
   
    return (
        <>
        <div id="lonon-main">

            <div class="lonon-services">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12"> <span style={{color: colors.headColor}} class="heading-meta style-1">What We Do</span>
                            <h2 class="lonon-heading animate-box" style={{color: colors.headColor}} data-animate-effect="fadeInLeft">Services</h2> </div>
                    </div>
                    <div class="row">
                <Button variant="contained" style={{ display: 'none' }} type="button" color="primary"  >
                    +
                        </Button>
                {/* <Card onClick={handleAddExp} className={classes.root} variant="outlined">
                    <CardContent  >
                        <img src='/static/images/plus.jpg' />
                    </CardContent>
                </Card> */}
                <div class="col-md-4">
                            <div class="lonon-feature animate-box" data-animate-effect="fadeInLeft" onClick={handleAddExp} >
                                <div class="lonon-icon"> <span class="et-shield font-35px"></span> </div>
                                <div class="lonon-text">
                                    <img src='/static/images/plus.jpg' style={{width:105}}/></div>
                            </div>
                </div>
          

                   { formList.map(formId => (
                        <ServiceForm key={formId} removeService={handleRemoveExp} id={formId} />
                    ))}
                 </div>
               
                </div>
            </div>

           
            <Footer />
        </div>
        </>
    )
}

export default Services;