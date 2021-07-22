import './App.css';
import React, { useState, useEffect } from '../node_modules/react'
import axios from '../node_modules/axios'
import schema from './Schema'
import { reach } from 'yup'

import Form from './Form'
import User from './User'

const initialVals = {
  name:'',
  email:'',
  pw:'',
  tos: false
}

const initialErrors = {
  name:'',
  email:'',
  pw:''
}

const initialUsers = []
const initialDisabled = true

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formVals, setVals] = useState(initialVals)
  const [formErrs, setErrs] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postUser = newUser => {
    axios.post('https://reqres.in/api/users',newUser)
    .then (res => {
      console.log(res.data)
      setUsers([res.data,...users])
    })
    .catch(err => console.log(err))
    .finally(() => setVals(initialVals))
  }

  const validate = (name, val) => {
    reach(schema,name)
    .validate(val)
    .then(() => setErrs({...formErrs,[name]:''}))
    .catch(err => setErrs({...formErrs,[name]:err.errors[0]}))
  }

  const inputEvt = (name, val) => {
    validate(name,val)
    setVals({
      ...formVals,[name]:val
    })
  }

  const submitForm = () => {
    const newUser = {
      name:formVals.name.trim(),
      email:formVals.email.trim(),
      pw:formVals.pw,
      tos:formVals.tos
    }

    postUser(newUser)
  }

  useEffect(() => {
    schema.isValid(formVals)
    .then(valid => setDisabled(!valid))
  }, [formVals])

  return (
    <div className="App">
      <h1>Users Form</h1>

      <Form values = {formVals} change={inputEvt} submit={submitForm} disabled={disabled} errors={formErrs} />

      {
        users.map(user => {
          return ( <User key = {user.id} info = {user} />)
        })
      }
    </div>
  );
}

export default App;
