import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Table from "../components/Table";
import Chart from "../components/Chart";
import Form from "../components/Form";
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
    <>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#e7eef4", height: "40vh" }}>
          <Chart data={userList}></Chart>
        </Box>

        <Box>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12} lg={8}>
              <Table data={userList} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Form></Form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
