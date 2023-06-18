import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import '@babel/polyfill';

const eventKey = 'events';

export function listEvents() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_listEvents());
        }, 500);
    });
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
        title: eventData.title,             //string
        date: eventData.date,               //string, eg:06/18
        day: eventData.day,                 //number
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