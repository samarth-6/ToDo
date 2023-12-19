import React from 'react';
import Header from './Header';
import Todocontainer from './todocontainer'
import './styles.css';
const App= () => {
return (<div>
    <div className="headme">
        <Header/>
    </div>
    <div className="todo-container">
        <Todocontainer/>
    </div>
    </div>
);
}
export default App;