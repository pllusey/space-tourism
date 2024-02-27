import React, { useState, useEffect } from "react";

const NumberAnimation = ({ finalDistance, finalTime }) => {
  const [currentDistance, setCurrentDistance] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const updateValue = (currentValue, finalValue, setValue, step) => {
    if (currentValue < finalValue) {
      setValue((prevValue) => Math.min(prevValue + step, finalValue));
    } else if (currentValue > finalValue) {
      setValue((prevValue) => Math.max(prevValue - step, finalValue));
    }
  };

  useEffect(() => {
    setCurrentDistance(0);
  }, [finalDistance]);

  useEffect(() => {
    setCurrentTime(0);
  }, [finalTime]);

  useEffect(() => {
    const updateDistance = () => {
      const difference = finalDistance - currentDistance;
      const step = Math.ceil(Math.abs(difference) / 50);
      updateValue(currentDistance, finalDistance, setCurrentDistance, step);
    };
    const intervalRef = setInterval(updateDistance, 12);
    return () => clearInterval(intervalRef);
  }, [currentDistance, finalDistance]);

  useEffect(() => {
    const updateTime = () => {
      const difference = finalTime - currentTime;
      const step = Math.ceil(Math.abs(difference) / 2);
      updateValue(currentTime, finalTime, setCurrentTime, step);
    };
    const intervalRef = setInterval(updateTime, 70);
    return () => clearInterval(intervalRef);
  }, [currentTime, finalTime]);

  const formatDistance = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + " " + "BIL. KM";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + " " + "MIL. KM";
    } else {
      return num.toLocaleString() + " " + "KM";
    }
  };

  const formatTime = (timeInDays) => {
    const years = Math.floor(timeInDays / 365);
    const months = Math.floor((timeInDays % 365) / 30);
    const remainingDays = timeInDays % 30;

    if (years > 0 && months < 12) {
      return `${years} YEARS`
    } else if (months < 12 && months > 0) {
      return `${months} MONTHS`
    } else if (remainingDays > 0) {
      return `${remainingDays} DAYS`
    }
  };

  const formattedDistance = formatDistance(currentDistance);
  const formattedTime = formatTime(currentTime);

  return (
    <div>
      <ul className="relative top-6 h-auto grid grid-flow-col gap-2">
        <li className="">
          <span className="font-barlow tracking-widest font-light text-lg opacity-50">
            AVG. DISTANCE
          </span>
          <br />
          <span className="font-bellefair text-[1.5rem] opacity-80 ">
            {formattedDistance}
          </span>
        </li>
        <li className="">
          <span className="font-barlow tracking-widest font-light text-lg opacity-50">
            EST. TRAVEL TIME
          </span>
          <br />
          <span className="font-bellefair text-[1.5rem] opacity-80">
            {formattedTime}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default NumberAnimation;
