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
        return local_listTodos(date, login, completed);
    }else {
        return await server_listTodos(date, login, completed);
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

//
async function server_listTodos(date, login, completed) {
    let res = await fetch('/api/todo', {
        method: 'GET',
        headers: {
            'idToken': login
        }
    })
    let all_todos = await res.json();
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
        return await server_createTodo(todoData, login);
    }
}


function local_createTodo(todoData) {
    const newTodo = {
        id: uuid(),
        completed: false,     //bool
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
    // console.log('tososss',todos);

    localStorage.setItem(todoKey, JSON.stringify(todos));
    return newTodo;
}

async function server_createTodo(todoData, login) {
    const newTodo = {
        completed: false,     //bool
        title: todoData.title,             //string
        year: todoData.year,               //number
        month: todoData.month,             //number
        day: todoData.day,                 //number
        weekday: todoData.week,            //number
        tags: todoData.tags,               //array[obj, obj, ...]
    };

    let result = await fetch('/api/todo',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'idToken': login
        },
        body: JSON.stringify(newTodo)
    });

    console.log('sent', result);
    return newTodo;
}

export async function modifyTodo(todoData, login) {
    if(!login) {
        return local_modifyTodo(todoData, login);
    }
    else {
        return await server_modifyTodo(todoData, login);
    }
}

function local_modifyTodo(todoData, login) {
    let todoString = localStorage.getItem(todoKey);
    let old_todos = todoString ? JSON.parse(todoString) : [];

    let modified = {};
    let noModified = old_todos.filter(e => {
        console.log(e, todoData);
        if(e.id === todoData.id) {
            modified = {
                completed: !e.completed,
                title: e.title,             //string
                year: e.year,               //number
                month: e.month,             //number
                day: e.day,                 //number
                weekday: e.weekday,            //number
                tags: e.tags,               //array[obj, obj, ...]
            }
            return false;
        }
        else return true
    })

    console.log(modified);
    // console.log(modified);
    let merge = [];
    if(noModified) merge = [modified, ...noModified];
    else merge = [modified]; 
    merge = merge.filter(value => Object.keys(value).length !== 0)
    console.log(merge)

    console.log(merge);
    localStorage.setItem(todoKey, JSON.stringify(merge));
    return merge;
    
}

async function server_modifyTodo(todoData, login) {
    console.log(todoData)
    todoData.completed = !todoData.completed;
    let result = await fetch('/api/todo',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'idToken': login
        },
        body: JSON.stringify(todoData)
    });
    let merge = await result.json();

    console.log('sent', merge);
    return merge;
}