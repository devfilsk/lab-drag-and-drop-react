import React from 'react';
import styled from 'styled-components';
import Draggable from '../Draggable'
import Droppable from '../Droppable'

const Wrapper = styled.div`
    width: 100%;
    padding: 32px;
    display: flex;
    justify-content: center;
`;

const Item = styled.div`
    padding: 8px;
    color: #555;
    background-color: white;
    border-radius: 3px;
`;

const droppableStyle = {
    backgroundColor: '#555',
    width: '250px',
    borderRadius: '3px',
    height: '400px',
    margin: '32px'
}

const DndTest = () => {
    return (
        <div className='App-header'>
            <Droppable id='dr1' style={droppableStyle}>
                <Draggable id='item1' style={{margin: '8px'}}><Item>Primeiro conteudo</Item></Draggable>
                <Draggable id='item2' style={{margin: '8px'}}><Item>Segundo conteúdo + 1 </Item></Draggable>
            </Droppable>
            <Droppable id='dr2' style={droppableStyle}>
            </Droppable>
            <Droppable id='dr3' style={droppableStyle}>
            </Droppable>
        </div>
    )
}

export default DndTest;


