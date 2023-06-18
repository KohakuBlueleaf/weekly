export function addToggle() {
  return {
    type: 'HOME_ADD_TOGGLE'
  }
}

export function addClose() {
  return {
    type: 'HOME_ADD_CLOSE'
  }
}

export function filterToggle() {
  return {
    type: 'HOME_FILTER_TOGGLE'
  }
}

export function filterClose() {
  return {
    type: 'HOME_FILTER_CLOSE'
  }
}



export function createEvent(eventdata, filter) {
  return (dispatch, getState) => {
      // dispatch(startLoading());
      return createEventFromApi(eventdata).then(posts => {
          dispatch(listEvents(filter));
      }).catch(err => {
          console.error('Error creating posts', err);
      }).then(() => {
          // dispatch(endLoading())
      });
  };
};

// event action
export function setTitle(title) {
  return {
    type: 'SET_TITLE',
    title
  }
}

export function setDateYear(date_year) {
  return {
    type: 'SET_DATE_YEAR',
    date_year
  }
}

export function setDateMonth(date_month) {
  return {
    type: 'SET_DATE_MONTH',
    date_month
  }
}

export function setDateDay(date_day) {
  return {
    type: 'SET_DATE_DAY',
    date_day
  }
}

export function setWeek(week) {
  return {
    type: 'SET_WEEK',
    week
  }
}

export function settimeStart(timeStart) {
  return {
    type: 'SET_TIME_START',
    timeStart
  }
}

export function settimeEnd(timeEnd) {
  return {
    type: 'SET_TIME_END',
    timeEnd
  }
}

export function setTags(tags) {
  return {
    type: 'SET_TAGS',
    tags
  }
}

export function setLocation(location) {
  return {
    type: 'SET_LOCATION',
    location
  }
}