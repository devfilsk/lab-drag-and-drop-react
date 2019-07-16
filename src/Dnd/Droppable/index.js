import React from 'react';
import PropTypes from  'prop-types';

const Droppable = (props) => {

    const drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('task');
        e.target.appendChild(document.getElementById(data))
        // console.log("serviço: ", e.target.id)
        let id = e.dataTransfer.getData("task");
        console.log("NOVO ID: ",id)
        document.getElementById(id).classList.remove('draggin-item')

    };

    const allowDrop = (e) => {
        e.preventDefault();
        document.getElementsByName('draggin-item')
        console.log("Status do serviço: ", e.target)
    };

    return (
      <div id={props.id} onDrop={drop} onDragOver={allowDrop} style={props.style}>
          {props.children}
      </div>
    );
};

// Droppable.propTypes = {
//     id: PropTypes.string,
//     style: PropTypes.object,
//     children: PropTypes.node
// };

export default Droppable;
