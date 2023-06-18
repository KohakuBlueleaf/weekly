import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import '@babel/polyfill';

const eventKey = 'events';

//datatype: array[array[obj, obj,...],array,...] 以星期日到六為index的array為那天所有的event,event為obj
export function listEvents() {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(_listEvents());
    //     }, 500);
    // });

    //test
    let testEvent;
    return (testEvent = [[{
        id: uuid(),
        type: 'event',              //string
        title: 'title',             //string
        year: 2023,            //number
        month: 6,              //number
        day: 18,               //number
        week: 0,                    //number
        timeStart: 3,               //number, 0~47, 奇數為半小
        timeEnd: 8,                 //number, 0~47, 奇數為半小
        tags: ['eventData.tags'],               //array[obj, obj, ...]
        location: 'eventData.location'        //string
    }],[{
        id: uuid(),
        type: 'event',              //string
        title: 'title',             //string
        year: 2023,            //number
        month: 6,              //number
        day: 19,               //number
        week: 0,                    //number
        timeStart: 10,               //number, 0~47, 奇數為半小
        timeEnd: 20,                 //number, 0~47, 奇數為半小
        tags: ['eventData.tags'],               //array[obj, obj, ...]
        location: 'eventData.location'        //string
    }],[{
        id: uuid(),
        type: 'event',              //string
        title: 'title',             //string
        year: 2023,            //number
        month: 6,              //number
        day: 18,               //number
        week: 0,                    //number
        timeStart: 40,               //number, 0~47, 奇數為半小
        timeEnd: 48,                 //number, 0~47, 奇數為半小
        tags: ['eventData.tags'],               //array[obj, obj, ...]
        location: 'eventData.location'        //string
    }],[],[],[],[]]);
}


function _listEvents(searchText = '') {
    let eventString = localStorage.getItem(eventKey);
    let events = eventString ? JSON.parse(eventString) : [];
    // if(events.lengh > 0) {
    //     events = events.filter(e => {
    //         return e.title.toLocaleLowerCase().indexOf(searchText.toLowerCase()) !== -1
    //     });
    // }
    return events;
}

export function createEvent(eventData) {
    return new Promise((resolve, reject) => {
        resolve(_createEvent(eventData));
    });
}


function _createEvent(eventData) {
    const newEvent = {
        id: uuid(),
        type: eventData.type,               //string
        title: eventData.title,             //string
        date_year: eventData.year,          //number
        date_month: eventData.month,        //number
        date_day: eventData.day,            //number
        week: eventData.week,               //number
        timeStart: eventData.timeStart,     //number, 0~47, 奇數為半小
        timeEnd: eventData.timeEnd,         //number, 0~47, 奇數為半小
        tags: eventData.tags,               //array
        location: eventData.location        //string
    };

    const events = [
        newEvent,
        ...listEvents()
    ];

    localStorage.setItem(eventKey, JSON.stringify(events));
    return newEvent;

}