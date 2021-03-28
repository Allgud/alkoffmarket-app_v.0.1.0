import React, { useContext } from 'react'
import { FirebaseContext } from '../context/firebase/firebaseContext'


const Table = () => {

    const {list, removeItem} = useContext(FirebaseContext)

    return (
        <table className="table table-striped">
            <thead className="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Bin</th>
                </tr>
            </thead>
            <tbody>
                {list.map(item => (
                        <tr key={item.id} className={`table-${item.t}`}>
                            <th scope="row">{item.i}</th>
                            <td>{item.title}</td>
                            <td>{item.date}</td>
                            <td>
                                <button 
                                type="button" 
                                className="btn btn-outline-danger btn-sm btn_item"
                                onClick={() => removeItem(item.id)}
                        >
                                    &times;
                                </button>
                            </td>
                        </tr>
                ))} 
            </tbody>
        </table>
    )
}

export default Table