import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Table from "../components/Table";
import Chart from "../components/Chart";
import Form from "../components/Form";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/users";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { ListItemIcon } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";

const drawerWidth = 240;

const selector = ({ user: { userList } }: any) => ({ userList });

const Home = () => {
  const dispatch = useDispatch();
  const { userList = [] } = useSelector(selector);

  const [users, setUsers] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setUsers(userList);

    console.log("user list", userList);
  }, [userList]);

  useEffect(() => {
    dispatch(actions.getUsers.request());
  }, [dispatch]);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Grid", "Chart", "Form", "All"].map((text, index) => (
          <Link to={text.toLowerCase()}>
            <ListItem key={text} disablePadding onClick={handleDrawerToggle}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <BrowserRouter>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                User Informations
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onTransitionEnd={handleDrawerTransitionEnd}
              onClose={handleDrawerClose}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              slotProps={{
                root: {
                  keepMounted: true, // Better open performance on mobile.
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />

            <Routes>
              <Route path="/chart" element={<Chart data={userList}></Chart>} />
              <Route path="/grid" element={<Table data={userList} />} />
              <Route path="/form" element={<Form></Form>} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
      {/* <Container maxWidth="xl">
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
      </Container> */}
    </>
  );
};

export default Home;
