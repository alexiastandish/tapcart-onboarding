import React from 'react'
import Column from './Column'
//import './DragAndDrop.css';
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  // flex-grow: 3;
  flex-direction: row;
`

class DragAndDrop extends React.Component {
  state = this.props.data

  onDragStart = () => {
    document.body.style.color = 'orange'
  }

  // onDragUpdate = update => {
  //   const { destination } = update
  //   const opacity = destination ? destination.index / Object.keys(this.state.memes).length : 0
  //   document.body.style.backgroundColor = `rgba(153, 141, 216, ${opacity})`
  // }

  // synchronysly updated your state to reflect dnd result
  onDragEnd = result => {
    // TODO: reorder our column
    document.body.style.color = 'inherit'
    document.body.style.backgroundColor = `white`

    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    const start = this.state.columns[source.droppableId]
    const finish = this.state.columns[destination.droppableId]

    if (start === finish) {
      const newMemeIds = Array.from(start.memeIds)
      newMemeIds.splice(source.index, 1)
      newMemeIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        memeIds: newMemeIds,
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      }
      this.setState(newState)
      return
    }

    // moving fom one list to another
    const startMemeIds = Array.from(start.memeIds)
    startMemeIds.splice(source.index, 1)
    const newStart = {
      ...start,
      memeIds: startMemeIds,
    }

    const finishMemeIds = Array.from(finish.memeIds)
    finishMemeIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      memeIds: finishMemeIds,
    }

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }
    this.setState(newState)
  }

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        // onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <Container>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId]
            const memes = column.memeIds.map(memeId => this.state.memes[memeId])
            return <Column key={column.id} column={column} memes={memes} />
          })}
        </Container>
      </DragDropContext>
    )
  }
}
export default DragAndDrop
