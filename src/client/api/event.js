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

function filterSort(UnorderEvents, filter, date){
    //先對日期做篩選

    let merge = [[],[],[],[],[],[],[]];
    let events = [[],[],[],[],[],[],[]];
    let routines = [[],[],[],[],[],[],[]];

    UnorderEvents.forEach((element) => {
        if(element.type === 'routine') {
            routines[element.week].push(element);
        }
        else {
            date.forEach(d => {
                if(element.year === d.year && element.month === d.month && element.day === d.day && element.type === 'event') {
                    events[element.week].push(element);
                }

            })    
        }
        
    });
    
    if(filter.eventDisplay === false) events = [];
    else if(filter.tags && filter.tags.length !== 0) {
        //寫tag篩選
    }

    if(filter.routineDisplay === false) routines = [];
    else if(filter.tags && filter.tags.length !== 0) {
        //寫tag篩選
    }

    merge.forEach( (element, index) => {
        if(routines[index])
            element.push(...routines[index]);
        if(events[index])
            element.push(...events[index]);
    })
    
    return merge;
}

export async function listEvents(date, login, filter={eventDisplay: true, routineDisplay: true, completedDisplay: true, tags: ''}) {
    console.log('list', date, filter)
    if(!login){
        return local_listEvents(filter, date);
    }else{
        return await server_listEvents(filter, date, login);
    }
}


function local_listEvents(filter, date) {
    let eventString = localStorage.getItem(eventKey);
    let UnorderEvents = eventString ? JSON.parse(eventString) : [];
    console.log('this is local');
    console.log(UnorderEvents, filter, date);
    return filterSort(UnorderEvents, filter, date);

}


async function server_listEvents(filter, date, login) {
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
    return filterSort(UnorderEvents, filter, date);
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
        type: eventData.type,               //string
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
    
    let eventString = localStorage.getItem(eventKey);
    let old_Events = eventString ? JSON.parse(eventString) : [];
    console.log(old_Events);

    let events = [newEvent, ...old_Events];

    localStorage.setItem(eventKey, JSON.stringify(events));
    return newEvent;
}


async function server_createEvent(eventData, login) {
    const newEvent = {
        type: eventData.type,               //string
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