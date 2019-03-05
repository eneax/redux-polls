// Action (the event that will occur)
export const RECEIVE_USERS = 'RECEIVE_USERS'

// Action Creator (it will update the state based on the action)
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}
