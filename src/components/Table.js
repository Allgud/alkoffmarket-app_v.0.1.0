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
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => removeItem(item.id)}
                        >           <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                    </span> 
                                </button>
                            </td>
                        </tr>
                ))} 
            </tbody>
        </table>
    )
}

export default Table