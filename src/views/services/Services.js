// import React, { useState, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
// import ServiceForm from './ServiceForm';
// import Footer from '../Footer';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import {
//     makeStyles,
//     TextField,
//     Card,
//     CardActions,
//     CardContent,
//     Button,
//     Grid,
//     Typography,
//     InputAdornment,
//     Slider,
// } from '@material-ui/core';


// const useStyles = makeStyles({
//     root: {
//         display: 'flex',
//         flexDirection: 'row-reverse',
//         width: 200,
//     },
//     title: {
//         fontSize: 14,
//     },
//     pos: {
//         marginBottom: 12,
//     },
//     container: {
//         paddingLeft: 20,
//     },
//     gridList: {
//         paddingTop: 20,
//         display: "flex",
//     },
// });

// const reorder = (list, startIndex, endIndex) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);

//     return result;
// };

// function Services() {
//     const classes = useStyles()
//     const [formList, setFormList] = useState([])
//     const [dragging, setDragging] = useState(false)
//     const colors = useSelector(state => state.colors)
//     const dragItem = useRef()
//     const dragNode = useRef()

//     function handleAddExp() {
//         setFormList(prevFormList => ([
//             ...prevFormList, uuidv4()
//         ]))
//     }

//     function handleRemoveExp(id) {
//         const index = formList.indexOf(id);
//         const formListClone = [...formList]
//         formListClone.splice(index, 1)
//         setFormList(formListClone)
//     }

//     const handleDragStart = (event, params) => {
//         dragItem.current = params;
//         dragNode.current = event.currentTarget;
//         dragNode.current.addEventListener('dragend', handleDragEnd)
//         setTimeout(() => {
//             setDragging(true)
//         })
//     }

//     const handleDragEnd = (event, params) => {
//         setDragging(false)
//         dragNode.current.removeEventListener('dragend', handleDragEnd);
//         dragItem.current = null;
//         dragNode.current = null;
//     }

//     const handleDragEnter = (event, params) => {
//         const currentItem = dragItem.current;
//         if(event.currentTarget !== dragNode.current){
//             setFormList(oldList => {
//                 let newList = JSON.parse(JSON.stringify(oldList));
//                 newList[params.index].items.splice(params.index, 0, newList[currentItem.index].items.splice(currentItem.index, 1)[0])
//                 dragItem.current = params
//                 return newList
//             })
//         }
//     }

//     function onDragEnd(result) {
//         console.log('run')
//         if (!result.destination) {
//             return;
//         }

//         const items = reorder(
//             formList,
//             result.source.index,
//             result.destination.index
//         );      

//         setFormList(items);
//     }


//     return (
//         <>
//             <div id="lonon-main">

//                 <div class="lonon-services">
//                     <div class="container-fluid">
//                         <div class="row">
//                         <div class="col-md-12"> <span style={{color: colors.headColor}} class="heading-meta style-1">What We Do</span>
//                             <h2 class="lonon-heading animate-box" style={{color: colors.headColor}} data-animate-effect="fadeInLeft">Services</h2> </div>
//                         </div>
//                         <Grid className={classes.container} container spacing={3}>
//                             <Grid className={classes.gridList} list xs={3}>
//                                 <Button variant="contained" style={{ display: 'none' }} type="button" color="primary"  >
//                                     +
//                         </Button>
//                                 <Card onClick={handleAddExp} className={classes.root} variant="outlined">
//                                     <CardContent  >
//                                         <img src='/static/images/plus.jpg' />
//                                     </CardContent>
//                                 </Card>
//                             </Grid>
//                             <DragDropContext onDragEnd={onDragEnd}>
//                                 <Droppable droppableId="characters" direction='horizontal'>
//                                     {(provided) => (
//                                         <Grid {...provided.droppableProps} ref={provided.innerRef} list className={classes.gridList} xs={3}>
//                                             {formList.map((formId, index) => (
//                                                 <Draggable key={formId} draggableId={formId} index={index}>
//                                                     {(provided) => (
//                                                         <div
//                                                             ref={provided.innerRef}
//                                                             {...provided.draggableProps}
//                                                             {...provided.dragHandleProps}
//                                                         >
//                                                             <ServiceForm key={formId} index={index} removeService={handleRemoveExp} id={formId} />
//                                                         </div>
//                                                     )}
//                                                 </Draggable>
//                                             ))
//                                             }

//                                             {provided.placeholder}
//                                         </Grid>
//                                     )}
//                                 </Droppable>
//                             </DragDropContext>
//                             <Grid />
//                             <Grid />
//                         </Grid>
//                     </div>
//                 </div>


//                 <Footer />
//             </div>
//         {/* <div className='drag-n-drop'>
//         {formList.map((formId, index) => (


//             <div
//              draggable
//              onDragStart={(event) => {handleDragStart(event, index)}} 
//             onDragEnter={dragging? (event) => {handleDragEnter(event, index)}:null}
//              className='dnd-group'
//              >
//             <ServiceForm key={formId} index={index} removeService={handleRemoveExp} id={formId} />

//             </div>
//                ))
//             }
//         </div> */}

//         </>
//     )
// }

// export default Services;

import React, { useState, useRef, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {setServiceList} from '../../store/reducer/gridList';
import ServiceForm from './ServiceForm';
import Footer from '../Footer';
import DragItem from "./dragNdrop/DragItem";
import { Grid, GridImage, GridItem } from "./dragNdrop/Grid";
import GridContext from "./dragNdrop/GridContext";
import {
    makeStyles,
    Card,
    CardContent,
    Button,
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


function Service() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [formList, setFormList] = useState([])
    const colors = useSelector(state => state.colors)
    const { items, moveItem } = useContext(GridContext);

    function handleAddExp() {
        setFormList(prevFormList => ([
            ...prevFormList, uuidv4()
        ]))
        console.log('entered')
        console.log(formList)
        localStorage.setItem('gridList',  JSON.stringify(formList))
        dispatch(setServiceList(formList))
    }

    function handleRemoveExp(id) {
        const index = formList.indexOf(id);
        const formListClone = [...formList]
        formListClone.splice(index, 1)
        setFormList(formListClone)
    }

    return (
        <>
            <div id="lonon-main">

                <div class="lonon-services">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12"> <span style={{ color: colors.headColor }} class="heading-meta style-1">What We Do</span>
                                <h2 class="lonon-heading animate-box" style={{ color: colors.headColor }} data-animate-effect="fadeInLeft">Services</h2> </div>
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

                            <Grid>
                                {items.map(item => (
                                    <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
                                        <GridItem>
                                            <GridImage >
                                            <ServiceForm key={item.id}  removeService={handleRemoveExp} id={item.id} />
                                            </GridImage>
                                        </GridItem>
                                    </DragItem>
                                ))}
                            </Grid>
{/* 
                            <Grid>
                                {formList.map((formId, index) => (
                                    <DragItem key={formId} id={formId} onMoveItem={moveItem}>
                                        <GridItem>
                                            <GridImage src={item.src}>
                                                <ServiceForm key={formId} index={index} removeService={handleRemoveExp} id={formId} />
                                            </GridImage>
                                        </GridItem>
                                    </DragItem>

                                    //   <ServiceForm key={formId} index={index} removeService={handleRemoveExp} id={formId} />

                                ))
                                }
                                {items.map(item => (
                                    <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
                                        <GridItem>
                                            <GridImage src={item.src}></GridImage>
                                        </GridItem>
                                    </DragItem>
                                ))} */}
                            </Grid>
                            <Grid />
                            <Grid />
                        {/* </Grid> */}
                    </div>
                </div>


                <Footer />
            </div>

        </>
    )
}

export default Service;