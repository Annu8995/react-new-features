import React, { useState, useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';

const NoteApp = () => {
    // const notesData = JSON.parse(localStorage.getItem('notes'));
    // const [notes, setNotes] = useState(notesData || []);
  
    // const [notes, setNotes] = useState([]);
    const [notes, dispatch] = useReducer(notesReducer, []);      
      
    useEffect(() => {
      const notes = JSON.parse(localStorage.getItem('notes'));
      if(notes){
        // setNotes(notesData);
        dispatch({type: 'POPULATES_NOTES', notes});
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);
  
    return(
      <NotesContext.Provider value={{ notes, dispatch }}>
        <h1>Notes</h1>
        <NoteList />        
        <AddNoteForm />        
      </NotesContext.Provider>
    )
  
  }

  export { NoteApp as default }