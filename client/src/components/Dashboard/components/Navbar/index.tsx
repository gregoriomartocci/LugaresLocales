import React, { useState } from 'react';
import styles from './styles.module.css';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Badge,
    Popover,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';

interface Props {
    handleDrawerOpen: () => void;
}

const Navbar = ({ handleDrawerOpen }: Props) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'notifications-popover' : undefined;

    return (
        <AppBar position="static" className={styles.navbar}>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={styles.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={styles.title}>
                    Dashboard
                </Typography>
                <div className={styles.right}>
                    <IconButton
                        color="inherit"
                        className={styles.notificationButton}
                        aria-describedby={id}
                        onClick={handleClick}
                    >
                        <Badge badgeContent={3} color="secondary" overlap="rectangular">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <List>
                            <ListItem button>
                                <ListItemText primary="Notification 1" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Notification 2" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Notification 3" />
                            </ListItem>
                        </List>
                    </Popover>
                    <IconButton color="inherit" className={styles.profileButton}>
                        <AccountCircleIcon />
                    </IconButton>
                    <IconButton color="inherit" className={styles.settingsButton}>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
