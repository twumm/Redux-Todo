import React from 'react'

export default function TodoForm({ dothis }) {
  return (
    <div>
      <form>
        <input
          name="task"
          placeholder="Enter task"
          onChange={dothis}
        />
      </form>
    </div>
  )
}
