import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import '@babel/polyfill';

const todoKey = 'todos';

export function listTodos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_listTodos());
        }, 500);
    });
}


function _listTodos(searchText = '') {
    let todoString = localStorage.getItem(todoKey);
    let todos = todoString ? JSON.parse(todoString) : [];
    // if(events.lengh > 0) {
    //     events = events.filter(e => {
    //         return e.title.toLocaleLowerCase().indexOf(searchText.toLowerCase()) !== -1
    //     });
    // }
    return todos;
}

export function createTodo(todoData) {
    return new Promise((resolve, reject) => {
        resolve(_createTodo(todoData));
    });
}


function _createTodo(todoData) {
    const newTodo = {
        id: uuid(),
        completed: todoData.completed,     //bool
        title: todoData.title,             //string
        year: todoData.year,               //number
        month: todoData.month,             //number
        day: todoData.day,                 //number
        weekday: todoData.week,               //number
        tags: todoData.tags,               //array[obj, obj, ...]
    };

    const todos = [
        newTodo,
        ...listTodos()
    ];

    localStorage.setItem(todoKey, JSON.stringify(todos));
    return newTodo;

}