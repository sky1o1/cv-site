import React, { useState, Component, createContext } from "react";
import { connect, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import sampleItems from './sampleItems';

function move(array, oldIndex, newIndex) {
  if (newIndex >= array.length) {
    newIndex = array.length - 1;
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
}

function moveElement(array, index, offset) {
  const newIndex = index + offset;

  return move(array, index, newIndex);
}

const GridContext = createContext({ items: [] });

export function GridProvider(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
      // items: [1,2],
      // moveItem: this.moveItem,
      // setItems: this.setItems
  //   };
  //   console.log('list', this.list)
  // }
  const gridArray = useSelector(state => state.gridList)
  console.log('---------list-----------',gridArray)

  const [itemState, setItemState] = useState({
    items: [1,2],
    moveItem ,
    setItems 
  })


  const setItems = items => setItemState({ items });

  const moveItem = (sourceId, destinationId) => {
    const sourceIndex = itemState.items.findIndex(
      item => item.id === sourceId
    );
    const destinationIndex = itemState.items.findIndex(
      item => item.id === destinationId
    );

    // If source/destination is unknown, do nothing.
    if (sourceId === -1 || destinationId === -1) {
      return;
    }

    const offset = destinationIndex - sourceIndex;

    setItemState(state => ({
      items: moveElement(state.items, sourceIndex, offset)
    }));
  };

    return (
      <GridContext.Provider value={itemState}>
        {props.children}
      </GridContext.Provider>
    );
  

}

// const mapStateToProps = (state) => ({
//   list: state
//   // return(
//   //   console.log('state console',state)
//   // )
// })
// function mapStateToProps(state) {
//   const counter = state
//   return (
//     console.log(counter)
//  ) ;
// }

// mapStateToProps()

// export default connect(mapStateToProps,null)(GridContext);

// export default connect(mapStateToProps, null)(withRouter(Club_description));
 export default GridContext;
