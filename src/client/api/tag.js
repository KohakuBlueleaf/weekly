import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import '@babel/polyfill';

const tagKey = 'tags';

/*
tags = {
    id:             //string
    title:          //string
    color:          //string
}

*/

export async function getTagById(id, login) {
    if(!id) return;
    tags = [];
    tags = await listTags(login)
    tags.forEach(element => {
        if(element.id === id) return element;
    });
}

export async function listTags(login) {
    if(!login){
        return local_listTags(login);
    }else{
        return await server_listTags(login);
    }
}


function local_listTags(login) {
    let tagString = localStorage.getItem(tagKey);
    let tags = tagString ? JSON.parse(tagString) : [];
    return tags;
}

async function server_listTags(login) {
    let res = await fetch('/api/tag', {
        method: 'GET',
        headers: {
            'idToken': login
        }
    })
    let tags = await res.json();
    return tags;
}

export async function createTag(tagData, login) {
    console.log('createTags', tagData, login)
    if(!login){
        return local_createTag(tagData);
    }else{
        return await server_createTags(tagData, login);
    }
}

function local_createTag(tagData) {
    const newTag = {
        id: uuid(),
        title: tagData.title,             //string
        color: tagData.color              //string
    };

    let tagString = localStorage.getItem(tagKey);
    let old_tags = tagString ? JSON.parse(tagString) : [];

    let tags = [
        newTag,
        ...old_tags
    ];


    localStorage.setItem(tagKey, JSON.stringify(tags));
    return newTag;

}

async function server_createTags(tagData, login) {
    console.log('sent', tagData, login);
    const newTag = {
        title: tagData.title,             //string
        color: tagData.color              //string
    };

    let result = await fetch('/api/tag',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'idToken': login
        },
        body: JSON.stringify(newTag)
    });

    return newTag;
}