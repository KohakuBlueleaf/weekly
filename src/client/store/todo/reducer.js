const initTodoState = {
  todo: [{id: -1, title: 'ss demo3', year: 2023, month: 6, day: 18, tags: ''},
  {id: -1, title: 'ss demo3', year: 2023, month: 6, day: 19, tags: ''},
  {id: -1, title: 'ss demo3', year: 2023, month: 6, day: 20, tags: ''},
  {id: -1, title: 'ss demo3', year: 2023, month: 6, day: 21, tags: ''},
  {id: -1, title: 'ss demo3', year: 2023, month: 6, day: 22, tags: ''},
  {id: -1, title: 'ss demo3', year: 2023, month: 6, day: 23, tags: ''},
  {id: -1, title: 'ss demo3', year: 2023, month: 6, day: 24, tags: ''},],
  completed: false,
  title: '',
  year: -1,
  month: -1,
  day: -1,
  weekday: -1,
  tags: [],
  addModalShow: false,
  filterModalShow: false,
};

const todoReducer = (state = initTodoState, action) => {
    switch (action.type) {
      case 'SET_INPUT':
        return {
          ...state,
          completed: action.input.completed,
          title: action.input.title,
          year: action.input.date_year,
          month: action.input.date_month,
          day: action.input.date_day,
          weekday: action.input.week,
          tags: action.input.tags,
        }
      case 'END_LIST_TODOS':
        return {
          ...state,
          todo: action.todos
        }
      case 'TODO_ADD_TOGGLE':
        return {
          ...state,
          addModalShow: true,
        }
      case 'TODO_ADD_CLOSE':
        return {
          ...state,
          addModalShow: false,
        }
      case 'TODO_FILTER_TOGGLE':
        return {
          ...state,
          filterModalShow: true,
        }
      case 'TODO_FILTER_CLOSE':
        return {
          ...state,
          filterModalShow: false,
        }
      default:
        return state;
    }
  };
  
  export default todoReducer;