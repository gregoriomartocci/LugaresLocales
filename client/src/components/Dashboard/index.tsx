import { useState } from 'react';
import ArticlesTable from './components/DynamicTable';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import styles from './styles.module.css';

const Dashboard = ({ children }) => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.root}>
            <Navbar handleDrawerOpen={handleDrawerOpen} />
            <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
            <div className={styles.content}>
                <div className={styles.toolbar} >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
