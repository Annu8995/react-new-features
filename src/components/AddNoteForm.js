import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const position = useMousePosition();

    const { dispatch } = useContext(NotesContext);

    const addNote = (e) => {
        e.preventDefault();
        // setNotes([
        //   ...notes,
        //   { title, body }
        // ])
        dispatch({type: 'ADD_NOTE', note: { title, body }});
        setTitle('');
        setBody('');
    }

    return (
        <>
        <p>Add note {position.x}, {position.y}</p>
        <form onSubmit={addNote}>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea value={body} onChange={(e) => setBody(e.target.value)}/>
            <button>add note</button>
        </form>
    </>
    )
        
            
    
   
}

export { AddNoteForm as default }