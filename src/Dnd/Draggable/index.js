import React from 'react';

const Draggable = (props) => {

    const drag = (e) => {
        e.dataTransfer.setData('task', e.target.id)
        // e.dataTransfer.effectAllowed='copy';
        console.log('Serviço: ', e.target.id)
    }

    const dragStart = (e) => {
        e.preventDefault();
        console.log("--->", e.target.id)
        let id = e.target.id;
        document.getElementById(id).classList.add('draggin-item')
        // e.target.classname = 'draggin-item';

    }

    const noAllowDrop = (e) => {
        e.stopPropagation();
        // document.getElementsByName('draggin-item')
        e.target.classList.remove('draggin-item')
        console.log("Efeitos : ", e.dataTransfer)
        // document.getElementById(id).classList.remove('draggin-item')
        // e.dataTransfer.dropEffect = 'copy';
    }

    return (
      <div id={props.id} draggable={true} onDrag={dragStart} onDragStart={drag} onDragOver={noAllowDrop} style={props.style}>
          {props.children}
      </div>
    );
}

export default Draggable;
