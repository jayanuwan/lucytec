import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Table from "../components/Table";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/users";

const selector = ({ user: { userList } }: any) => ({ userList });

const Home = () => {
  const dispatch = useDispatch();
  const { userList = [] } = useSelector(selector);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userList);
  }, [userList]);

  useEffect(() => {
    dispatch(actions.getUsers.request());
  }, [dispatch]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#cfe8fc", height: "10vh" }}>dfdf</Box>
        <Box>
          <Table data={users} />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
