import React, { useEffect, useState } from "react";
import formatZulu from "../../lib/zulu";

const StatusClock = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="status-clock">
      <span className="status-clock__pulse" />
      {formatZulu(now)}
    </span>
  );
};

export default StatusClock;
