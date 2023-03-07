import { Grid, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import React, { useState } from "react";
import styled from "styled-components";
import CallTypeIcon from "./CallTypeIcon.jsx";
import CallTime from "./CallTime.jsx";
import CallDetails from "./CallDetails.jsx";

const Activity = ({
  call,
  isArchiveActionTriggered,
  setIsArchiveActionTriggered,
}) => {
  const [isShown, setIsShown] = useState(false);

  const { call_type, direction, from, via, created_at, is_archived, id } = call;
  const call_time = new Date(created_at);
  return (
    <Box
      sx={{
        border: "solid 2px grey",
        borderRadius: "15px",
        margin: "8px",
      }}
      onMouseEnter={() => {
        setIsShown(true);
      }}
      onMouseLeave={() => {
        setIsShown(false);
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={2} sx={{ textAlign: "center" }}>
          <CallTypeIcon call_type={call_type} direction={direction} />
        </Grid>
        <Grid item xs={8}>
          <CallDetails from={from} via={via} />
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "center", height: "40px" }}>
          <CallTime
            time={call_time}
            hoverState={isShown}
            isArchived={is_archived}
            isArchiveActionTriggered={isArchiveActionTriggered}
            setIsArchiveActionTriggered={setIsArchiveActionTriggered}
            call={call}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Activity;
