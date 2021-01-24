import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../Footer';
import { setProjects } from '../../store/reducer/projects';
import validationSchema from './validationSchema/validationSchema';
import ProjectForm from './ProjectForm';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragSource, DndProvider } from 'react-dnd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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


const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


function Projects() {
    const classes = useStyles()
    const [formList, setFormList] = useState([])
    const colors = useSelector(state => state.colors)

    const finalSpaceCharacters = [
        {
            id: 'gary',
            name: 'Gary Goodspeed',
        },
        {
            id: 'moon',
            name: 'Moon cake',
        },
        {
            id: 'kvn',
            name: 'Kvn robot',
        }
    ]

    const [characters, updateCharacters] = useState(finalSpaceCharacters);

    function handleAdd() {
        setFormList(prevList => ([
            ...prevList, uuidv4()
        ]))
    }

    function handleOnDragEnd(result) {
        console.log('-=-=-=-=-==-', result)
        const items = Array.from(characters);
        console.log('-=-=-=-=-==-', items)
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);

        if (!result.destination) return;
    }

    function handleRemove(id) {
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
        console.log(items)
    }

    return (
        <>
            <div id="lonon-main">
                <div class="lonon-services">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12"> <span style={{ color: colors.headColor }} class="heading-meta style-1">Take a Look at</span>
                                <h2 class="lonon-heading animate-box" style={{ color: colors.headColor }} data-animate-effect="fadeInLeft">My Projects</h2> </div>
                        </div>

                        <Grid className={classes.container} container spacing={3}>
                            <Grid list className={classes.gridList} xs={3}>
                                <Button variant="contained" style={{ display: 'none' }} type="button" color="primary" >
                                    +
                        </Button>
                                <Card onClick={() => handleAdd()} className={classes.root} variant="outlined">
                                    <CardContent >
                                        <img src='/static/images/plus.jpg' />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable droppableId="characters" >
                                    {(provided) => (
                                        <Grid {...provided.droppableProps} ref={provided.innerRef} list className={classes.gridList} list xs={3}>
                                            {formList.map((formId, index) => (
                                                <Draggable key={formId} draggableId={formId} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            // style={getItemStyle(
                                                            //     snapshot.isDragging,
                                                            //     provided.draggableProps.style
                                                            // )}
                                                            >
                                                        <ProjectForm removeProject={handleRemove} />
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
                        </Grid>
                </div>
                {/* <div>
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="characters">
                                {(provided) => (
                                    <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                        {characters.map(({ id, name, thumb }, index) => {
                                            return (
                                                <Draggable key={id} draggableId={id} index={index}>
                                                    {(provided) => (
                                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                            <div className="characters-thumb">
                                                                <img src={thumb} alt={`${name} Thumb`} />
                                                            </div>
                                                            <p>
                                                                {name}
                                                            </p>
                                                        </li>
                                                    )}
                                                </Draggable>

                                            );
                                        })}
                                        {provided.placeholder}
                                    </ul>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div> */}

            </div>
            <Footer />
        </div>

        </>
    )
}

export default Projects;
