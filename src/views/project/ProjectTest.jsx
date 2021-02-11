// import React, {useState, useEffect} from 'react';
// import styled, { css } from 'styled-components';

// function Draggable() {

//     const [dragState, setDragState] = useState({
//         isDragging: false,

//         originalX: 0,
//         originalY: 0,
    
//         translateX: 0,
//         translateY: 0,
    
//         lastTranslateX: 0,
//         lastTranslateY: 0
//     })



// const handleMouseDown = ({ clientX, clientY }) => {
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseup', handleMouseUp);

//     if (onDragStart) {
//       onDragStart();
//     }

//     setDragState(prevState => ({
//         ...prevState, 
//         originalX: clientX,
//       originalY: clientY,
//       isDragging: true
//     }))
    

//   const handleMouseMove = ({ clientX, clientY }) => {
//     const { isDragging } = dragState;
//     const { onDrag } = props;

//     if (!isDragging) {
//       return;
//     }

//     setDragState(prevState => ({
//       translateX: clientX - prevState.originalX + prevState.lastTranslateX,
//       translateY: clientY - prevState.originalY + prevState.lastTranslateY
//     }), () => {
//       if (onDrag) {
//         onDrag({
//           translateX: dragState.translateX,
//           translateY: dragState.translateY
//         });
//       }
//     });
//   };

//   const handleMouseUp = () => {
//     window.removeEventListener('mousemove', handleMouseMove);
//     window.removeEventListener('mouseup', handleMouseUp);


//     setDragState(prevState => ({
//         ...prevState, 
//         originalX: 0,
//         originalY: 0,
//         lastTranslateX: dragState.translateX,
//         lastTranslateY: dragState.translateY,

//         isDragging: false
//     })),
//     () => {
//       if (props.onDragEnd) {
//         props.onDragEnd();
//       }
//     }
// }

// useEffect(() => {
//     window.removeEventListener('mousemove', handleMouseMove);
//     window.removeEventListener('mouseup', handleMouseUp);
// },[])
   
//     const { children } = props;
//     const { translateX, translateY, isDragging } = dragState;

//     return (
//       <Container
//         onMouseDown={this.handleMouseDown}
//         x={translateX}
//         y={translateY}
//         isDragging={isDragging}
//       >
//         {children}
//       </Container>
//     );
// }
// }

// const Container = styled.div.attrs({
//     style: ({ x, y }) => ({
//       transform: `translate(${x}px, ${y}px)`
//     }),
//   })`
//     cursor: grab;
    
//     ${({ isDragging }) =>
//     isDragging && css`
//       opacity: 0.8;
//       cursor: grabbing;
//     `};
//   `;

//   export default Draggable;

import React from 'react';
import styled, { css } from 'styled-components';

export default class Draggable extends React.Component {
  state = {
    isDragging: false,

    originalX: 0,
    originalY: 0,

    translateX: 0,
    translateY: 0,

    lastTranslateX: 0,
    lastTranslateY: 0
  };

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown = ({ clientX, clientY }) => {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);

    if (this.props.onDragStart) {
      this.props.onDragStart();
    }

    this.setState({
      originalX: clientX,
      originalY: clientY,
      isDragging: true
    });
  };

  handleMouseMove = ({ clientX, clientY }) => {
    const { isDragging } = this.state;
    const { onDrag } = this.props;

    if (!isDragging) {
      return;
    }

    this.setState(prevState => ({
      translateX: clientX - prevState.originalX + prevState.lastTranslateX,
      translateY: clientY - prevState.originalY + prevState.lastTranslateY
    }), () => {
      if (onDrag) {
        onDrag({
          translateX: this.state.translateX,
          translateY: this.state.translateY
        });
      }
    });
  };

  handleMouseUp = () => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);

    this.setState(
      {
        originalX: 0,
        originalY: 0,
        lastTranslateX: this.state.translateX,
        lastTranslateY: this.state.translateY,

        isDragging: false
      },
      () => {
        if (this.props.onDragEnd) {
          this.props.onDragEnd();
        }
      }
    );
  };

  render() {
    const { children } = this.props;
    const { translateX, translateY, isDragging } = this.state;

    return (
      <Container
        onMouseDown={this.handleMouseDown}
        x={translateX}
        y={translateY}
        isDragging={isDragging}
      >
        {children}
      </Container>
    );
  }
}

const Container = styled.div.attrs({
  style: ({ x, y }) => ({
    transform: `translate(${x}px, ${y}px)`
  }),
})`
  cursor: grab;
  
  ${({ isDragging }) =>
  isDragging && css`
    opacity: 0.8;
    cursor: grabbing;
  `};
`;
