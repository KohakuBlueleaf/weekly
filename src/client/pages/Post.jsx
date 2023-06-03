import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext, useNavigate } from "react-router-dom";

import { addMessage, cleanMessage } from '../store/posts/actions';


const Post = () => {
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
      <h1>Welcome to the React App!</h1>
      <p>This is a simple chat room web app.</p>
      <button onClick={handleSendMessage}>Send Message</button>
      <button onClick={handleCleanMessage}>Clean Message</button>
      <ul>
        {posts.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;