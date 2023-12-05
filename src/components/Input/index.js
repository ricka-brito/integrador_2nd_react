import React, { useState } from 'react'
import './input.css'

export default function Input({placeholder, id, formater, value, maxlength, className}) {


    return (
        <div class={`form__group field ${className}`}>
            <input value={value} onChange={(e) => formater(e.target.value)} type="input" class="form__field" placeholder={placeholder} name={id} id={id} required maxlength={maxlength} />
            <label for="cpf" class="form__label">{placeholder}</label>
        </div>
    )
}
