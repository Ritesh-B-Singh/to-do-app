import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { UpperColumn, LowerColumn } from './constants/SidebarData';
import SearchBar from './constants/Searchbar';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { Avatar, AvatarGroup } from '@mui/material';
import { NavbarUsers } from './constants/NavbarData';

const drawerWidth = 240;

export default function DashboardLayout({ children }) {
    const state = 2;
    const location = useLocation()
    const users = useSelector((state) => state);
    const loggedInUser = users.find(user => user.id === parseInt(location.pathname.split('/').pop()));
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                elevation={0}
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, background: '#FEFEFE' }}
            >
                <Toolbar>
                    <Box gap={2} flexGrow={1} display='flex' flexDirection='row' alignItems='center' >
                        <SearchBar Minwidth={300} margin={1.5} />
                        <AvatarGroup total={11}>
                            {NavbarUsers.map((item) => (
                                <Avatar key={item.id} alt={item.name} src={item.url} />
                            ))}
                        </AvatarGroup>
                    </Box>
                    <Box gap={2} display='flex' flexDirection='row' alignItems='center' >
                        <Typography variant="h6" fontWeight='600' fontSize='17px' letterSpacing='5%' noWrap component="div" color='#3A3A3A'>
                            Hi {loggedInUser.name}
                        </Typography>
                        <Avatar alt={loggedInUser.name} src={loggedInUser.profilePic} />
                    </Box>
                </Toolbar>
                {children}
            </AppBar>
            <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Box p={2} paddingRight={0}>
                        <Box marginBottom={25} display='flex' flexDirection='column' justifyContent='center' flexGrow={1} >
                            <Toolbar>
                                <Typography fontWeight='600' fontSize='20px' letterSpacing='3%' noWrap component="div">
                                    .taskez
                                </Typography>
                            </Toolbar>
                            <List>
                                {UpperColumn.map((item) => (
                                    <ListItem
                                        key={item.id}
                                        sx={state === parseInt(item.id) ? { borderRight: '4px solid #329C89' } : {}}
                                        selected={state === parseInt(item.id)}
                                        disablePadding
                                    >
                                        <ListItemButton>
                                            <ListItemIcon
                                                sx={state === parseInt(item.id) ? { color: '#212121' } : { color: '#9A9A9A' }}
                                            >
                                                {<item.icon />}
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography
                                                    sx={state === parseInt(item.id) ? { color: '#212121' } : { color: '#9A9A9A' }}
                                                >
                                                    {item.lable}
                                                </Typography>
                                            </ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        <List>
                            {LowerColumn.map((item) => (
                                <ListItem key={item.id} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon sx={state === parseInt(item.id) ? { color: '#212121' } : { color: '#9A9A9A' }} >
                                            {<item.icon />}
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography sx={state === parseInt(item.id) ? { color: '#212121' } : { color: '#9A9A9A' }} >
                                                {item.lable}
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </Box>
    );
}
