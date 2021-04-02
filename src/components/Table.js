import React, { useContext } from 'react'
import { FirebaseContext } from '../context/firebase/firebaseContext'

import icons from '../icons'


const Table = () => {

    const checkHadler = e => {
        const elem = e.currentTarget
        const input = elem.querySelector('input')
        const isChecked = input.hasAttribute("checked")
        if(!isChecked){
            input.setAttribute("checked", "checked")
            //До функции создать стили и применить здесь. Не забыть написать обратные стили
            elem.style.opacity = 0.5

        } else {
            input.removeAttribute("checked", "checked")
            elem.style.opacity = 1
        }
    }

    const {list, removeItem} = useContext(FirebaseContext)

    return (
        <table className="table table-striped">
            <thead className="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Bin</th>
                    <th scope="col">
                       {icons.checkButton}
                    </th>
                </tr>
            </thead>
            <tbody>
                {list.map(item => (
                        <tr 
                            key={item.id} 
                            className={`table-${item.t}`}
                            onClick={checkHadler}
                        >
                            <th scope="row">{item.i}</th>
                            <td>{item.title}</td>
                            <td>{item.date}</td>
                            <td>
                                <button 
                                type="button" 
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => removeItem(item.id)}
                        >           <span>
                                        {icons.delButton}
                                    </span> 
                                </button>
                            </td>
                            <td>
                                <div className="ml-3 pt-1">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox"
                                    />
                                </div>
                            </td>
                        </tr>
                ))} 
            </tbody>
        </table>
    )
}

export default Table