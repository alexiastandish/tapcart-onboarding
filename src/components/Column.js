import React, { Component } from 'react'
import { useContext } from 'react'
//import './Column.css';
import styled from 'styled-components'
import Meme from './Meme'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  // width: 320px;
  // flex-grow: 3;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100%;
`
const Title = styled.h3`
  padding: 8px;
`
const MemeList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  // flex-grow: 1;
  min-height: 100px;
`

class Column extends Component {
  render() {
    return (
      <Container style={{}}>
        <Title>
          {/* <div className="dnd__column"> */}
          {this.props.column.title}
          {/* </div> */}
        </Title>
        {
          /* // Droppable needs one required prop - droppableId */
          // Droppable utilizes the render props pattern and expects it's child to be a function that returns a react component
        }
        <Droppable droppableId={this.props.column.id}>
          {/* // first arg = provided is an object that has property called "droppableProps" (props that need to be applied to the component you want to designate as droppable)  */}

          {(provided, snapshot) => (
            <MemeList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.memes.map((meme, index) => (
                <Meme key={meme.id} meme={meme} index={index} />
              ))}
              {provided.placeholder}
            </MemeList>
          )}
        </Droppable>
      </Container>
    )
  }
}
export default Column
