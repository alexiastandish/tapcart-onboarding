import React, { Component } from 'react'
//import './Column.css';
import styled from 'styled-components'
import Task from './Task'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`
const Title = styled.h3`
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
`

class Column extends Component {
  render() {
    return (
      <Container>
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
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    )
  }
}
export default Column
