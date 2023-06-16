import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";

import { addMessage, cleanMessage } from '../store/posts/actions';


const TagsTodo = () => {
  const [user, authStatus] = useOutletContext();
  const posts = useSelector((state) => state.post.messages);
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    const newMessage = 'New message'; // 在實際應用中，這裡可以根據實際需求獲取使用者輸入等
    dispatch(addMessage(newMessage));
  };

  const handleCleanMessage = () => {
    dispatch(cleanMessage());
  }

  //Will be executed when this component be rendered
  useEffect(()=>{
    console.log(user, authStatus);
  })

  return (
    <div>
      <h1>Settings</h1>
      <p>This is tags todo page</p>
    </div>
  );
};

export default TagsTodo;