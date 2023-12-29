import React from 'react';
import './styles.css';

const Items = ({ todos, handleToggle, handledelete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={todo.id} style={{ fontSize: '18px', marginBottom: '10px', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginRight: '10px', flex: 1 }}>
            {todo.text}
          </span>
          {todo.timestamp && (
           <span className="timestamp" style={{marginLeft:'50px',fontSize:'14px'}}>Timestamp: {todo.timestamp}</span>
         )}
          <button
            className="toggle-button"
            style={{
              backgroundColor: 'purple',
              color: 'white',
              padding:'8px 16px',
              marginTop:'20px',
              fontSize: '14px',
              borderRadius: '5px',
              marginRight: '100px',
              marginLeft:'100px',
              border: 'none'

            }}
            onClick={() => handleToggle(index)}
          >
            Toggle
          </button>
          <button
            className="delete-button"
            style={{ backgroundColor: '#f44336', color: 'white', fontSize: '14px', marginLeft: '5px' }}
            onClick={() => handledelete(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Items;
