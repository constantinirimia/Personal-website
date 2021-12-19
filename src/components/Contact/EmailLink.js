import React, { useState, useEffect, useRef } from "react";

const messages = [
  "Hello Hello and Welcome to my page !",
  "I am Constantin. I am a software engineer and I geek on anyhing " +
    "about Artificial Intelligence or Machine Learning. If you have " +
    "some cool ideas about any projects where we can work together " +
    "you can contact me anytime. Also feel free to ask me anything ! " +
    "Really ! ... Well, not really anything. But most things. " +
    "You can ask me for example... what is my favorite searching algorithm " +
    " or how to create an artificial neural network to predict stock market prices. " +
    "You get the idea ! ",
  "Feel free to click on any of these icons below to connect with me and start networking !",
  "Talk to you soon ! Thanks !",
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
  const hold = 60;
  const delay = 45;

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
      style={{ fontFamily: "Hanalei Fill", fontSize: 24 }}
    >
      <span>{message}</span>
    </div>
  );
};

export default EmailLink;
