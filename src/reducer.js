export default function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_COLUMN_COLOR':
      return {
        ...state,
        columnBackgroundColor: payload,
      }
    default:
      return state
  }
}
