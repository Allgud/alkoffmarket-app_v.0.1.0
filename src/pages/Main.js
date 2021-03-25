import React, {Fragment, useContext, useEffect} from 'react'
//import List from '../components/List'
import Table from '../components/Table'
import Loader from '../components/Loader'
import { FirebaseContext } from '../context/firebase/firebaseContext'

const Main = () => {

const {loading, fetchFilteredItems} = useContext(FirebaseContext)

useEffect(() => {
    fetchFilteredItems()
    // eslint-disable-next-line
},[])

    return (
        <Fragment>
            {
                loading
                ? <Loader />
                : <Table />
            }
           
        </Fragment>
    )
}

export default Main