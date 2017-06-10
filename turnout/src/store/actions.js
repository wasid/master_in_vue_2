import * as types from './mutation-types'

export const signIn = ({commit}, user_payload) => {
  commit(types.SIGN_IN, user_payload)
}

export const signOutRush = ({commit}) => {
  commit(types.SIGN_OUT)
}

export const setEventsRush = ({commit}, events_payload) => {
  commit(types.SET_EVENTS, events_payload)
}