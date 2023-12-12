import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  // State to determine if user is editing name or not
  const [isEditing, setIsEditing] = useState(false);

  // console.log(isEditing);

  function handleEdit() {
    // Not recommended for React, instead you should pass function
    // setIsEditing(!isEditing);
    // This is done b/c React schedules state updates, dont happen instantly
    // Best practice to make sure state is updated from latest value
    setIsEditing((editing) => !editing);
  }

  // Lets user enter name, store as event object (event)
  function handleChange(event) {
    // event.target - element that emits event (input element)
    // event.target.value - value of input ie name
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  // onChange updates every key stroke, saves input as event object to store name
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? 'active': undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
