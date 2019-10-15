import React, {Component} from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {

    state = {
        todoData : [
            {label: 'Drink Coffee', important: false, id:1},
            {label: 'Make App', important: true, id:2},
            {label: 'Have a lunch', important: false, id:3},
    
        ]
    };

    deleteItem = (id) => {
        //console.log(id);
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            // todoData.splice(idx, 1); //to change state is not allowed 
           
        // [a,b,c,d,e]
        // [a,b,  d,e]

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx+1)
            ];
            console.log(newArray);
            return {
                todoData: newArray
            };
        });
    };

    render () {
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
                <TodoList
                 todos={ this.state.todoData }
                 onDeleted={ this.deleteItem } />
            </div>
        );
    }
       
    
};

