import { useState } from 'react';
import ArticlesTable from './components/ArticleTable';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import styles from './styles.module.css';

const Dashboard = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const articles = [
        { id: 1, name: "Article 1", description: "Description of Article 1", category: "Category 1" },
        { id: 2, name: "Article 2", description: "Description of Article 2", category: "Category 2" },
        { id: 3, name: "Article 3", description: "Description of Article 3", category: "Category 3" },
        { id: 4, name: "Article 4", description: "Description of Article 4", category: "Category 4" },
        { id: 5, name: "Article 5", description: "Description of Article 5", category: "Category 5" },
        { id: 6, name: "Article 6", description: "Description of Article 6", category: "Category 6" },
        { id: 7, name: "Article 7", description: "Description of Article 7", category: "Category 7" },
        { id: 8, name: "Article 8", description: "Description of Article 8", category: "Category 8" },
        { id: 9, name: "Article 9", description: "Description of Article 9", category: "Category 9" },
        { id: 10, name: "Article 10", description: "Description of Article 10", category: "Category 10" },
        { id: 11, name: "Article 11", description: "Description of Article 11", category: "Category 11" },
        { id: 12, name: "Article 12", description: "Description of Article 12", category: "Category 12" },
        { id: 13, name: "Article 13", description: "Description of Article 13", category: "Category 13" },
        { id: 14, name: "Article 14", description: "Description of Article 14", category: "Category 14" },
        { id: 15, name: "Article 15", description: "Description of Article 15", category: "Category 15" },
    ];

    return (
        <div className={styles.root}>
            <Navbar handleDrawerOpen={handleDrawerOpen} />
            <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
            <div className={styles.content}>
                <div className={styles.toolbar} >
                    <ArticlesTable articles={articles} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
