import { Button, Grid } from "@mui/material";
import React from "react";
import ArchiveIcon from "@mui/icons-material/Archive";

const ArchiveAll = () => {
  return (
    <Button
      sx={{
        textTransform: "none",
        width: "100%",
        padding: 0,
      }}
      onClick={() => console.log("clicked")}
    >
      <Grid
        container
        direction="row"
        justifyContent="start"
        alignItems="center"
        sx={{
          border: "solid 1px grey",
          borderRadius: "2px",
          backgroundColor: "#f6f6f6",
          borderTop: "none",
        }}
      >
        <Grid item>
          <ArchiveIcon
            fontSize="small"
            sx={{ display: "flex", margin: "0 4px" }}
          />
        </Grid>
        <Grid item>
          <p>Archive all calls</p>
        </Grid>
      </Grid>
    </Button>
  );
};

export default ArchiveAll;
