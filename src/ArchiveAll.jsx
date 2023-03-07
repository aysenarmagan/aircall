import { Button, Grid, toggleButtonClasses } from "@mui/material";
import React from "react";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

const ArchiveAll = ({
  isArchived,
  setArchiveAllProgress,
  setUnarchiveAllProgress,
}) => {
  const archiveUnarchiveAll = () => {
    isArchived ? setUnarchiveAllProgress(true) : setArchiveAllProgress(true);
    fetch(
      "https://cerulean-marlin-wig.cyclic.app/activities"
    )
      .then((response) => response.json())
      .then((data) => {
        data.forEach((call) => {
          if (call.is_archived === !isArchived) return;
          fetch(
            `https://cerulean-marlin-wig.cyclic.app/activities/${call.id}`,
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
            .catch((error) => {
              // Handle error as needed
            });
        });
      })
      .finally(() => {
        setTimeout(() => {
          isArchived
          ? setUnarchiveAllProgress(false)
          : setArchiveAllProgress(false);  
        }, 5000);
      })
      .catch((error) => {
        // Handle error as needed
      });
  };

  return (
    <Button
      sx={{
        textTransform: "none",
        width: "100%",
        padding: 0,
        color: "black",
      }}
      onClick={archiveUnarchiveAll}
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
          {isArchived ? (
            <UnarchiveIcon
              color="success"
              fontSize="small"
              sx={{ display: "flex", margin: "0 4px" }}
            />
          ) : (
            <ArchiveIcon
              color="error"
              fontSize="small"
              sx={{ display: "flex", margin: "0 4px" }}
            />
          )}
        </Grid>
        <Grid item>
          {isArchived ? <p>Unarchive all calls</p> : <p>Archive all calls</p>}
        </Grid>
      </Grid>
    </Button>
  );
};

export default ArchiveAll;
