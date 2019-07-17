import React from 'react';
import PropTypes from  'prop-types';
import './style.css';

const Droppable = (props) => {

    // Evendo executado ao soltar um elemento
    const drop = (e) => {
        // Prevenir o comportamento de abertura de link (Comportamento padrão do navegador para quando um elemento é solto)
        e.preventDefault();
        // Recuperando o ID do elemento que está sendo arrastado (id salvo durante o evento dragStart)
        const data = e.dataTransfer.getData('task');
        let elemento = document.getElementById(data);

        try{
            e.target.parentNode.appendChild(elemento)
            document.getElementById(data).classList.remove('draggin-item');
        }catch (e) {
            console.error("não foi possível completar o Drop");
            console.error("Erro: ", e.message);
        }

        // Remover apos soltar o card
        if(e.target.className == 'drop-zone primary'){
            e.target.className = 'drop-zone';
        }

        e.stopPropagation();
    };


    const overAction = (e) => {
        e.preventDefault();
        // document.getElementsByName('draggin-item');
        console.log("Status do serviço: ", e.target);
        try{
            // e.target.querySelector('.drop-zone').classList.add('show');
            let element = document.getElementById(e.target.id);
            // e.target.classList.add('show');
            // e.target.querySelector('.drop-zone').classList.add('show');
        }catch (e) {
            console.error("não foi possível completar o Drop");
            console.error("Erro: ", e.message);
        }
    };

    // Evento chamado quando o usuário entra com um elemento na dropzone
    const dragEnter = (e) => {
        try{
            if(e.target.className == 'drop-zone'){
               console.log("Dropi zoni")
                e.target.className = 'drop-zone primary';
            }
            // e.target.querySelector('.drop-zone').classList.add('show');
        }catch (e) {
            console.error("não foi possível completar o Drop");
            console.error("Erro: ", e.message);
        }
    };

    // Removendo pseudo elemento ao tirar o hover ho card
    const dragLeave = (e) => {
        try{
            if(e.target.className == 'drop-zone primary'){
                console.log("Dropi zoni")
                e.target.className = 'drop-zone';
            }
            // e.target.querySelector('.drop-zone').classList.add('show');
        }catch (e) {
            console.error("não foi possível completar o Drop");
            console.error("Erro: ", e.message);
        }
    };

    // Quando o drag é finalizado
    const dragEnd = (e) => {
        // Remover estilização ao fim do evento drag
    }

    return (
      <div id={props.id} className='dropable card-zone' style={props.style}>
          {props.children}
          <div className='drop-zone' onDrop={drop} onDragEnter={dragEnter} onDragOver={overAction} onDragLeave={dragLeave} onDragEnd={dragEnd}>

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
