import React from "react";
import styled from "styled-components";
import { IconButton, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AdjustIcon from "@mui/icons-material/Adjust";
import AppsIcon from "@mui/icons-material/Apps";

const DialIcon = styled(AppsIcon)`
  border: solid #f6f6f6 10px;
  border-radius: 50%;
  background: green;
  padding: 15px;
  color: white;
`;

function Footer() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="end"
      sx={{
        boxShadow: "0 0 1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid item sx={{}}>
        <IconButton>
          <PhoneIcon fontSize="large" />
        </IconButton>
      </Grid>

      <Grid item sx={{}}>
        <IconButton>
          <PersonOutlineOutlinedIcon fontSize="large" />
        </IconButton>
      </Grid>

      <Grid item sx={{}}>
        <IconButton sx={{ marginTop: "-90px" }}>
          <DialIcon fontSize="large" />
        </IconButton>
      </Grid>

      <Grid item sx={{}}>
        <IconButton>
          <SettingsIcon fontSize="large" />
        </IconButton>
      </Grid>

      <Grid item sx={{}}>
        <IconButton>
          <AdjustIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Footer;
