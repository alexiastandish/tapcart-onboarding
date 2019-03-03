import React, { Component } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  // padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  display: flex;
  align-items: center;
`

// const Handle = styled.div`
//   width: 15px;
//   height: 15px;
//   background-color: skyblue;
//   border-radius: 45px;
//   margin-right: 8px;
// `

const Image = styled.img`
  // width: 300px;
  width: 100%;
  height: 80px;
  object-fit: cover;
`

class Meme extends Component {
  render() {
    console.log('this.props', this.props)
    return (
      <Draggable draggableId={this.props.meme.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            isDragging={snapshot.isDragging}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {/* <Handle {...provided.dragHandleProps} /> */}

            <Image src={this.props.meme.imgSrc} alt={this.props.meme.id}>
              {/* <img src={this.props.meme.imgSrc} alt={this.props.meme.id} /> */}
            </Image>
          </Container>
        )}
      </Draggable>
    )
  }
}
export default Meme
