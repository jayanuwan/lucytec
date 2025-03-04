import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Table from "../components/Table";

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#cfe8fc", height: "10vh" }}>dfdf</Box>
        <Box>
          <Table data={[]} />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
