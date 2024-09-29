import React, { useState, useEffect } from 'react';

const Name = () => {
    const [nameInput, setNameInput] = useState('');
    const [names, setNames] = useState([]);
  
    useEffect(() => {
      const storedNames = JSON.parse(localStorage.getItem('names')) || [];
      setNames(storedNames);
    }, []);
  
    const addName = () => {
      if (nameInput.trim()) {
        const updatedNames = [...names, nameInput.trim()];
        setNames(updatedNames);
        localStorage.setItem('names', JSON.stringify(updatedNames));
        setNameInput('');
      }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          addName();
        }
      };

    return (
        <div className='NameDiv'>
            <h1 className='list'>List of Names</h1>
            <input className='inputName' type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} onKeyPress={handleKeyPress}  placeholder="Enter name" />
            <button className='btn' onClick={addName}>Add</button>
            <ul className='ulName'> {names.map((name, index) => (<li key={index}>{name}</li>))} </ul>
        </div>
    );
}

export default Name;
