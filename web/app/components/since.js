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

  let timeSinceEaten;
  if (lastEaten) {
    timeSinceEaten = Math.floor((now - lastEaten) / 1000);
  }

  return (
    <div>
      <p suppressHydrationWarning={true}>
        {lastEaten
          ? `Seconds since last eaten: ${timeSinceEaten < 0 ? 0 : timeSinceEaten}`
          : "Never Eaten"}
      </p>
    </div>
  );
}
