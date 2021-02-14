import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../Footer';
import ProjectForm from './ProjectForm';
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
    const [formList, setFormList] = useState([1,2])
    const colors = useSelector(state => state.colors)

    function handleAdd() {
        setFormList(prevList => ([
            ...prevList, uuidv4()
        ]))
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
                        <div class="row">
                                <Button variant="contained" style={{ display: 'none' }} type="button" color="primary" >
                                    +
                        </Button>
                                {/* <Card onClick={() => handleAdd()} className={classes.root} variant="outlined">
                                    <CardContent >
                                        <img src='/static/images/plus.jpg' />
                                    </CardContent>
                                </Card> */}
                                 <div class="col-md-4">
                            <div class="lonon-feature animate-box" data-animate-effect="fadeInLeft" onClick={handleAdd} >
                                <div class="lonon-icon"> <span class="et-shield font-35px"></span> </div>
                                <div class="lonon-text">
                                    <img src='/static/images/plus.jpg' style={{width:105}}/></div>
                            </div>
                </div>
                { formList.map(formId => (
                        <ProjectForm removeProject={handleRemove} />
                    ))}
                            
                </div>
                </div>

            </div>
            <Footer />
        </div>

        </>
    )
}
export default Projects;