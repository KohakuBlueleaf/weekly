import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";
import {FaEquals, FaCircle} from 'react-icons/fa';

import ListGroup from 'react-bootstrap/ListGroup';

import {endListTags} from '../store/tags/action';
import { listTags } from '../api/tag';

async function getTagsList(login) {
  return await listTags(login);
}

const TagList = () => {
  const loginStatus = useSelector((state) => state.user.token);
  const [user, authStatus] = useOutletContext();
  const dispatch = useDispatch();

  const listTags = useSelector((state) => state.tags.tags);
  console.log('init tag is', listTags)

  let tagData = [];

  useEffect(()=>{
    console.log('get tags', listTags, loginStatus);
    if(authStatus === 'configuring') return;
    if(authStatus === 'authenticated' && !loginStatus) return;
    (async()=>{
      tagData = await getTagsList(loginStatus);
      dispatch(endListTags(tagData));
      console.log("tagdata is", tagData);
    })();
  }, [loginStatus, authStatus]);


  return (
    <ListGroup vertical="true">
      {listTags.map(t=>{
        return (
          <ListGroup.Item key={'tag-list-'+t.id} className='d-flex flex-row justify-content-between'>
            <a><FaCircle color={t.color ? t.color : "#17385B"}></FaCircle>{t.title}</a>
            <FaEquals color={t.color ? t.color : "#17385B"}></FaEquals>
          </ListGroup.Item>
        )
      })}
           
    </ListGroup>
  );
}

export default TagList;