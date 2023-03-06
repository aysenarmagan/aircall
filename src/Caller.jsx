import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/system";
import React from "react";

const Caller = ({ from }) => {
  const caller = from ? from : "No Caller ID";
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item sx={{ lineHeight: "0" }}>
        <p>
          <b>{caller}</b>
        </p>
      </Grid>
      <Grid item>
        <Box
          sx={{
            margin: "5px",
            fontSize: "8px",
            backgroundColor: "red",
            fontWeight: "800",
            color: "white",
            width: "50%",
            marginTop: "0px",
            border: "solid red 2px",
            borderRadius: "50%",
            textAlign: "center",
          }}
        >
          {Math.floor(Math.random() * 9) + 1}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Caller;
