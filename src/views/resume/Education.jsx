import React, { useState,useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Grid } from '@material-ui/core';
import EducationForm from './forms/EducationForm';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

function Education({color}) {
    const [formList, setFormList] = useState([uuidv4(), uuidv4()])
    const [dragging, setDragging] = useState(false)
    const dragItem = useRef()
    const dragNode = useRef()

   function handleAdd() {
    setFormList(prevFormList => ([
        ...prevFormList, uuidv4()
        ]))
 }
    function handleRemove(id) {
    const index = formList.indexOf(id);
    const updatedFormClone = [...formList];
    updatedFormClone.splice(index, 1)
    setFormList(updatedFormClone)
    }

    const handleDragEnd = (event, params) => {
        setDragging(false)
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
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
        <div class="lonon-lonon-timeline">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12" > <span style={{color: color.headColor}} class="heading-meta style-1">Resume</span>
                        <h2 class="lonon-heading animate-box" style={{color: color.headColor}} data-animate-effect="fadeInLeft">Education</h2> </div>
                </div>
                <div class="row">
                    <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                    <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="characters" >
                                {(provided) => (
                                    <Grid {...provided.droppableProps} ref={provided.innerRef} xs={12}>
                                        {formList.map((formId, index) => (

                                            <Draggable key={formId} draggableId={formId} index={index}>
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <EducationForm key={formId} id={formId} removeEdu={handleRemove} color={color} />
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
                        <div style={{
                                display: "flex",
                                justifyContent: "flex-end",
                            }}>
                                <Button startIcon={<AddCircleOutlineOutlinedIcon />} variant="contained" size="small" type="button" color="primary" onClick={handleAdd}>
                                   Add Education
                                </Button>
                            </div>

                </div>
                    </div>
            </div>
        </div>
    )
}

export default Education;
