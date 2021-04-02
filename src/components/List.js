import React, {useContext} from 'react'
import { FirebaseContext } from '../context/firebase/firebaseContext'

import icons from '../icons'

const List = () => {

    const {list, removeItem} = useContext(FirebaseContext)


    return (
        <ul className="list-group">
            {list.map(item => (
                    <li key={item.id} className="list-group-item list_item" >
                        <span className="item_title_num">{item.id}</span><strong className="item_title">{item.title}</strong>
                        <span className="item_date">{item.date}</span>
                        <button 
                                type="button" 
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => removeItem(item.id)}
                        >           <span>
                                        {icons.delButton}
                                    </span> 
                                </button>
                    </li> 
            ))}
        </ul>
    )
}

export default List