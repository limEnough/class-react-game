import {useState} from 'react';

export default function Player({name, symbol}) {
  const [ isEditing, setIsEditing ] = useState(false);

  return (
    <li>
      <span className="player">
        { isEditing ? <input type="text" required /> : <span className="player-name">{name}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      { isEditing 
        ? <button type="button" onClick={() => setIsEditing(!isEditing)}>Save</button> 
        : <button type="button" onClick={() => setIsEditing(!isEditing)}>Edit</button> 
      }
    </li>
  )
}