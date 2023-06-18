import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import '@babel/polyfill';

const eventKey = 'events';

export function listEvent() {

}


function _listEvent() {

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
        timeStart: eventData.timeStart,     //number, 0~47, 奇數為
        timeEnd: eventData.timeEnd,
        tags: eventData.tags,               //array


    }

}