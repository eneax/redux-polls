import { savePoll } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

// Actions
export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'


// Action Creators
export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}

function addPoll (poll) {
  return {
    type: ADD_POLL,
    poll,
  }
}

export function handleAddPoll (poll) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    return savePoll({
      ...poll,
      author: authedUser
    })
      .then((poll) => dispatch(addPoll(poll)))
      .then(() => dispatch(hideLoading()))
  }
}
