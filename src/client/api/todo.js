import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import '@babel/polyfill';

const todoKey = 'todos';

/*
todos = {
    id:                 //uuid
    completed:          //bool
    title:              //string
    year:               //number
    month:              //number
    day:                //number
    weekday:            //number
    tags:               //array //看情況寫，因為
}

date = {
    year:               //number
    month:              //number
    day:                //number
}

if completed is true => show all todos(include completed)
else => show only uncompleted todo
*/

export async function listTodos(date, login, completed = true) {
    if(!login) {
        return local_listTodos(login, completed);
    }else {
        //server
    }
}

//
function local_listTodos(date, login, completed) {
    let todoString = localStorage.getItem(todoKey);
    let all_todos = todoString ? JSON.parse(todoString) : [];
    
    let todos = all_todos.filter( todo => {
        if(completed) return true;
        return todo.completed === completed;
    })

    return todos;
}

export async function createTodo(todoData, login) {
    console.log('createTodo', todoData, login);
    if(!login) {
        return local_createTodo(todoData, login);
    }else {
        //server
    }
}


function local_createTodo(todoData) {
    const newTodo = {
        id: uuid(),
        completed: todoData.completed,     //bool
        title: todoData.title,             //string
        year: todoData.year,               //number
        month: todoData.month,             //number
        day: todoData.day,                 //number
        weekday: todoData.week,            //number
        tags: todoData.tags,               //array[obj, obj, ...]
    };

    let todoString = localStorage.getItem(todoKey);
    let old_todos = todoString ? JSON.parse(todoString) : [];

    let todos = [
        newTodo,
        ...old_todos
    ];

    localStorage.setItem(todoKey, JSON.stringify(todos));
    return newTodo;
}