import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LINES = {
  help:
    "whoami · status · squawk · notam · classified · debrief · clear\n" +
    "about · freq · esc to close",
  whoami: "staff engineer. pilot.",
  status: "green board. no heroics scheduled.",
  squawk: "this frequency is open.",
  notam: "the happy path is closed. fly the procedure.",
  ping: "still here.",
  vector: "heading: the hard problem.",
  classified: "position withheld. time zulu. intentions: continue.",
  location: "position withheld.",
  where: "position withheld.",
  chicago: "nice try.",
  debrief: "the model was accurate. that was the bug.",
};

const ROUTES = {
  about: "/about",
  freq: "/contact",
  contact: "/contact",
  home: "/",
};

const Console = ({ open, onClose }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const inputRef = useRef(null);
  const scroller = useRef(null);
  const [log, setLog] = useState([
    { kind: "sys", text: "stdin. type help. esc closes." },
  ]);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (scroller.current) {
      scroller.current.scrollTop = scroller.current.scrollHeight;
    }
  }, [log]);

  if (!open) {
    return null;
  }

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) {
      return;
    }

    if (cmd === "clear") {
      setLog([]);
      return;
    }

    const next = [{ kind: "in", text: `$ ${raw.trim()}` }];

    if (cmd === "debrief") {
      next.push({ kind: "out", text: LINES.debrief });
      setLog((prev) => prev.concat(next));
      onClose();
      if (pathname === "/") {
        const el = document.getElementById("debrief");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        navigate("/#debrief");
      }
      return;
    }

    if (ROUTES[cmd]) {
      next.push({ kind: "out", text: `→ ${cmd}` });
      setLog((prev) => prev.concat(next));
      onClose();
      navigate(ROUTES[cmd]);
      return;
    }

    next.push({
      kind: "out",
      text: LINES[cmd] || `${cmd}: no joy. try help.`,
    });
    setLog((prev) => prev.concat(next));
  };

  return (
    <div className="deck-console deck-console--overlay" role="dialog" aria-label="Console">
      <div className="deck-console__chrome">
        <span>stdin</span>
        <button type="button" className="deck-console__close" onClick={onClose}>
          esc
        </button>
      </div>
      <div className="deck-console__log" ref={scroller}>
        {log.map((line, i) => (
          <pre key={`${line.kind}-${i}`} className={`deck-console__${line.kind}`}>
            {line.text}
          </pre>
        ))}
      </div>
      <form
        className="deck-console__form"
        onSubmit={(e) => {
          e.preventDefault();
          run(value);
          setValue("");
        }}
      >
        <label htmlFor="deck-cmd">$</label>
        <input
          id="deck-cmd"
          ref={inputRef}
          value={value}
          autoComplete="off"
          spellCheck="false"
          placeholder="help"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Console;
