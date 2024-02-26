import React, { useState, useEffect } from "react";

export default function Since({ lastEaten }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const secondsSince = lastEaten
    ? Math.floor((now - lastEaten) / 1000)
    : "Never Eaten";

  return (
    <div>
      <p suppressHydrationWarning={true}>{`Seconds since last eaten: ${
        secondsSince < 0 ? 0 : secondsSince
      }`}</p>
    </div>
  );
}
