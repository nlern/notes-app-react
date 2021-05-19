export default (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_NOTE':
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    default:
      return state;
  }
};
