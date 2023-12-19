import React, { useState, useEffect } from 'react';
import Items from './Items';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './config/firebase';
import './styles.css';

const TodoContainer = () => {
  const [work, setWork] = useState([]);
  const [inputitems, setInputitems] = useState('');

  const getTodo = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'work'));
      const workData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setWork(workData);
    } catch (error) {
      console.error('Error getting todos', error);
    }
  };

  const addTodo = async (todoText) => {
    try {
      if (!todoText.trim()) {
        console.log('Input is empty. Please enter a valid todo text.');
        return;
      }

      const todoCollection = collection(db, 'work');
      const newTodoRef = await addDoc(todoCollection, { text: todoText, completed: false });
      console.log('Todo added successfully with ID:', newTodoRef.id);
      setInputitems('');
      getTodo();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleToggle = async (index) => {
    try {
      const updatedWork = [...work];
      updatedWork[index].completed = !updatedWork[index].completed;
      setWork(updatedWork);
      const todoCollection = collection(db, 'work');
      const todoDoc = doc(todoCollection, updatedWork[index].id);
      await updateDoc(todoDoc, { completed: updatedWork[index].completed });
      console.log('Todo updated successfully!');
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handledelete = async (index) => {
    try {
      const deletedTodoId = work[index].id;
      console.log('Deleting todo with ID:', deletedTodoId);
      const todoCollection = collection(db, 'work');
      await deleteDoc(doc(todoCollection, deletedTodoId));
      console.log('Todo deleted successfully!');
      getTodo();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="todo-container">
     
      <div className="input-box">
        <input
          type="text"
          placeholder="Add an Item"
          value={inputitems}
          style={{border:'solid-black'}}
          onChange={(e) => setInputitems(e.target.value)}
        />
        <button type="button" onClick={() => addTodo(inputitems)}>
          Submit
        </button>
      </div>
      <div className="todo-box">
        <div className="ITEM">
          <Items todos={work} handleToggle={handleToggle} handledelete={handledelete} />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
