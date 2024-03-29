import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState();
    return (
        <div className="new-todo-form">
            <input 
                className="new-todo-input" 
                type="text"
                placeholder="Type your new ToDo here"
                value= {inputValue}
                onChange={e.target.value}></input>
            <button 
            onClick={() => {
                const isDuplicateText =
                    todos.some(todo => todo.text === inputValue);
                if (!isDuplicateText) {
                    onCreatePressed(inputValue);
                    setInputValue('');
                }
                
            }}
                className="new-todo-button">Create ToDo</button>
        </div>
    )
    };

    const mapStateToProps = state => ({
        todos: state.todos,
    });

    const mapDispatchToProps = dispatch => ({
        onCreatePressed: text => dispatch(createTodo(text)),
    });

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);