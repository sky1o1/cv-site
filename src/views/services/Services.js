import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ServiceForm from './ServiceForm';
import Footer from '../Footer';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
        display: "flex",
    },
});

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

function Services() {
    const classes = useStyles()
    const [formList, setFormList] = useState([])
    const colors = useSelector(state => state.colors)
    const greyGradient = colors.bgColor =='#555' ? 'greyGrad' : '';
    const blackGradient = colors.bgColor =='#000' ? 'blackGrad' : '';
    const whiteGradient = colors.bgColor =='#fff' ? 'whiteGrad' : '';
    const blueGradient = colors.bgColor =='#0000ff' ? 'blueGrad' : '';
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

    function onDragEnd(result) {
        console.log('run')
        if (!result.destination) {
            return;
        }

        const items = reorder(
            formList,
            result.source.index,
            result.destination.index
        );

        setFormList(items);
    }


    return (
        <>
            <div id="lonon-main">

                <div class="lonon-services">
                    <div class="container-fluid">
                        <div class="row">
                        <div class="col-md-12"> <span style={{color: colors.headColor}} class="heading-meta style-1">What We Do</span>
                            <h2 class="lonon-heading animate-box" style={{color: colors.headColor}} data-animate-effect="fadeInLeft">Services</h2> </div>
                        </div>
                        <Grid className={classes.container} container spacing={3}>
                            <Grid className={classes.gridList} list xs={3}>
                                <Button variant="contained" style={{ display: 'none' }} type="button" color="primary"  >
                                    +
                        </Button>
                                <Card onClick={handleAddExp} className={classes.root} variant="outlined">
                                    <CardContent  >
                                        <img src='/static/images/plus.jpg' />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable droppableId="characters" direction='horizontal'>
                                    {(provided) => (
                                        <Grid {...provided.droppableProps} ref={provided.innerRef} list className={classes.gridList} xs={3}>
                                            {formList.map((formId, index) => (
                                                <Draggable key={formId} draggableId={formId} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <ServiceForm key={formId} index={index} removeService={handleRemoveExp} id={formId} />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                            }

                                            {provided.placeholder}
                                        </Grid>
                                    )}
                                </Droppable>
                            </DragDropContext>
                            <Grid />
                            <Grid />
                        </Grid>
                    </div>
                </div>


                <Footer />
            </div>
        </>
    )
}

export default Services;