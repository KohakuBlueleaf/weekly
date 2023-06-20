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

export function timeLineModalToggle(item) {
  console.log("itemskdaslkdnaskldns", item)
  return {
    type: 'TIME_LINE_MODAL_TOGGLE',
    item
  }
}

export function timeLineModalClose() {
  return {
    type: 'TIME_LINE_MODAL_CLOSE'
  }
}

export function timeLineTitleModalToggle() {
  return {
    type: 'TIME_LINE_TITLE_MODAL_TOGGLE'
  }
}

export function timeLineTitleModalClose() {
  return {
    type: 'TIME_LINE_TITLE_MODAL_CLOSE'
  }
}

export function homeEventFilterToggle() {
  return {
    type: 'HOME_EVENT_FILTER_TOGGLE',
  }
}

export function homeRoutineFilterToggle() {
  return {
    type: 'HOME_ROUTINE_FILTER_TOGGLE',
  }
}

// event action
// export function setTitle(title) {
//   return {
//     type: 'SET_TITLE',
//     title
//   }
// }

// export function setDateYear(date_year) {
//   return {
//     type: 'SET_DATE_YEAR',
//     date_year
//   }
// }

// export function setDateMonth(date_month) {
//   return {
//     type: 'SET_DATE_MONTH',
//     date_month
//   }
// }

// export function setDateDay(date_day) {
//   return {
//     type: 'SET_DATE_DAY',
//     date_day
//   }
// }

// export function setWeek(week) {
//   return {
//     type: 'SET_WEEK',
//     week
//   }
// }

// export function settimeStart(timeStart) {
//   return {
//     type: 'SET_TIME_START',
//     timeStart
//   }
// }

// export function settimeEnd(timeEnd) {
//   return {
//     type: 'SET_TIME_END',
//     timeEnd
//   }
// }

// export function setTags(tags) {
//   return {
//     type: 'SET_TAGS',
//     tags
//   }
// }

// export function setLocation(location) {
//   return {
//     type: 'SET_LOCATION',
//     location
//   }
// }