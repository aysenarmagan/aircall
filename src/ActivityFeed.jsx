import React, { useState, useEffect } from "react";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import Activity from "./Activity.jsx";

const ActivityFeed = ({ isArchivedTab }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(
      "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities"
    )
      .then((response) => response.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <Box sx={{ marginTop: "14px" }}>
      {activities.map(function (callItem) {
        const callDate = new Date(callItem.created_at);
        var formattedDate =
          callDate.toLocaleString("default", { month: "long" }) +
          "," +
          callDate.getDate() +
          " " +
          callDate.getFullYear();

        if (isArchivedTab === callItem.is_archived) {
          return (
            <Box>
              <Divider orientation="horizontal" flexItem>
                {formattedDate}
              </Divider>
              <Activity call={callItem} />
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default ActivityFeed;
