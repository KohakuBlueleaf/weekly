const initTagsState = {
    tagsAddModalShow: false,
};

const tagsReducer = (state = initTagsState, action) => {
    switch (action.type) {
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
      default:
        return state;
    }
  };
  
  export default tagsReducer;