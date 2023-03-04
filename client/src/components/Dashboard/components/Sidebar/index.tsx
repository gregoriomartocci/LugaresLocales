import React, { useRef, useEffect } from 'react';
import styles from './styles.module.css';
import { List, ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core';
import { Description, Category, Person } from '@material-ui/icons';

interface Props {
    handleDrawerClose: () => void;
    open: boolean;
}

const Sidebar = ({ handleDrawerClose, open }: Props) => {
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                handleDrawerClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [handleDrawerClose, sidebarRef]);

    return (
        <div ref={sidebarRef} className={`${styles.sidebar} ${open ? styles.sidebarOpen : ''}`}>
            <div className={styles.toolbar}>
                <Button onClick={handleDrawerClose}>Cerrar</Button>
            </div>
            <List component="nav" className={styles.menu}>
                <ListItem button className={styles.menuItem}>
                    <ListItemIcon>
                        <Description />
                    </ListItemIcon>
                    <ListItemText primary="Articulos" />
                </ListItem>
                <ListItem button className={styles.menuItem}>
                    <ListItemIcon>
                        <Category />
                    </ListItemIcon>
                    <ListItemText primary="Categorias" />
                </ListItem>
                <ListItem button className={styles.menuItem}>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Usuarios" />
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;
