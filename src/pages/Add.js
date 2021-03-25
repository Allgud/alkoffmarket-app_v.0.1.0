import React, {Fragment, useContext, useEffect} from 'react'
import Form from '../components/Form'
import List from '../components/List'
import { FirebaseContext } from '../context/firebase/firebaseContext'

const Add = () => {

    const {fetchItems} = useContext(FirebaseContext)

    useEffect(() => {fetchItems()}
    // eslint-disable-next-line
    ,[])
    return (
        <Fragment>
            <Form />
            <hr />
            <List />
            
        </Fragment>
    )
}

export default Add