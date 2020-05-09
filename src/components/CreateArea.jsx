import React, { useState } from "react";

function CreateArea(prop) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  function handlechange(event) {
    const { name, value } = event.target;

    setnote(prevalue => {
      return {
        ...prevalue,
        [name]: value
      };
    });
  }

  function submitnote(event) {
    prop.onAdd(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          onChange={handlechange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handlechange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
