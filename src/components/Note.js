import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';


const Note = ({note}) => {

    const position = useMousePosition();

    // useEffect(() => {
    //   console.log("setting");
    //   return () => {
    //     console.log('Cleaning')
    //   }
    // }, []); 
    
    const { dispatch } = useContext(NotesContext);

    const removeNote = (title) => {
        // setNotes(notes.filter((note) => note.title !== title))
        dispatch({type: 'REMOVE_NOTE', title });
      }
  
    return (
      <div key={note.title}>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <p>{position.x}, {position.y}</p>
        <button onClick={() => removeNote(note.title)}>x</button>
    </div>
    );
  }

  export {Note as default}