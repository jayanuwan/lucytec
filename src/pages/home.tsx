import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Table from "../components/Table";
import Chart from "../components/Chart";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/users";

const selector = ({ user: { userList } }: any) => ({ userList });

const Home = () => {
  const dispatch = useDispatch();
  const { userList = [] } = useSelector(selector);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userList);

    console.log("user list", userList);
  }, [userList]);

  useEffect(() => {
    dispatch(actions.getUsers.request());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#e7eef4", height: "40vh" }}>
        <Chart data={userList}></Chart>
      </Box>
      <Box>
        <Table data={userList} />
      </Box>
    </Container>
  );
};

export default Home;
