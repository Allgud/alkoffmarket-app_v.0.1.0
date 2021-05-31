import React, {useReducer} from 'react'
import moment from 'moment'
import axios from 'axios'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { ADD_ITEM, FETCH_ITEMS, REMOVE_ITEM, SHOW_LOADER, FETCH_FILTERED_ITEMS } from '../types'

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

    const fetchFilteredItems = async () => {
        showLoader()
        const res = await axios.get(`${url}/list.json`)

        const result = Object.keys(res.data).map((key, index) => {
            return {
                ...res.data[key],
                id: key,
                i: index,
                t: '',
                c: false
            }
        })
        let now = moment().format('YYYY-MM-DD')

        for(let i = 0; i < result.length; i++) {
            const diff = moment(result[i].date).diff(now, 'days')
            if( diff >= 90){
                result[i].t = 'success'
            }else if(diff <= 60){
                result[i].t = 'danger'
            }else {
                result[i].t = 'warning'
            } 
        }
        
        const payload = result.filter(item => moment(item.date).diff(now, 'days') <= 90)

        dispatch({
            type: FETCH_FILTERED_ITEMS,
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
            showLoader, addItem, fetchItems, removeItem, fetchFilteredItems,
            loading: state.loading,
            list: state.list
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}
