// Action
export const RECEIVE_POLLS = 'RECEIVE_POLLS'

// Action Creator
export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}
