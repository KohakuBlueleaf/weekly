import { Style } from 'maplibre-gl';
import React from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar';

const DailyBar = () => {
  const now = 60;
  return <ProgressBar now={now} label={`${now}%`}/>;
}

export default DailyBar;