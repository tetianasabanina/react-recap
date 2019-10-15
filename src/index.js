import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';


const App = () => {

    //const isLoggedIn = false;
    //const loginBox = <span>Log in please</span>;
    //const welcomeBox = <span>Welcome Back</span>
    //const value = '<script>alert("")</script>' // script injection, JSX renders it as a string 
    
    const todoData = [
        {label: 'Drink Coffee', important: false, id:1},
        {label: 'Make App', important: true, id:2},
        {label: 'Have a lunch', important: false, id:3},

    ]
   
    return (
        <div className="todo-app">
            {/*<p>{ (new Date()).toString() }</p>
            <p>{ isLoggedIn ? welcomeBox : loginBox }</p>*/}
            {/*{ value } */}
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={ todoData } />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));