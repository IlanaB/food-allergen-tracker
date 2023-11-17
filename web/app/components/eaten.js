import React from 'react'

export default function eaten({ props }) {

  const { updater, sorter, title } = props;

  return (
    <div>
      <button onClick={() => {
        updater(new Date());
        sorter(title);
      }}>
        Fed
      </button>
    </div>
  )
}
