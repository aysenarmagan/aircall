import React from "react";

const CallTime = ({ time }) => {
  const localeTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const hoursMinutes = localeTime.substring(0, localeTime.indexOf(" "));
  const ampm = localeTime.substring(localeTime.indexOf(" ") + 1);
  return (
    <p>
      {hoursMinutes}
      <span
        style={{
          borderLeft: "1px solid black",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
          fontSize: "11px",
          marginLeft: "2px",
        }}
      >
        {ampm}
      </span>
    </p>
  );
};

export default CallTime;
