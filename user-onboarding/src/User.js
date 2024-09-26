import React from 'react'

export default function User({info}) {
    if (!info) {
        return <h2>Getting user info...</h2>
    }

    return (
        <div>
          <h2>{info.name}</h2>
          <p>Email: {info.email}</p>
          <p>Password: {info.pw}</p>
          <p>Accepted TOS: {info.tos ? 'Accepted' : 'Has not accepted'}</p>
        </div>
      )
}