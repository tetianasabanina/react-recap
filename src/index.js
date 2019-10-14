import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';


const App = () => {

    //const isLoggedIn = false;
    //const loginBox = <span>Log in please</span>;
    //const welcomeBox = <span>Welcome Back</span>
    const value = '<script>alert("")</script>' // script injection, JSX renders it as a string 
    return (
        <div>
            {/*<p>{ (new Date()).toString() }</p>
            <p>{ isLoggedIn ? welcomeBox : loginBox }</p>*/}
            { value } 
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));