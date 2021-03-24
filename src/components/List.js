import React from 'react'

const List = ({items}) => {
    return (
        <ul className="list-group">
            {items.map(item => (
                <li 
                    className="list-group-item list_item"
                    key={item.id}
                >
                    <strong className="item_title"><span className="item_title_num">{item.id}</span>{item.title}</strong>
                    <span className="item_date">{item.date}</span>
                    <button type="button" className="btn btn-outline-danger btn-sm btn_item">&times;</button>
                </li>
            ))}
        </ul>
    )
}

export default List