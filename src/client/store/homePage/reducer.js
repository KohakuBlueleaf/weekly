const initHomePageState = {
    addModalShow: false,
    filterModalShow: false,
};

const homePageReducer = (state = initHomePageState, action) => {
  switch (action.type) {
    case 'HOME_ADD_TOGGLE':
      return {
        ...state,
        addModalShow: true,
      }
    case 'HOME_ADD_CLOSE':
      return {
        ...state,
        addModalShow: false,
      }
    case 'HOME_FILTER_TOGGLE':
      return {
        ...state,
        filterModalShow: true,
      }
    case 'HOME_FILTER_CLOSE':
      return {
        ...state,
        filterModalShow: false,
      }
    default:
      return state;
  }
};

const initAddModalState = {
  title: '',
  date_year: -1,
  date_month: -1,
  date_day: -1,
  week: -1,
  timeStart: -1,
  timeEnd: -1,
  tags: '',
  location: '',
}

export const addModalReducer = (state = initAddModalState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        title: action.title,
      }
    case 'SET_DATE_YEAR':
      return {
        ...state,
        date_year: action.date_year,
      }
    case 'SET_DATE_MONTH':
      return {
        ...state,
        date_month: action.date_month,
      }
    case 'SET_DATE_DAY':
      return {
        ...state,
        date_day: action.date_day,
      }
    case 'SET_WEEK':
      return {
        ...state,
        week: action.week,
      }
    case 'SET_TIME_START':
      return {
        ...state,
        timeStart: action.timeStart,
      }
    case 'SET_TIME_END':
      return {
        ...state,
        timeEnd: action.timeEnd,
      }
    case 'SET_TAGS':
      return {
        ...state,
        tags: action.timeEnd,
      }
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.timeEnd,
      }
    default:
      return state;
  }
}

export default homePageReducer;