import React, {useContext} from 'react'
import {CSSTransition} from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContext'
import icons from '../icons'

const Alert = () => {

    const {alert, hideAlert, autoHide} = useContext(AlertContext)

    return (
        <CSSTransition
            in={alert.visible}
            timeout={750}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible d-flex justify-content-between`}>
                <strong>Внимание</strong> {alert.text}
                <button 
                    onClick={hideAlert || autoHide}  
                    type="button" 
                    className="btn-close" 
                    aria-label="Close">
                        <span className="br-5" aria-hidden="true">{icons.delButton}</span>
                </button>
            </div>
        </CSSTransition>
        
    ) 
}

export default Alert