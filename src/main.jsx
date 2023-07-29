import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

const CountdownTimer = ({ targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeRemaining() {
    const currentTime = new Date().getTime();
    const difference = targetTime - currentTime;

    if (difference <= 0) {
      // If the target time has passed, return 0 for hours, minutes, and seconds.
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  function formatTime(num) {
    return num.toString().padStart(2, "0");
  }
  const { hours, minutes, seconds } = timeRemaining;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.8)",
        color: "#fff",
        fontSize: "2rem",
      }}
    >
      <div className="z-50 text-4xl">
        {hours > 0 && `Launching after ${hours} hours `}
        {formatTime(minutes)}:{formatTime(seconds)}
      </div>
    </div>
  );
};

// Set the custom target time here (10 AM, 30th July 2023)
const targetTime = new Date("July 30, 2023 10:00:00").getTime();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <CountdownTimer targetTime={targetTime} />
  </React.StrictMode>
);
