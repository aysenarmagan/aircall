import React from "react";
import { Grid } from "@mui/material";
import Caller from "./Caller.jsx";

const CallDetails = ({ from, via }) => {
  const carrier = via ? via : "Unknown Carrier";
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="start"
      sx={{ lineHeight: "%15 !important" }}
    >
      <Grid item>
        <Caller from={from} />
      </Grid>
      <Grid item>
        <p style={{ fontSize: "8px", lineHeight: "0", marginTop: "-2px" }}>
          tried to call on {carrier}
        </p>
      </Grid>
    </Grid>
  );
};

export default CallDetails;
