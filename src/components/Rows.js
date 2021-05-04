import React from 'react'
import './Rows.css'

export default function Rows({title, fetchUrl}) {
    return (
        <div className='row'>
            <h2>{title}</h2>
        </div>
    )
}
