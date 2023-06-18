import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import '@babel/polyfill';

const routineKey = 'routines';

//datatype: array[array[obj, obj,...],array,...] 以星期日到六為index的array為那天所有的routine,routine為obj
export function listRoutines() {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(local_listRoutines());
    //     }, 500);
    //     // console.log(resolve(local_listRoutines()));
    //     // return resolve(local_listRoutines());
    // });
    // test
    let testRoutine;
    return (testRoutine = [[{
        id: uuid(),
        type: 'routine',              //string
        title: 'title',             //string
        year: 2023,            //number
        month: 6,              //number
        day: 18,               //number
        week: 0,                    //number
        timeStart: 11,               //number, 0~47, 奇數為半小
        timeEnd: 15,                 //number, 1~48, 奇數為半小
        tags: ['routineData.tags'],               //array[obj, obj, ...]
        location: 'routineData.location'        //string
    }],[{
        id: uuid(),
        type: 'routine',              //string
        title: 'title',             //string
        year: 2023,            //number
        month: 6,              //number
        day: 18,               //number
        week: 0,                    //number
        timeStart: 11,               //number, 0~47, 奇數為半小
        timeEnd: 15,                 //number, 1~48, 奇數為半小
        tags: ['routineData.tags'],               //array[obj, obj, ...]
        location: 'routineData.location'        //string
    }],[{
        id: uuid(),
        type: 'routine',              //string
        title: 'title',             //string
        year: 2023,            //number
        month: 6,              //number
        day: 18,               //number
        week: 0,                    //number
        timeStart: 11,               //number, 0~47, 奇數為半小
        timeEnd: 15,                 //number, 1~48, 奇數為半小
        tags: ['routineData.tags'],               //array[obj, obj, ...]
        location: 'routineData.location'        //string
    }],[{
        id: uuid(),
        type: 'routine',              //string
        title: 'title',             //string
        year: 2023,            //number
        month: 6,              //number
        day: 18,               //number
        week: 0,                    //number
        timeStart: 11,               //number, 0~47, 奇數為半小
        timeEnd: 15,                 //number, 1~48, 奇數為半小
        tags: ['routineData.tags'],               //array[obj, obj, ...]
        location: 'routineData.location'        //string
    }],[{
        id: uuid(),
        type: 'routine',              //string
        title: 'title',             //string
        year: 2023,            //number
        month: 6,              //number
        day: 18,               //number
        week: 0,                    //number
        timeStart: 11,               //number, 0~47, 奇數為半小
        timeEnd: 15,                 //number, 1~48, 奇數為半小
        tags: ['routineData.tags'],               //array[obj, obj, ...]
        location: 'routineData.location'        //string
    }],[{
        id: uuid(),
        type: 'routine',              //string
        title: 'title',             //string
        year: 2023,            //number
        month: 6,              //number
        day: 18,               //number
        week: 0,                    //number
        timeStart: 11,               //number, 0~47, 奇數為半小
        timeEnd: 15,                 //number, 1~48, 奇數為半小
        tags: ['routineData.tags'],               //array[obj, obj, ...]
        location: 'routineData.location'        //string
    }],[{
        id: uuid(),
        type: 'routine',              //string
        title: 'title',             //string
        year: 2023,            //number
        month: 6,              //number
        day: 18,               //number
        week: 0,                    //number
        timeStart: 11,               //number, 0~47, 奇數為半小
        timeEnd: 15,                 //number, 1~48, 奇數為半小
        tags: ['routineData.tags'],               //array[obj, obj, ...]
        location: 'routineData.location'        //string
    }]]);
}


function local_listRoutines(searchText = '') {
    let routineString = localStorage.getItem(routineKey);
    let routines = routineString ? JSON.parse(routineString) : [];
    // console.log(routines);
    // if(routines.lengh > 0) {
    //     routines = routines.filter(e => {
    //         return e.title.toLocaleLowerCase().indexOf(searchText.toLowerCase()) !== -1
    //     });
    // }
    let testRoutine;
    return (testRoutine = [[{
        id: uuid(),
        type: 'routine',              //string
        title: 'title',             //string
        year: 2023,            //number
        month: 6,              //number
        day: 18,               //number
        week: 0,                    //number
        timeStart: 11,               //number, 0~47, 奇數為半小
        timeEnd: 15,                 //number, 1~48, 奇數為半小
        tags: ['routineData.tags'],               //array[obj, obj, ...]
        location: 'routineData.location'        //string
    }],[],[],[],[],[],[]]);
    //return routines;

}

export function createRoutine(routineData) {
    return new Promise((resolve, reject) => {
        resolve(local_createRoutine(routineData));
    });
}


function local_createRoutine(routineData) {
    const newRoutine = {
        id: uuid(),
        type: routineData.type,               //string
        title: routineData.title,             //string
        date_year: routineData.year,          //number
        date_month: routineData.month,        //number
        date_day: routineData.day,            //number
        week: routineData.week,               //number
        timeStart: routineData.timeStart,     //number, 0~47, 奇數為半小
        timeEnd: routineData.timeEnd,         //number, 0~47, 奇數為半小
        tags: routineData.tags,               //array
        location: routineData.location        //string
    };

    const routines = [
        newRoutine,
        ...listRoutines()
    ];

    localStorage.setItem(routineKey, JSON.stringify(routines));
    return newRoutine;
}