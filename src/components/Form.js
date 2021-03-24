import React from 'react'

const Form = () => {
    return (
        <form>
            <div className="input-group pt-2">
                <span className="input-group-text input_group_label">Name and Date</span>
                <span className="input_name"><input type="text" aria-label="Name" className="form-control" /></span>
                <span className="input_date"><input type="date" aria-label="Date" className="form-control" /></span>
                <button type="button" className="btn-primary btn_save">Save</button>
            </div>
        </form>   
    )
}

export default Form