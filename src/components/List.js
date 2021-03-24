import React, {useContext} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import { FirebaseContext } from '../context/firebase/firebaseContext'

const List = () => {

    const {list, removeItem} = useContext(FirebaseContext)

    return (
        <TransitionGroup component='ul' className="list-group">
            {list.map(item => (
                <CSSTransition 
                    key={item.id}
                    classNames={'item'}
                    timeout={1000}
                >
                    <li className="list-group-item list_item" >
                        <strong className="item_title"><span className="item_title_num">{item.id}</span>{item.title}</strong>
                        <span className="item_date">{item.date}</span>
                        <button 
                            type="button" 
                            className="btn btn-outline-danger btn-sm btn_item"
                            onClick={() => removeItem(item.id)}
                        >
                            &times;
                        </button>
                    </li>
                </CSSTransition>
                
            ))}
        </TransitionGroup>
    )
}

export default List