"use client"

import React, {useState, useEffect} from 'react'

export default function since({props}) {
  const [time, setTime] = useState(props.time);
  const [since, setSince] = useState(props.since);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const daysSince = Math.floor((time.valueOf() - since.valueOf()) / (24 * 60 * 60 * 1000));
  console.log(daysSince);
 
  return ( 
    <div>
      <p>Days since last eaten: {daysSince} </p>
    </div>
  )
}
