import {useState} from 'react';

export default function Player({name, symbol}) {
  const [ isEditing, setIsEditing ] = useState(false);
  const [ userName, setUserName ] = useState(name); 

  const handleChangedValue = (e) => {
    setUserName(e.target.value)
  }

  const saveChangedValue = () => {
    setUserName(userName);
    setIsEditing(false);
  }
  
  const playerName = isEditing ? <input type="text" value={userName} required onChange={(e) => handleChangedValue(e)}/> : <span className="player-name">{userName}</span>; 
  const buttonCaption = isEditing ? 'Save' : 'Edit';

  return (
    <li>
      <span className="player">{playerName}</span>
      {
        isEditing
        ? <button type="button" onClick={() => saveChangedValue()}>Save</button> 
        : <button type="button" onClick={() => setIsEditing(!isEditing)}>Edit</button> 
      }
    </li>
  )
}