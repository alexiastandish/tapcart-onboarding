import three from './img/three.jpg'
import chloe from './img/chloe.jpg'
import kimk from './img/kimk.jpg'
import hat from './img/hat.jpg'
import meme from './img/meme.jpg'
import raven from './img/raven.jpg'
import squintingwoman from './img/squintingwoman.jpg'

const initialData = {
  memes: {
    'meme-1': { id: 'meme-1', imgSrc: three },
    'meme-2': { id: 'meme-2', imgSrc: chloe },
    'meme-3': { id: 'meme-3', imgSrc: kimk },
    'meme-4': { id: 'meme-4', imgSrc: hat },
    'meme-5': { id: 'meme-5', imgSrc: meme },
    'meme-6': { id: 'meme-6', imgSrc: raven },
    'meme-7': { id: 'meme-7', imgSrc: squintingwoman },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Funny',
      memeIds: ['meme-1', 'meme-2', 'meme-3', 'meme-4', 'meme-5', 'meme-6', 'meme-7'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Funnier',
      memeIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Funniest',
      memeIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
}
export default initialData
