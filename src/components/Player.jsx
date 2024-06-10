import {useState} from 'react';

export default function Player({name, symbol}) {
  // #region State
  const [ isEditing, setIsEditing ] = useState(false);
  const [ userName, setUserName ] = useState(name); 
  // #endregion

  // #region Computed
  const playerName = isEditing ? <input type="text" value={userName} required onChange={(e) => handleChangeValue(e)}/> : <span className="player-name">{userName}</span>; 
  // #endregion

  // #region Events
  const handleChangeValue = (e) => {
    setUserName(() => e.target.value);
  }

  const handleClickButon = () => {
    /**
     * NOTI: 상태를 이전값에 기반하여 변경하는 경우 상태 업데이트 함수에 새로운 함수를 전달해야 한다.
     * setIsEditing(!isEditing); 이렇게 사용할 수 없는 이유? 스케줄 상태 업데이트가 제대로 되지 않기 때문에!
     */
    setIsEditing((editing) => !editing);
  }

  const saveChangedValue = () => {
    setUserName((userName) => userName);
    setIsEditing((editing) => !editing);
  }
  // #endregion

  return (
    <li>
      <span className="player">{playerName}</span>
      {
        isEditing
        ? <button type="button" onClick={() => saveChangedValue()}>Save</button> 
        : <button type="button" onClick={() => handleClickButon()}>Edit</button> 
      }
    </li>
  )
}