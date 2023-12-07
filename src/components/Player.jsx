import { useState } from "react";

export default function Player({name, symbol}) {
    // State to determine if user is editing name or not
    const [ isEditing, setIsEditing ] = useState(false);

    // console.log(isEditing);

    function handleEdit() {
      // 
        setIsEditing(!isEditing);
    }

    let playerName = <span className="player-name">{name}</span>;
    
    if (isEditing) {
        playerName = <input type="text" required value={name}/>;
    }

    return (
        <li>
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}