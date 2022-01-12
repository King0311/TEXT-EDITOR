import React from 'react'

export default function Alert(props) {
    return (
        <div className='height'>
        {props.alertext && <>
         <div className="alert" >
            <strong>{props.alertext.msg}</strong>
        </div> 
        </>}
        </div>
    )
}
