import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import EventList from '../components/EventList';
import EventAddModal from '../components/EventAddModal';
import EventFilterModal from '../components/EventFilterModal';
import { toEvent } from '../store/event/action';

function Event() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toEvent());
  })

  return (
    <div>
      <EventList></EventList>
      <EventFilterModal/>
      <EventAddModal/>
    </div>
  )
}

export default Event;