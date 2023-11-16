"use client"

import React, {useState, useEffect} from 'react'

export default function since({props}) {
  const [time, setTime] = useState(props.time);
  let { since } = props;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const daysSince = Math.floor((time - since) / (1000 * 24 * 60 * 60));
 
  return ( 
    <div>
      <p>{since ? `Seconds since last eaten: ${daysSince}` : 'Never eaten' }</p>
      {/* <p>{`Since: ${since}`}</p>
      <p>{`Time: ${time}`}</p> */}
    </div>
  )
}