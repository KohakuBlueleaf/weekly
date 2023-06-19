const initTagsState = {
  tags:[{id: "1234", title: 'math'}, {id: "5678", title: 'ss'}],
  title: '',
  color: '',
  tagsAddModalShow: false,
  tagsThemeModalShow: false,
};

const tagsReducer = (state = initTagsState, action) => {
    switch (action.type) {
      case 'SET_INPUT':
        return {
          ...state,
          title: action.input.title,
          color: action.input.color,
        }
      case 'END_LIST_TAGS':
        return {
          ...state,
          tags: action.tags
        }
      case 'TAGS_ADD_TOGGLE':
        return {
          ...state,
          tagsAddModalShow: true,
        }
      case 'TAGS_ADD_CLOSE':
        return {
          ...state,
          tagsAddModalShow: false,
        }
      case 'TAGS_THEME_TOGGLE':
        return {
          ...state,
          tagsThemeModalShow: true,
        }
      case 'TAGS_THEME_CLOSE':
        return {
          ...state,
          tagsThemeModalShow: false,
        }
      default:
        return state;
    }
  };
  
  export default tagsReducer;