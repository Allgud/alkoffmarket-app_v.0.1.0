import React, {useState, useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'


const Form = () => {

        const [ value, setValue ] = useState('')

        const [date, setDate] = useState('')

        const alert = useContext(AlertContext)

        const firebase = useContext(FirebaseContext)

        const submitHandler = event => {
            event.preventDefault()

            if(value.trim() && date){
                firebase.addItem(value.trim(), date).then(() => {
                    alert.showAlert('Added to list ' + value + ' ' + date , 'success')
                }).catch(() => {
                    alert.showAlert('Something wrong', 'danger')
                })
                setValue('')
                setDate('')
            }else{
                alert.showAlert('No empty inputs')
            }
        }

    return (
        <form onSubmit={submitHandler}>
            <div className="input-group pt-2">
                <span className="input-group-text input_group_label">Name and Date</span>
                <span className="input_name">
                    <input 
                        type="text" 
                        aria-label="Name" 
                        className="form-control" 
                        value={value} 
                        onChange={e => setValue(e.target.value)}
                    />
                </span>
                <span className="input_date">
                    <input 
                        type="date" 
                        aria-label="Date" 
                        className="form-control" 
                        value={date} 
                        onChange={e => setDate(e.target.value)}
                    />
                </span>
                <button 
                    type="button"   
                    className="btn-primary btn_save"
                    onClick={submitHandler}
                    >Save
                </button>
            </div>
        </form>   
    )
}

export default Form