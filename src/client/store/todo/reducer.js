const initTodoState = {
  todo: [],
  completed: false,
  title: '',
  year: -1,
  month: -1,
  day: -1,
  weekday: -1,
  tags: [],
  addModalShow: false,
  filterModalShow: false,
  completedShowFilter: true,
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
      case 'TODO_FILTER_COMPLETED_TOGGLE':
        return {
          ...state,
          completedShowFilter: !state.completedShowFilter,
        }
      default:
        return state;
    }
  };
  
  export default todoReducer;