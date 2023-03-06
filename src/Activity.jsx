import { Grid, IconButton, Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import CallTypeIcon from "./CallTypeIcon.jsx";
import CallTime from "./CallTime.jsx";
import CallDetails from "./CallDetails.jsx";

const Activity = ({ call }) => {
  const { call_type, direction, from, via, created_at } = call;
  const call_time = new Date(created_at);
  return (
    <Box
      sx={{
        border: "solid 2px grey",
        borderRadius: "15px",
        margin: "8px",
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
        <Grid item xs={2} sx={{ textAlign: "center" }}>
          <CallTime time={call_time} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Activity;
