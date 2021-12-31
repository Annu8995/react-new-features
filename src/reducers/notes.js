const notesReducer = (state, action) => {
    switch(action.type){
        case 'POPULATES_NOTES':
            return action.notes
        case 'ADD_NOTE':
            const note = action.note;
            return [
              ...state,
              { title: note.title, body: note.body }
            ]
        case 'REMOVE_NOTE':
            return state.filter((note) => note.title !== action.title)
        default:
          return state;
    }
  }

  export { notesReducer as default };
  