import React, { useState, useEffect, useRef } from "react";

const messages = [
  "Hi",
  "Hello",
  "Hola",
  "Buna ziua",
  "Ni hao ma",
  "Welcome to my page",
  "You can contact me to ask me anything!",
  "Really !!!",
  "Well, not really anything. But most things",
  "You can ask me for example... ",
  "what is the shortest path from any given node to each node in a connected graph",
  "or how to reverse a linked list",
  "or what is my favorite travel destination so far",
  "You get the idea",
  "I am here waiting for your message",
  "Talk to you soon",
  "Thanks",
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
  const hold = 50;
  const delay = 50;

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
      className="inline-container"
      style={{ fontFamily: "Hanalei Fill", fontSize: 20 }}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => idx < messages.length && setIsActive(true)}
    >
      <span>{message}</span>
    </div>
  );
};

export default EmailLink;
