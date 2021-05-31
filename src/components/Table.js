import React, { useContext, useState } from 'react'
import { FirebaseContext } from '../context/firebase/firebaseContext'

import icons from '../icons'



const Table = () => {

    const {list, removeItem} = useContext(FirebaseContext)

    const [value, setValue] = useState()

    const checkHandler = e => {
        const elem = e.currentTarget
        const input = elem.querySelector('input')
        const isChecked = input.hasAttribute("checked")
        if(!isChecked && !value) {
            input.setAttribute("checked", "")
            elem.style.opacity = 0.5
            elem.style.textDecoration = "line-through"
            setValue(!value)
        }else {
            input.removeAttribute("checked")
            elem.style.opacity = 1
            elem.style.textDecoration = "none"
        }
    }
  

    return (
        <table className="table table-striped">
            <thead className="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Bin</th>
                    <th scope="col">
                       <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => console.log(list)}
                       >
                           {icons.checkButton}
                       </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {list.map(item => (
                        <tr 
                            key={item.id} 
                            className={`table-${item.t} table_item`}
                            onClick={checkHandler}
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
                                <div className='ml-3 pt-1'>
                                    <input  
                                        type="checkbox"
                                        checked={item.c}
                                        onChange={() => setValue(item.c = !item.c)}
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