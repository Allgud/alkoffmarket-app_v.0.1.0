import { ADD_ITEM, FETCH_ITEMS, REMOVE_ITEM, SHOW_LOADER } from "../types"

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_ITEM]: (state, {payload}) => ({
        ...state, 
        list:[...state.list, payload]
    }),
    [FETCH_ITEMS]: (state, {payload}) => ({...state, list: payload, loading:false}),
    [REMOVE_ITEM]: (state, {payload}) => ({
        ...state,
        list: state.list.filter(li => li.id !== payload)
    }),
    DEFAULT: state => state
}


export const firebaseReducer = (state,action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}