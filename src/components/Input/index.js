import React, { useState } from 'react'
import './input.css'

export default function Input({placeholder, id, formater, value, maxlength, className, type, readonly, autofocus, onBlur}) {


    return (
        <div class={`form__group field ${className}`}>
            <input onBlur={onBlur} value={value} onChange={(e) => formater(e.target.value)} type={type} class="form__field" placeholder={placeholder} name={id} id={id} required maxlength={maxlength} disabled={readonly} autoFocus={autofocus}/>
            <label for={id} class="form__label">{placeholder}</label>
        </div>
    )
}
