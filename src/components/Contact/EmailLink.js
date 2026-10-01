import React, { useState, useEffect, useRef } from "react";

const messages = [
  "",
  "If the problem is messy, high-stakes, or sitting at the edge of what a model " +
    "should be allowed to do in production — write me. Same if you just want to talk " +
    "airplanes. cirimia100@gmail.com, or pick a channel below.",
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {};
  }, [delay]);
};

const EmailLink = () => {
  const hold = 1;
  const delay = 16;

  const [idx, updateIter] = useState(0);
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length);
  const [isActive, setIsActive] = useState(true);

  useInterval(
    () => {
      let newIdx = idx;
      let newChar = char;
      if (char - hold >= messages[idx].length) {
        newIdx += 1;
        newChar = 0;
      }
      if (newIdx === messages.length) {
        setIsActive(false);
      } else {
        updateMessage(messages[newIdx].slice(0, newChar));
        updateIter(newIdx);
        updateChar(newChar + 1);
      }
    },
    isActive ? delay : null
  );

  return (
    <div className="textarea">
      <span>{message}</span>
      {isActive ? <span className="prompt__cursor" /> : null}
    </div>
  );
};

export default EmailLink;
