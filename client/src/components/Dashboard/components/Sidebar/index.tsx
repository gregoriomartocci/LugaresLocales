import React, { useRef, useEffect } from 'react';
import styles from './styles.module.css';
import { List, ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core';
import { Description, Category, Person, Comment } from '@material-ui/icons';
import Link from 'next/link';

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
        <Link href="/admin/articles">
          <ListItem button className={styles.menuItem} component="a">
            <ListItemIcon>
              <Description style={{ color: '#848688' }} />
            </ListItemIcon>
            <ListItemText primary="Articulos" />
          </ListItem>
        </Link>
        <Link href="/admin/categories">
          <ListItem button className={styles.menuItem} component="a">
            <ListItemIcon>
              <Category style={{ color: '#848688' }} />
            </ListItemIcon>
            <ListItemText primary="Categorias" />
          </ListItem>
        </Link>
        <Link href="/admin/users">
          <ListItem button className={styles.menuItem} component="a">
            <ListItemIcon>
              <Person style={{ color: '#848688' }} />
            </ListItemIcon>
            <ListItemText primary="Usuarios" />
          </ListItem>
        </Link>
        <Link href="/admin/comments">
          <ListItem button className={styles.menuItem} component="a">
            <ListItemIcon>
              <Comment style={{ color: '#848688' }} />
            </ListItemIcon>
            <ListItemText primary="Comentarios" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Sidebar;
