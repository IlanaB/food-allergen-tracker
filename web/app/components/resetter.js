import React from 'react'

export default function eaten({ props }) {

  const {name, updater } = props;

  return (
    <div>
      <button onClick={() => {
        updater(name);
      }}>
        Fed
      </button>
    </div>
  )
}
