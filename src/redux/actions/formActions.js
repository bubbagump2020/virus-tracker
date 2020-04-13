import * as actions from '../actionTypes'

export const selectState = (payload) => {
    return { type: actions.formActions.stateSelect, payload}
}