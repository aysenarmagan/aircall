import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

const CallTime = ({
  time,
  hoverState,
  isArchived,
  isArchiveActionTriggered,
  setIsArchiveActionTriggered,
  call,
}) => {
  const archiveAction = () => {
    console.log("Call ID: ", call.id);
    if (call.is_archived === !isArchived) return;
    setIsArchiveActionTriggered(true);
    fetch(
      `https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities/${call.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ is_archived: !isArchived }),
      }
    )
      .then((response) => {
        // Handle response as needed
      })
      .finally(() => {
        setIsArchiveActionTriggered(false);
      })
      .catch((error) => {
        // Handle error as needed
      });
  };
  const localeTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const hoursMinutes = localeTime.substring(0, localeTime.indexOf(" "));
  const ampm = localeTime.substring(localeTime.indexOf(" ") + 1);
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "inherit" }}
    >
      <Grid item>
        {!hoverState ? (
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
        ) : (
          <IconButton
            size="small"
            color={isArchived ? "success" : "error"}
            onClick={archiveAction}
          >
            {isArchived ? (
              <UnarchiveIcon fontSize="inherit" />
            ) : (
              <ArchiveIcon fontSize="inherit" />
            )}
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};

export default CallTime;
