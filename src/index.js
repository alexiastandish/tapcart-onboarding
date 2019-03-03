import React from 'react'
import ReactDOM from 'react-dom'
import DragAndDrop from './components/DragAndDrop'
import initialData from './initialData'
import './sass/main.scss'

const App = () => {
  return <DragAndDrop data={initialData} />
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
