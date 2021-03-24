import React, {Fragment, useContext, useEffect} from 'react'
import List from '../components/List'
import Loader from '../components/Loader'
import { FirebaseContext } from '../context/firebase/firebaseContext'

const Main = () => {

const {loading, fetchItems} = useContext(FirebaseContext)

useEffect(() => {
    fetchItems()
    // eslint-disable-next-line
},[])

    return (
        <Fragment>
            {
                loading
                ? <Loader />
                : <List />
            }
           
        </Fragment>
    )
}

export default Main