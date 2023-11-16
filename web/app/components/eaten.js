import React from 'react'

export default function eaten({props}) {

  return (
    <div>
      <button onClick={() => {
        props.updater(new Date())
      }}>
        Fed
      </button>
    </div>
  )
}
