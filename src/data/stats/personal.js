import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const divisor = 1000 * 60 * 60 * 24 * 365.2421897;
const birthTime = new Date("1992-06-07T09:24:00");
const dateWhenStartedCoding = new Date("2009-06-07T09:24:00");
const dateWhenStartedWorkingFullTime = new Date("2017-06-07T09:24:00");

const Coding = () => {
  const [coding, setCoding] = useState();
  const tick = () => {
    setCoding(
      (
        ((Date.now() - dateWhenStartedWorkingFullTime) / divisor) *
        365 *
        10
      ).toFixed(5)
    );
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 4);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{coding}</>;
};

const LinesOfCode = () => {
  const [lines, setLines] = useState();
  const tick = () => {
    setLines(
      (
        ((Date.now() - dateWhenStartedWorkingFullTime) / divisor) *
        7500
      ).toFixed(5)
    );
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 4);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{lines}</>;
};

const Commits = () => {
  const [commits, setCommits] = useState();
  const tick = () => {
    setCommits(
      (
        ((Date.now() - dateWhenStartedWorkingFullTime) / divisor) *
        260 *
        3
      ).toFixed(5)
    );
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 4);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{commits}</>;
};

const Debugging = () => {
  const [debugging, setDebugging] = useState();
  const tick = () => {
    setDebugging(
      (
        ((Date.now() - dateWhenStartedWorkingFullTime) / divisor) *
        365 *
        6
      ).toFixed(5)
    );
  };
  useEffect(() => {
    const timer = setInterval(() => tick(), 4);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{debugging}</>;
};

const CodeReviews = () => {
  const [reviews, setCodeReviews] = useState();
  const tick = () => {
    setCodeReviews(
      (
        ((Date.now() - dateWhenStartedWorkingFullTime) / divisor) *
        260 *
        2
      ).toFixed(5)
    );
  };
  useEffect(() => {
    const timer = setInterval(() => tick(), 4);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{reviews}</>;
};

const Deployments = () => {
  const [deployments, setDeployments] = useState();
  const tick = () => {
    setDeployments(
      (
        ((Date.now() - dateWhenStartedWorkingFullTime) / divisor) *
        130 *
        1
      ).toFixed(5)
    );
  };
  useEffect(() => {
    const timer = setInterval(() => tick(), 4);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{deployments}</>;
};

const data = [
  {
    key: "coding",
    label: "Hours spent coding ≈",
    value: <Coding />,
  },
  {
    key: "lines",
    label: "Lines of code written ≈",
    value: <LinesOfCode />,
  },
  {
    key: "debugging",
    label: "Hours spent debugging code ≈",
    value: <Debugging />,
  },

  {
    key: "commits",
    label: "Code commits ≈",
    value: <Commits />,
  },
  {
    key: "reviews",
    label: "Code reviews conducted ≈",
    value: <CodeReviews />,
  },
  {
    key: "deployments",
    label: "Succesful deployments ≈",
    value: <Deployments />,
  },
  {
    key: "languages",
    label: "Programming languages used",
    value: 6,
  },

  {
    key: "location",
    label: "Current city",
    value: "Chicago, USA",
  },
];

export default data;
