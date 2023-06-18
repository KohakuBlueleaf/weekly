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

