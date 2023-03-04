import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    TextField,
    InputAdornment,
    Paper,
    TablePagination,
    TableFooter,
} from "@material-ui/core";

interface Article {
    id: number;
    name: string;
    description: string;
    category: string;
}

interface Props {
    articles: Article[];
}

type Order = "asc" | "desc";

const ArticlesTable = ({ articles }: Props) => {
    const [order, setOrder] = useState<Order>("asc");
    const [orderBy, setOrderBy] = useState<keyof Article>("name");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleSort = (property: keyof Article) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const filteredArticles = articles.filter((article) =>
        article.name.toLowerCase().includes(search.toLowerCase())
    );

    const sortedArticles = filteredArticles.sort((a, b) => {
        const orderByA = a[orderBy];
        const orderByB = b[orderBy];

        if (typeof orderByA === "string" && typeof orderByB === "string") {
            return order === "asc"
                ? orderByA.localeCompare(orderByB)
                : orderByB.localeCompare(orderByA);
        }

        if (typeof orderByA === "number" && typeof orderByB === "number") {
            return order === "asc"
                ? orderByA - orderByB
                : orderByB - orderByA;
        }

        return 0;
    });

    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // reset page number when rows per page changes
    };

    const emptyRows =
        5 - Math.min(5, sortedArticles.length % 5 || 5) + sortedArticles.length;

    const headerRowStyle = {
        position: 'sticky',
        top: 0,
        backgroundColor: 'white',
        zIndex: 1,
    };

    return (
        <div>
            <TextField
                label="Search"
                variant="outlined"
                margin="normal"
                size="small"
                value={search}
                onChange={handleSearch}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <i className="material-icons">search</i>
                        </InputAdornment>
                    ),
                }}
            />
            <TableContainer component={Paper} style={{ tableLayout: "fixed", width: "100%", borderRadius: "5px", height: "500px" }} >
                <Table style={{ height: "500px" }}>
                    <TableHead>
                        <TableRow style={headerRowStyle}>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "name"}
                                    direction={order}
                                    onClick={() => handleSort("name")}
                                >
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "description"}
                                    direction={order}
                                    onClick={() => handleSort("description")}
                                >
                                    Description
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "category"}
                                    direction={order}
                                    onClick={() => handleSort("category")}
                                >
                                    Category
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedArticles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((article) => (
                            <TableRow key={article.id}>
                                <TableCell>{article.name}</TableCell>
                                <TableCell>{article.description}</TableCell>
                                <TableCell>{article.category}</TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={3} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[10, 15, 25]}
                                count={sortedArticles.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );

}

export default ArticlesTable