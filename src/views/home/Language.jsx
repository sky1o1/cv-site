import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import LanguageForm from './forms/LanguageForm';
import { Button, Grid } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';


const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

function Language({ color }) {
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
                    <div class="col-md-12"> <span style={{ color: color.headColor }} class="heading-meta style-1">Expertise</span>
                        <h2 class="lonon-heading animate-box" style={{ color: color.headColor }} data-animate-effect="fadeInLeft">Language</h2> </div>
                </div>
                <form>
                    <div class="row">
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
                                                        <LanguageForm ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} id={formId} removeLanguage={handleRemove} />
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
                    </div>
                    <div style={{
                                display: "flex",
                                justifyContent: "flex-end",
                            }}>
                                <Button startIcon={<AddCircleOutlineOutlinedIcon />} variant="contained" size="small" type="button" color="primary" onClick={handleAdd}>
                                Add Language
                                </Button>
                            </div>

                </form>
            </div>
        </div>
    )
}

export default Language;