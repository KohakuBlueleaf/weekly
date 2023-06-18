import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import '@babel/polyfill';

const routineKey = 'routines';

export function listRoutines() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_listRoutines());
        }, 500);
    });
}


function _listRoutines(searchText = '') {
    let routineString = localStorage.getItem(routineKey);
    let routines = routineString ? JSON.parse(routineString) : [];
    // if(events.lengh > 0) {
    //     events = events.filter(e => {
    //         return e.title.toLocaleLowerCase().indexOf(searchText.toLowerCase()) !== -1
    //     });
    // }
    return routines;
}

export function createRoutine(routineData) {
    return new Promise((resolve, reject) => {
        resolve(_createRoutine(routineData));
    });
}


function _createRoutine(routineData) {
    const newRoutine = {
        id: uuid(),
        completed: routineData.completed,     //bool
        title: routineData.title,             //string
        date: routineData.date,               //string, eg:06/18
        day: routineData.day,                 //number
        timeStart: eventData.timeStart,     //number, 0~47, 奇數為半小
        timeEnd: eventData.timeEnd,         //number, 0~47, 奇數為半小
        tags: routineData.tags,               //array[obj, obj, ...]
        location: routineData.location        //string
    };

    const routines = [
        newRoutine,
        ...listRoutines()
    ];

    localStorage.setItem(routineKey, JSON.stringify(routines));
    return newRoutine;

}