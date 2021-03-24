import React, {useReducer} from 'react'
import axios from 'axios'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { ADD_ITEM, FETCH_ITEMS, REMOVE_ITEM, SHOW_LOADER } from '../types'

const url = 'https://alko-app3-default-rtdb.europe-west1.firebasedatabase.app'

export const FirebaseState = ({children}) => {

    const initialState = {
        list: [],
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER}) 

    const fetchItems = async () => {
        showLoader()
        const res = await axios.get(`${url}/list.json`)
        
        const payload = Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        })

        dispatch({
            type: FETCH_ITEMS,
            payload
        })
    }

    const addItem = async (title, date) => {
        const item = {
            title, date, 
        }
        try {
            const res = await axios.post(`${url}/list.json`, item)
            const payload = {
                ...item,
                id: res.data.name
            }
        
        dispatch({
            type: ADD_ITEM,
            payload
        })
        }
        catch (e) {
            throw new Error(e.message)
        }
    }

    const removeItem = async id => {
        await axios.delete(`${url}/list/${id}.json`)

        dispatch({
            type: REMOVE_ITEM,
            payload: id
        })
    }


    return(
        <FirebaseContext.Provider value={{
            showLoader, addItem, fetchItems, removeItem,
            loading: state.loading,
            list: state.list
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}
