import React, { useEffect, useState } from "react";
import formatZulu from "../../lib/zulu";

const CAREER_START = new Date("2017-06-07T09:24:00Z");
const FIRST_CODE = new Date("2009-06-07T09:24:00Z");

const pad = (n) => String(n).padStart(2, "0");

const formatDuration = (ms) => {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const years = Math.floor(totalSeconds / (365.2425 * 24 * 3600));
  const remainder = totalSeconds - Math.floor(years * 365.2425 * 24 * 3600);
  const days = Math.floor(remainder / 86400);
  const hours = Math.floor((remainder % 86400) / 3600);
  const minutes = Math.floor((remainder % 3600) / 60);
  const seconds = remainder % 60;
  return `${years}y ${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

const useNow = (interval = 1000) => {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), interval);
    return () => clearInterval(id);
  }, [interval]);
  return now;
};

const strips = (now) => [
  {
    pid: "01",
    name: "SHIPD",
    status: "ACTIVE",
    detail: formatDuration(now - CAREER_START),
  },
  {
    pid: "02",
    name: "COMPILE",
    status: "ACTIVE",
    detail: formatDuration(now - FIRST_CODE),
  },
  {
    pid: "03",
    name: "REVIEW",
    status: "ACTIVE",
    detail: "blocking on signal, not on ego",
  },
  {
    pid: "04",
    name: "AVIATE",
    status: "VFR",
    detail: "evenings / weekends · PIC",
  },
  {
    pid: "05",
    name: "NP-HARD",
    status: "HOLD",
    detail: "holding for P = NP",
  },
];

const PersonalStats = () => {
  const now = useNow(1000);
  const rows = strips(now);

  return (
    <div className="telemetry">
      <p className="telemetry__intro">
        Flight computer. All clocks Zulu. Career time since going full-time in
        2017; first byte in 2009.
      </p>

      <div className="metric-grid">
        <article className="metric-card">
          <span className="metric-card__id">time / zulu</span>
          <strong>{formatZulu(now)}</strong>
          <span>universal coordinated</span>
        </article>
        <article className="metric-card">
          <span className="metric-card__id">station</span>
          <strong>REDACTED</strong>
          <span>en route · not on this frequency</span>
        </article>
        <article className="metric-card">
          <span className="metric-card__id">flt time / career</span>
          <strong>{formatDuration(now - CAREER_START)}</strong>
          <span>shipping since 2017</span>
        </article>
        <article className="metric-card">
          <span className="metric-card__id">flt time / first byte</span>
          <strong>{formatDuration(now - FIRST_CODE)}</strong>
          <span>writing code since 2009</span>
        </article>
      </div>

      <div className="proc-table">
        <div className="proc-table__chrome">
          <span>flight strips</span>
          <span className="proc-table__pulse">atis ok · {formatZulu(now)}</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>SEQ</th>
              <th>CALLSIGN</th>
              <th>STAT</th>
              <th>REMARKS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.pid}>
                <td>{row.pid}</td>
                <td>{row.name}</td>
                <td>
                  <span
                    className={`proc-status proc-status--${row.status.toLowerCase()}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td>{row.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PersonalStats;
