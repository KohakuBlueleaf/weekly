import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import '@babel/polyfill';
import { element } from 'prop-types';

const eventKey = 'events';

//datatype: array[array[obj, obj,...],array,...] 以星期日到六為index的array為那天所有的event,event為obj
/*
filter = {
    eventDisplay:      //bool
    routineDisplay:    //bool
    completedDisplay   //bool
    tags:              //array
}

date = {
    year:       //number
    month:      //number
    day:        //number
    weekday:    //number
}
*/

function filterSort(UnorderEvents, filter, date, all){
    if(all === true) return UnorderEvents;

    //先對日期做篩選

    let events = [[],[],[],[],[],[],[]];

    UnorderEvents.forEach((element) => {
        date.forEach(d => {
            if(element.year === d.year && element.month === d.month && element.day === d.day) {
                events[element.week].push(element);
            }
        })
    });

    //filter還沒寫完
    
    if(filter.eventDisplay === false) events = [];
    else if(filter.tags && filter.tags.length !== 0) {

    }
    
    return events;
}

export async function listEvents(date, login, filter={eventDisplay: true, routineDisplay: true, completedDisplay: true, tags: []}, all = false) {
    console.log('list', date, filter, all)
    if(!login){
        return local_listEvents(filter, date, all);
    }else{
        return await server_listEvents(filter, date, all, login);
    }
}


function local_listEvents(filter, date, all) {
    let eventString = localStorage.getItem(eventKey);
    let UnorderEvents = eventString ? JSON.parse(eventString) : [];
    return filterSort(UnorderEvents, filter, date, all);

    // let testEvent = [];

    // if(filter.eventDisplay === false) testEvent = [];
    // else {
    //     let allEvent = [[{
    //     id: uuid(),
    //     type: 'event',              //string
    //     title: 'title',             //string
    //     year: 2023,            //number
    //     month: 6,              //number
    //     day: 18,               //number
    //     week: 0,                    //number
    //     timeStart: 3,               //number, 0~47, 奇數為半小
    //     timeEnd: 8,                 //number, 1~48, 奇數為半小
    //     tags: ['eventData.tags'],               //array[obj, obj, ...]
    //     location: 'eventData.location'        //string
    // }],[{
    //     id: uuid(),
    //     type: 'event',              //string
    //     title: 'title',             //string
    //     year: 2023,            //number
    //     month: 6,              //number
    //     day: 18,               //number
    //     week: 0,                    //number
    //     timeStart: 3,               //number, 0~47, 奇數為半小
    //     timeEnd: 8,                 //number, 1~48, 奇數為半小
    //     tags: ['eventData.tags'],               //array[obj, obj, ...]
    //     location: 'eventData.location'        //string
    // }],[{
    //     id: uuid(),
    //     type: 'event',              //string
    //     title: 'title',             //string
    //     year: 2023,            //number
    //     month: 6,              //number
    //     day: 18,               //number
    //     week: 0,                    //number
    //     timeStart: 3,               //number, 0~47, 奇數為半小
    //     timeEnd: 8,                 //number, 1~48, 奇數為半小
    //     tags: ['eventData.tags'],               //array[obj, obj, ...]
    //     location: 'eventData.location'        //string
    // }],[{
    //     id: uuid(),
    //     type: 'event',              //string
    //     title: 'title',             //string
    //     year: 2023,            //number
    //     month: 6,              //number
    //     day: 18,               //number
    //     week: 0,                    //number
    //     timeStart: 3,               //number, 0~47, 奇數為半小
    //     timeEnd: 8,                 //number, 1~48, 奇數為半小
    //     tags: ['eventData.tags'],               //array[obj, obj, ...]
    //     location: 'eventData.location'        //string
    // }],[{
    //     id: uuid(),
    //     type: 'event',              //string
    //     title: 'title',             //string
    //     year: 2023,            //number
    //     month: 6,              //number
    //     day: 18,               //number
    //     week: 0,                    //number
    //     timeStart: 3,               //number, 0~47, 奇數為半小
    //     timeEnd: 8,                 //number, 1~48, 奇數為半小
    //     tags: ['eventData.tags'],               //array[obj, obj, ...]
    //     location: 'eventData.location'        //string
    // }],[{
    //     id: uuid(),
    //     type: 'event',              //string
    //     title: 'title',             //string
    //     year: 2023,            //number
    //     month: 6,              //number
    //     day: 18,               //number
    //     week: 0,                    //number
    //     timeStart: 3,               //number, 0~47, 奇數為半小
    //     timeEnd: 8,                 //number, 1~48, 奇數為半小
    //     tags: ['eventData.tags'],               //array[obj, obj, ...]
    //     location: 'eventData.location'        //string
    // }],[{
    //     id: uuid(),
    //     type: 'event',              //string
    //     title: 'title',             //string
    //     year: 2023,            //number
    //     month: 6,              //number
    //     day: 18,               //number
    //     week: 0,                    //number
    //     timeStart: 3,               //number, 0~47, 奇數為半小
    //     timeEnd: 8,                 //number, 1~48, 奇數為半小
    //     tags: ['eventData.tags'],               //array[obj, obj, ...]
    //     location: 'eventData.location'        //string
    //     }]]
    //     if(filter.tags.length !== 0) {
    //         testEvent = allEvent.filter((e) => {

    //         })
    //     }
    //     else testEvent = allEvent;
    // }

    // return testEvent;
    

}


async function server_listEvents(filter, date, all, login) {
    let res = await fetch('/api/event', {
        method: 'GET',
        headers: {
            'idToken': login
        }
    })
    let UnorderEvents = await res.json();
    console.log(UnorderEvents)
    if(!UnorderEvents || !date){
        console.log(UnorderEvents, date)
        return [[],[],[],[],[],[],[]]
    }
    return filterSort(UnorderEvents, filter, date, all);
}


export async function createEvent(eventData, login) {
    if(!login){
        console.log("hi local: ", eventData);
        return local_createEvent(eventData);
    }else{
        console.log("hi api: ", eventData);
        return await server_createEvent(eventData, login);
    }
}


function local_createEvent(eventData) {
    const newEvent = {
        id: uuid(),
        type: 'event',               //string
        title: eventData.title,             //string
        year: eventData.year,               //number
        month: eventData.month,             //number
        day: eventData.day,            //number
        week: eventData.week,               //number
        timeStart: eventData.timeStart,     //number, 0~47, 奇數為半小
        timeEnd: eventData.timeEnd,         //number, 0~47, 奇數為半小
        tags: eventData.tags,               //array
        location: eventData.location        //string
    };

    console.log('sent');
    const events = [
        newEvent,
        ...listEvents([],{},true)
    ];

    localStorage.setItem(eventKey, JSON.stringify(events));
    return newEvent;
}


async function server_createEvent(eventData, login) {
    const newEvent = {
        type: 'event',               //string
        title: eventData.title,             //string
        year: eventData.year,               //number
        month: eventData.month,             //number
        day: eventData.day,            //number
        weekday: eventData.week,               //number
        timeStart: eventData.timeStart,     //number, 0~47, 奇數為半小
        timeEnd: eventData.timeEnd,         //number, 0~47, 奇數為半小
        tags: eventData.tags,               //array
        location: eventData.location        //string
    };

    let result = await fetch('/api/event',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'idToken': login
        },
        body: JSON.stringify(newEvent)
    });

    console.log('sent', result);
    return newEvent;
}