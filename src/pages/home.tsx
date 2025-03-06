import React, { useEffect, useState, Suspense, lazy } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Divider,
  Drawer,
  Box,
  Typography,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  CircularProgress,
} from "@mui/material";
import Table from "../components/Table";
import Chart from "../components/Chart";
import Form from "../components/Form";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/users";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";

const drawerWidth = 240;

const selector = ({ user: { userList, newUser } }: any) => ({
  userList,
  newUser,
});

const Home = ({ setMode }: any) => {
  const dispatch = useDispatch();
  const { userList } = useSelector(selector);
  const { newUser = {} } = useSelector(selector);

  const [users, setUsers] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [open, setOpen] = useState({ status: true, message: "" });

  useEffect(() => {
    setUsers(userList);
  }, [userList]);

  useEffect(() => {
    if (newUser.name) {
      setUsers(userList.push(newUser));
      setOpen({
        status: true,
        message: "Record added",
      });
    }
  }, [newUser]);

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

  const getFormData = (data: any) => {
    userList.push(data);
    setOpen({
      status: true,
      message: "Added succesfully",
    });
    // dispatch(actions.addUsers.request(data));
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({
      status: false,
      message: "",
    });
  };

  const removeData = (data: any) => {
    dispatch(actions.deleteUsers.success(data));

    // debugger;
  };

  const drawer = (
    <div>
      <Toolbar />

      <Divider />
      <List>
        {["Grid", "Chart", "Form"].map((text, index) => (
          <Link to={text.toLowerCase()} key={text}>
            <ListItem disablePadding onClick={handleDrawerToggle}>
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
              <Route path="/chart" element={<Chart data={users}></Chart>} />
              <Route
                path="/grid"
                element={
                  <Suspense fallback={<CircularProgress />}>
                    <Table data={users} removeData={removeData} />
                  </Suspense>
                }
              />
              <Route
                path="/form"
                element={<Form getFormData={getFormData} />}
              />
            </Routes>
          </Box>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open?.status}
          autoHideDuration={2000}
          message={open.message}
          onClose={handleClose}
        />
      </BrowserRouter>
    </>
  );
};

export default Home;
