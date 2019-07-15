import React from 'react';
import PropTypes from  'prop-types';

const Droppable = (props) => {

    const drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('task');
        e.target.appendChild(document.getElementById(data))
        // console.log("serviço: ", e.target.id)

    };

    const allowDrop = (e) => {
        e.preventDefault();
        console.log("Status do serviço: ", e.target.id)
    }

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
