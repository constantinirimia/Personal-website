import React, { useEffect, useState } from "react";

const NOTAMS = [
  "WX — turbulence expected whenever a model meets production",
  "RWY — the happy path is closed; plan the missed approach",
  "OPS — checklists beat heroics. every time",
  "NAV — heading 360 on hard problems; no reporting point for ego",
  "SEC — position is not on this frequency",
  "SYS — if it cannot fail loudly, it is not ready",
];

const Notams = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((n) => (n + 1) % NOTAMS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="notam" aria-live="polite">
      <span>notam</span>
      {NOTAMS[idx]}
    </p>
  );
};

export default Notams;
