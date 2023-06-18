export const addMessage = (message) => ({
  type: 'ADD_MESSAGE',
  payload: message,
});

export const cleanMessage = () => ({
  type: 'CLEAN_MESSAGE',
})

export function listPosts(filter) {
  return (dispatch, getState) => {
      // dispatch(startLoading());
      return listPostsFromApi(filter).then(posts => {
          // dispatch(endListPosts(posts));
      }).catch(err => {
          console.error('Error listing posts', err);
      }).then(() => {
          // dispatch(endLoading())
      });
  };
};

export function createPost(information, filter) {
  return (dispatch, getState) => {
      // dispatch(startLoading());
      return createPostFromApi(title, tag, time, type, repeat, filter).then(posts => {
          dispatch(listPosts(filter));
      }).catch(err => {
          console.error('Error creating posts', err);
      }).then(() => {
          // dispatch(endLoading())
      });
  };
};