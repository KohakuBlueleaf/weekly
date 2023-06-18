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

export function listTags(filter) {
  return (dispatch, getState) => {
      // dispatch(startLoading());
      return listTagsFromApi(filter).then(posts => {
          // dispatch(endListPosts(posts));
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
      return createTagFromApi(title, tag, time, type, repeat, filter).then(posts => {
          dispatch(listTags(filter));
      }).catch(err => {
          console.error('Error creating tag', err);
      }).then(() => {
          // dispatch(endLoading())
      });
  };
};