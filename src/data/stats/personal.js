import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const divisor = 1000 * 60 * 60 * 24 * 365.2421897;
const birthTime = new Date("1992-06-07T09:24:00");
const dateWhenStartedCoding = new Date("2006-06-07T09:24:00");

const Age = () => {
  const [age, setAge] = useState();
  const tick = () => {
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 4);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const TimeSlept = () => {
  const [timeSlept, setTimeSlept] = useState();
  const tick = () => {
    setTimeSlept((((Date.now() - birthTime) / divisor) * 365 * 8).toFixed(0));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 4);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{timeSlept}</>;
};

const Coding = () => {
  const [coding, setCoding] = useState();
  const tick = () => {
    setCoding(
      (((Date.now() - dateWhenStartedCoding) / divisor) * 365 * 10).toFixed(3)
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

const Debugging = () => {
  const [debugging, setDebugging] = useState();
  const tick = () => {
    setDebugging(
      (((Date.now() - dateWhenStartedCoding) / divisor) * 365 * 6).toFixed(2)
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

const data = [
  {
    key: "age",
    label: "Current age",
    value: <Age />,
  },
  {
    key: "coding",
    label: "Hours spent coding",
    value: <Coding />,
  },
  {
    key: "debugging",
    label: "Hours spent debugging code",
    value: <Debugging />,
  },
  {
    key: "timeSlept",
    label: "Hours Slept",
    value: <TimeSlept />,
  },

  {
    key: "location",
    label: "Current city",
    value: "Chicago, IL",
  },
  {
    label: "Favorite book",
    value: (
      <a href="https://en.wikipedia.org/wiki/Papillon_(book)">
        <button>See it here</button>
      </a>
    ),
  },
  {
    key: "countries",
    label: "Countries visited",
    value: (
      <a href="https://www.google.com/maps/d/u/2/edit?mid=1qdMAwmzsl4e_JyVuC4dIOBhBEVAnOLBu&usp=sharing">
        <button>See Travel Map</button>
      </a>
    ),
  },
];

export default data;
