import React, {Fragment} from 'react'
import Form from '../components/Form'
import List from '../components/List'
import Alert from '../components/Alert'

const items = [
    {id: 1, title: 'Baltika 3', date: '23.12.83'},
    {id: 2, title: 'Baltika 7', date: '25.12.83'},
    {id: 3, title: 'Baltika 8', date: '27.12.83'}
]

const Add = () => {
    return (
        <Fragment>
            <Form />
            <hr />
            <List items={items}/>
        </Fragment>
    )
}

export default Add