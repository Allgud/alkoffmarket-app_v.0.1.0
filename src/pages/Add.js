import React, {Fragment, useContext, useEffect} from 'react'
import Form from '../components/Form'
import List from '../components/List'
import Loader from '../components/Loader'
import { FirebaseContext } from '../context/firebase/firebaseContext'

const Add = () => {

    const {loading, fetchItems} = useContext(FirebaseContext)

    useEffect(() => {fetchItems()}
    // eslint-disable-next-line
    ,[])
    return (
        <Fragment>
            <Form />
            <hr />
            {loading 
                ? <Loader />
                :  <List />
            }   
        </Fragment>
    )
}

export default Add