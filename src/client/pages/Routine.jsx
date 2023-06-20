import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RoutineAddModal from '../components/RoutineAddModal';
import { toRoutine } from '../store/event/action';

import TimeLineRoutine from '../components/RoutineList';

const Routine = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toRoutine());
  })

  return (
    <div style={{'height': '100%', 'maxHeight': '100%'}}>
      <TimeLineRoutine/>
      <RoutineAddModal/>
    </div>
  )
}

export default Routine;