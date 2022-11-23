import { useEffect, useState } from "react";

export default function Hour() {
  const [time, setTime] = useState("");

  function Time() {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 500);
  }
  useEffect(() => {
    Time();
  });

  return (
    <div className="time_block">
      <p>Il est:</p>
      <p>{time}</p>
    </div>
  );
}
