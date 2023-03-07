import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Grid, Box, Button } from "@mui/material";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ActivityFeed from "./ActivityFeed.jsx";
import ArchiveAll from "./ArchiveAll.jsx";
import CircularProgress from "@mui/material/CircularProgress";

const Container = styled(Grid)`
  z-index: 100;
  background: white;
  border-radius: 3px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.9);
`;

const App = () => {
  const changeTab = (isArchived) => {
    setIsArchivedTab(isArchived);
  };

  const [isArchivedTab, setIsArchivedTab] = useState(false);
  const [isArchiveAllInProgress, setIsArchiveAllInProgress] = useState(false);
  const [isUnarchiveAllInProgress, setIsUnarchiveAllInProgress] = useState(false);
  const [isArchiveActionTriggered, setIsArchiveActionTriggered] = useState(false);



  return (
    <Container
      container
      direction="column"
      justifyContent="space-between"
      alignItems="stretch"
      sx={{
        width: "376px",
        height: "666px",
      }}
    >
      <Grid item xs={1}>
        <Header isArchivedSelected={changeTab} />
      </Grid>
      {isArchiveAllInProgress || isUnarchiveAllInProgress ? (
        <Grid item xs={1} sx={{ margin: "auto" }}>
          <CircularProgress />
        </Grid>
      ) : (
        <Grid item xs={1} sx={{ margin: "0px 10px " }}>
          <ArchiveAll
            isArchived={isArchivedTab}
            setArchiveAllProgress={setIsArchiveAllInProgress}
            setUnarchiveAllProgress={setIsUnarchiveAllInProgress}
          />
        </Grid>
      )}

      <Grid
        item
        xs={9}
        sx={{
          backgroundColor: "#FCFCFC",
          overflow: "scroll",
        }}
      >
        <ActivityFeed
          isArchivedTab={isArchivedTab}
          isArchiveAllInProgress={isArchiveAllInProgress}
          isUnarchiveAllInProgress={isUnarchiveAllInProgress}
          isArchiveActionTriggered={isArchiveActionTriggered}
          setIsArchiveActionTriggered={setIsArchiveActionTriggered}
        />
      </Grid>
      <Grid item xs={1}>
        <Footer />
      </Grid>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
