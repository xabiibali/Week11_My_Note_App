import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  const { notes, deleteNote} = props
  return (
    <div className="mt-7 flex flex-row gap-x-2">
      { /* Style your note cards with Tailwind here and get the data from app.js */ }
     {notes.map((note)=>(
      <div key={note.id}
      className=" bg-yellow-500 p-4 rounded-md shadow-md justify-between items-center mb-4 max-w-xs"
      >
      <div className="flex flex-col"> 
        <h3 className="text-2xl text-black font-bold "> {note.title} </h3>
         <p className="text-black text-justify p-1/2 text-1xl font-medium"> {note.content}</p>
      </div>
       <div className="text-center">
          <button onClick={() => deleteNote(note.id)}
           className="text-black hover:text-red-700 mr-2"
          ><FaTrash/>
          </button>

          <button className="text-black hover:text-orange-700"><FaEdit/></button>

       </div>
      
      </div>
     )
     )}

      
    </div>
  );
}

export default Notes;