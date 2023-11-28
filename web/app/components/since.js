"use client"

import React, {useState, useEffect} from 'react'

export default function Since({props}) {
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

  // const daysSince = Math.floor((time - since) / (1000 * 24 * 60 * 60));
  const secondsSince = Math.floor((time - since) / (1000));
 
  return ( 
    <div>
      {/* <p>{since ? `Days since last eaten: ${daysSince < 0 ? 0 : secondsSince}` : 'Never eaten' }</p> */}
      <p>{since ? `Seconds since last eaten: ${secondsSince < 0 ? 0 : secondsSince}` : 'Never eaten' }</p>
    </div>
  )
}
