import React, { useState, useEffect } from "react";

export default function Since({ props }) {
  const [time, setTime] = useState(new Date());


  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // const daysSince = Math.floor((time - since) / (1000 * 24 * 60 * 60));
  const secondsSince = props
    ? Math.floor((time - props) / 1000)
    : "Never Eaten";

  return (

    <div>
      {/* <p>{since ? `Days since last eaten: ${daysSince < 0 ? 0 : daysSince}` : 'Never eaten' }</p> */}
      {/* <p>{since ? `Seconds since last eaten: ${secondsSince < 0 ? 0 : secondsSince}` : 'Never eaten' }</p> */}
      <p>{`Seconds since last eaten: ${secondsSince < 0 ? 0 : secondsSince}`}</p>
    </div>
  );
}
