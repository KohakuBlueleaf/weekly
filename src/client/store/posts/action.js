import { createEvent as createEventFromApi } from "../../api/event"
import { listEvents as listPostsFromApi } from "../../api/event"

export const addMessage = (message) => ({
  type: 'ADD_MESSAGE',
  payload: message,
});

export const cleanMessage = () => ({
  type: 'CLEAN_MESSAGE',
})

export function endListEvents(events) {
  return {
    type: 'END_LIST_POSTS',
    events
  }
}

export function listEvents() {
  return (dispatch, getState) => {
    // dispatch(startLoading());
    return listPostsFromApi(/*searchText*/).then(events => {
        dispatch(endListEvents(events));
    }).catch(err => {
        console.error('Error listing posts', err);
    }).then(() => {
        // dispatch(endLoading())
    });
};
}

export function createEvent(eventdata/*, filter*/) {
  return (dispatch, getState) => {
      // dispatch(startLoading());
      return createEventFromApi(eventdata).then(events => {
          dispatch(listEvents());
      }).catch(err => {
          console.error('Error creating posts', err);
      }).then(() => {
          // dispatch(endLoading())
      });
  };
};

// event action
export function setInput(input) {
  return {
    type: 'SET_INPUT',
    input
  }
}