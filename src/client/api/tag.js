import axios from 'axios';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import '@babel/polyfill';

const tagKey = 'tags';

export async function listTags() {
    console.log('listTags', )
    if(!login){
        return local_listTags();
    }else{
        return await server_listTags();
    }
}


function _listTags(searchText = '') {
    let tagString = localStorage.getItem(tagKey);
    let tags = tagString ? JSON.parse(tagString) : [];
    // if(events.lengh > 0) {
    //     events = events.filter(e => {
    //         return e.title.toLocaleLowerCase().indexOf(searchText.toLowerCase()) !== -1
    //     });
    // }
    return tags;
}

export function createTag(tagData) {
    return new Promise((resolve, reject) => {
        resolve(_createTag(tagData));
    });
}


function _createTag(tagData) {
    const newTag = {
        id: uuid(),
        title: tagData.title,             //string
        color: tagData.color              //string
    };

    const tags = [
        newTag,
        ...listTags()
    ];

    localStorage.setItem(tagKey, JSON.stringify(tags));
    return newTag;

}