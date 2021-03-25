import React, {useContext} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import { FirebaseContext } from '../context/firebase/firebaseContext'

const List = () => {

    const {list} = useContext(FirebaseContext)


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
                    </li>
                </CSSTransition>
                
            ))}
        </TransitionGroup>
    )
}

export default List