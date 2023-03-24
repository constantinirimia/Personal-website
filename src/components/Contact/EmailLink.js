import React, { useState, useEffect, useRef } from "react";

const messages = [
  "",
  "Hi, I am Constantin! I am a software engineer with a deep passion for " +
    "Artificial Intelligence and Machine Learning. I'm always on the lookout for " +
    "exciting new ideas to collaborate on, so if you have any, " +
    "please don't hesitate to get in touch with me. I'm open to discussing anything " +
    "related to my areas of expertise, and I'm always happy to help in any way I can. " +
    "Feel free to click on any of these icons below to connect with me and start networking! " +
    "Talk to you soon! ",
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
    return () => {}; // pass linter
  }, [delay]);
};

const EmailLink = () => {
  const hold = 1;
  const delay = 13;

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

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
    <div
      className="textarea"
      style={{ fontFamily: "Hanalei Fill", fontSize: 20 }}
    >
      <span>{message}</span>
    </div>
  );
};

export default EmailLink;
