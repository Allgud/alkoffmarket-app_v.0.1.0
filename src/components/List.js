import React, {useContext} from 'react'
import { FirebaseContext } from '../context/firebase/firebaseContext'

const List = () => {

    const {list} = useContext(FirebaseContext)


    return (
        <ul className="list-group">
            {list.map(item => (
                    <li key={item.id} className="list-group-item list_item" >
                        <strong className="item_title"><span className="item_title_num">{item.id}</span>{item.title}</strong>
                        <span className="item_date">{item.date}</span>
                    </li> 
            ))}
        </ul>
    )
}

export default List