import React from '../node_modules/react'

export default function Form (props) {
    const { values, change, submit, disabled, errors} = props

    const submitEvt = event => {
        event.preventDefault()
        submit()
    }

    const changeEvt = event => {
        const { name, value, type, checked } = event.target
        const useThis = type === 'checkbox' ? checked : value
        change(name, useThis)
    }

    return (
        <form onSubmit={submitEvt}>
            <h2>Add User</h2>
            <button disabled = {disabled}>Submit</button>
            <div>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.pw}</div>
                <div>{errors.tos}</div>
            </div>
            <label>Name
                <input 
                name = 'name'
                type = 'text'
                value = {values.name}
                onChange={changeEvt}
                />
            </label>
            <label>Email
                <input 
                name = 'email'
                type = 'email'
                value = {values.email}
                onChange={changeEvt}
                />
            </label>
            <label>Password
                <input 
                name = 'pw'
                type = 'password'
                value = {values.pw}
                onChange={changeEvt}
                />
            </label>
            <label>Accept TOS?
                <input 
                name = 'tos'
                type = 'checkbox'
                checked = {values.tos}
                onChange={changeEvt}
                />
            </label>
        </form>
    )
}