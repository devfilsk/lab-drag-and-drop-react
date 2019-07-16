import React from 'react';
import PropTypes from  'prop-types';
import './style.css';

const Droppable = (props) => {

    const drop = (e) => {
        // Prevenir o comportamento de abertura de link (Comportamento padrão do navegador para quando um elemento é solto)
        e.preventDefault();

        // Recuperando o ID do elemento que está sendo arrastado (id salvo durante o evento dragStart)
        const data = e.dataTransfer.getData('task');


        try{
            let elemento = document.getElementById(data);
            console.log("Append child", e.target)
            e.target.appendChild(elemento)
            document.getElementById(data).classList.remove('draggin-item');
        }catch (e) {
            console.error("não foi possível completar o Drop");
            console.error("Erro: ", e.message);
        }

        // const cardZone = document.getElementsByClassName('card-zone');
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


    const allowDrop = (e) => {
        e.preventDefault();
        // document.getElementsByName('draggin-item');
        console.log("Status do serviço: ", e.target);
        try{
            // e.target.querySelector('.drop-zone').classList.add('show');
            let element = document.getElementById(e.target.id);
            // e.target.classList.add('show');
            e.target.querySelector('.drop-zone').classList.add('show');
        }catch (e) {
            console.error("não foi possível completar o Drop");
            console.error("Erro: ", e.message);
        }
    };

    const dragEnter = (e) => {
        try{
            // if(e.target.className == ''){
            //
            // }
            e.target.querySelector('.drop-zone').classList.add('show');

        }catch (e) {
            console.error("não foi possível completar o Drop");
            console.error("Erro: ", e.message);
        }
    };

    return (
      <div id={props.id} onDrop={drop} onDragEnter={dragEnter} onDragOver={allowDrop} style={props.style} className='dropable card-zone'>
          {props.children}
          <div className='drop-zone'>

          </div>
      </div>
    );
};

// Droppable.propTypes = {
//     id: PropTypes.string,
//     style: PropTypes.object,
//     children: PropTypes.node
// };

export default Droppable;
