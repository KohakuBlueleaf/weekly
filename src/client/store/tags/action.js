import { createTag as createTagFromApi } from "../../api/tag";
import { listTags as listTagsFromApi } from "../../api/tag";

export function tagsAddToggle() {
  return {
    type: 'TAGS_ADD_TOGGLE'
  }
}

export function tagsAddClose() {
  return {
    type: 'TAGS_ADD_CLOSE'
  }
}

export function tagsThemeToggle() {
  return {
    type: 'TAGS_THEME_TOGGLE'
  }
}

export function tagsThemeClose() {
  return {
    type: 'TAGS_THEME_CLOSE'
  }
}

export function endListTags(tags) {
  return {
    type: 'END_LIST_TODOS',
    tags
  }
}

export function listTags() {
  return (dispatch, getState) => {
      // dispatch(startLoading());
      return listTagsFromApi(/*filter*/).then(tags => {
          dispatch(endListTags(tags));
      }).catch(err => {
          console.error('Error listing tags', err);
      }).then(() => {
          // dispatch(endLoading())
      });
  };
};

export function createTag(information, filter) {
  return (dispatch, getState) => {
      // dispatch(startLoading());
      return createTagFromApi(tagdata).then(posts => {
          dispatch(listTags(filter));
      }).catch(err => {
          console.error('Error creating tag', err);
      }).then(() => {
          // dispatch(endLoading())
      });
  };
};

export function setInput(input) {
  return {
    type: 'SET_INPUT',
    input
  }
}