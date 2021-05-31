import { ADD_ITEM, FETCH_ITEMS, REMOVE_ITEM, SHOW_LOADER, FETCH_FILTERED_ITEMS, REMOVE_CHEKED_ITEMS } from "../types"

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_ITEM]: (state, {payload}) => ({
        ...state, 
        list:[...state.list, payload]
    }),
    [FETCH_ITEMS]: (state, {payload}) => ({...state, list: payload, loading:false}),
    [FETCH_FILTERED_ITEMS]: (state, {payload}) => ({...state, list: payload, loading:false}),
    [REMOVE_ITEM]: (state, {payload}) => ({
        ...state,
        list: state.list.filter(li => li.id !== payload)
    }),
    [REMOVE_CHEKED_ITEMS]: (state,{payload}) => ({
        ...state,
        list: state.list.filter(item => item.id !== payload)
    }),
    DEFAULT: state => state
}


export const firebaseReducer = (state,action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}