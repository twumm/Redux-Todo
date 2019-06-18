import React from 'react'

export default function Todo({ task, completed }) {
  return (
    <div>
      <h5>{task}</h5>
      <p>{completed}</p>
    </div>
  )
}
