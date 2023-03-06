import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const CallTypeIcon = ({ call_type, direction }) => {
  if (direction === "inbound") {
    if (call_type === "missed") {
      return <PhoneMissedIcon fontSize="medium" color="error" />;
    }
    if (call_type === "voicemail") {
      return <VoicemailIcon fontSize="medium" />;
    }
    if (call_type === "answered") {
      return <PhoneCallbackIcon fontSize="medium" color="primary" />;
    }
  }
  if (direction === "outbound") {
    if (call_type === "missed") {
      return <PhoneForwardedIcon fontSize="medium" color="error" />;
    }
    if (call_type === "voicemail") {
      return <VoicemailIcon fontSize="medium" />;
    }
    if (call_type === "answered") {
      return <PhoneInTalkIcon fontSize="medium" color="primary" />;
    }
  }

  return <PhoneIcon fontSize="medium" />;
};

export default CallTypeIcon;
