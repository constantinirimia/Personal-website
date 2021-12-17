import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const divisor = 1000 * 60 * 60 * 24 * 365.2421897;
const birthTime = new Date("1992-06-07T09:24:00");

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
      (((Date.now() - birthTime) / divisor) * 365 * 10 * 60).toFixed(3)
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

const data = [
  {
    key: "age",
    label: "Current age",
    value: <Age />,
  },
  {
    key: "coding",
    label: "Minutes Coding",
    value: <Coding />,
  },
  {
    key: "timeSlept",
    label: "Hours Slept",
    value: <TimeSlept />,
  },
  {
    key: "countries",
    label: "Countries visited",
    value: (
      <a href="https://www.google.com/maps/d/u/2/edit?mid=1qdMAwmzsl4e_JyVuC4dIOBhBEVAnOLBu&usp=sharing">
        <Button variant="primary" size="sm" color="#ff5c5c">
          {" "}
          11 - see on World Map{" "}
        </Button>
      </a>
    ),

    link: "https://www.google.com/maps/d/u/2/edit?mid=1qdMAwmzsl4e_JyVuC4dIOBhBEVAnOLBu&usp=sharing",
  },
  {
    key: "location",
    label: "Current city",
    value: "Chicago",
  },
];

// Sleep - 26 years
// Trying to fall asleep - 7 years
// Time at work - 13 years
// Exercising - 1 year and 4 months
// coding

export default data;
