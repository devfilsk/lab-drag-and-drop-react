import React from 'react';
import './style.css';

const Draggable = (props) => {

    const drag = (e) => {
        e.dataTransfer.setData('task', e.target.id)
        // e.dataTransfer.effectAllowed='copy';
        // console.log('Serviço: ', e.target.id)
    };

    const dragStart = (e) => {
        e.preventDefault();

        let id = e.target.id;
        let element = document.getElementById(id);
        element.classList.add('draggin-item')
        // let cardZone = document.getElementById('card-zone');
        // cardZone.addEventListener('dragenter', (e) => {
        //     console.log("Drag Enter")
        //     // if(e.target.className === 'alert-box'){
        //     // }
        // }, false )
        //
        // cardZone.addEventListener('dragleave', function (e) {
        //     console.log("Deagleave")
        // })
    };

    const noAllowDrop = (e) => {
        e.stopPropagation();
        // document.getElementsByName('draggin-item')
        e.target.classList.remove('draggin-item')
        // console.log("Efeitos : ", e.dataTransfer)
        // document.getElementById(id).classList.remove('draggin-item')
        // e.dataTransfer.dropEffect = 'copy';
    };

    return (
      <div id={props.id} draggable={true} onDrag={dragStart} onDragStart={drag} onDragOver={noAllowDrop} style={props.style}>
          {props.children}
      </div>
    );
}

export default Draggable;
