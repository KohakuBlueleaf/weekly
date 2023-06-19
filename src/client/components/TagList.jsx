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

  let tagData = [];

  useEffect(()=>{
    console.log('get tags', listTags, loginStatus);
    if(authStatus === 'configuring') return;
    (async()=>{
      tagData = await getTagsList(loginStatus);
      dispatch(endListTags(tagData));
      console.log("tagdata is", tagData);
    })();
  }, [loginStatus, authStatus])


  return (
    <ListGroup vertical="true">
      
      {tagData.map(t=>{
        return(
        <ListGroup.Item className='d-flex flex-row justify-content-between'><a><FaCircle color="#BE6464"></FaCircle>{t.title}</a><FaEquals color="#BE6464"></FaEquals></ListGroup.Item>
      )})}
                
    </ListGroup>
  );
}

export default TagList;