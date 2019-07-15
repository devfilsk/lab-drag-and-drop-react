import React from 'react';

const Draggable = (props) => {

    const drag = (e) => {
        e.dataTransfer.setData('task', e.target.id)
        console.log('Serviço: ', e.target.id)
    }

    const noAllowDrop = (e) => {
        e.stopPropagation();
    }

    return (
      <div id={props.id} draggable={true} onDragStart={drag} onDragOver={noAllowDrop} style={props.style}>
          {props.children}
      </div>
    );
}

export default Draggable;
