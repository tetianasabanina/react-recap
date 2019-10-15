import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    // constructor - conservative approach
    /*constructor() {
        super();
        this.onLabelClick = () => {
            console.log(`done: ${this.props.label}`);
        };
    }*/

    //class fields - new proposal
    onLabelClick = () => {
        //console.log(`done: ${this.props.label}`);
        this.setState(({done}) => {
            return {
                done: !done
            };
        });
    };

    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            };
        });
    };
    //an example where 'props' was undefined, because function doesn't save it's connection with the object, where it was defined
    /*onLabelClick() {
        console.log(`done: ${this.props.label}`)
    }*/

    render() {

        const { label, onDeleted} = this.props;
        const {done, important} = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        };

        if (important) {
            classNames += ' important';
        };

        /*const style = {
            color: important ? 'steelblue': 'black',
            fontWeight: important ? 'bold' : 'normal'
        };
        */
    
        return (
        <span className={classNames}>
            <span 
                className="todo-list-item-label"
                //style={style}
                onClick={ this.onLabelClick } >
                { label }
            </span>
            
            <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onMarkImportant}>
                <i className="fa fa-exclamation" />
            </button>
            
            <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
                <i className="fa fa-trash-o" />
            </button>
        </span>
        );

    }
}
// function-based component
/*const TodoListItemFunc = ({ label, important = false }) => {
    
    const style = {
        color: important ? 'steelblue': 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
    <span className="todo-list-item">
        <span 
            className="todo-list-item-label"
            style={style}>
            { label }
        </span>
        
        <button type="button"
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-exclamation" />
        </button>
        
        <button type="button"
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
        </button>
    </span>
    );
};*/

