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
    Paper,
    TablePagination,
    TableFooter,
    IconButton,
    Button,
    Menu,
    MenuItem,
} from "@material-ui/core";
import { Article } from "../../../../interfaces";
import SearchIcon from '@material-ui/icons/Search';
import { AddCircleOutline, MoreVert, Edit, Delete } from "@material-ui/icons";

interface Data extends Article {
    id?: number;
    name?: string;
    description: string;
    category?: string;
    author?: string;
    date: string;
}

type TableData = {
    id?: number;
    name?: string;
    description: string;
    category?: string;
    author?: string;
    date: string;
    body?: string
    title?: string
};

interface Props {
    data: TableData[];
    columns: {
        id: keyof Data;
        label: string;
    }[];
    pagination?: boolean;
}

type Order = "asc" | "desc";

const DynamicTable = ({ data, columns, pagination = true }: Props) => {
    const [order, setOrder] = useState<Order>("asc");
    const [orderBy, setOrderBy] = useState<keyof Data>("name");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSort = (property: keyof Data) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const filteredData = data.filter((data) =>
        'name' in data && data?.name && data?.name.toLowerCase().includes(search.toLowerCase())
    );

    const sortedData = filteredData.sort((a, b) => {
        const orderByA = a[orderBy];
        const orderByB = b[orderBy];

        if (typeof orderByA === "string" && typeof orderByB === "string") {
            return order === "asc"
                ? orderByA.localeCompare(orderByB)
                : orderByB.localeCompare(orderByA);
        }

        if (typeof orderByA === "number" && typeof orderByB === "number") {
            return order === "asc" ? orderByA - orderByB : orderByB - orderByA;
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
        rowsPerPage -
        Math.min(rowsPerPage, sortedData.length % rowsPerPage || rowsPerPage) +
        page * rowsPerPage;

    return (
        <div>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <TextField
                    label={columns[0].label}
                    style={{ borderRadius: "50px" }}
                    variant="outlined"
                    margin="normal"
                    size="small"
                    value={search}
                    onChange={handleSearch}
                    InputProps={{
                        endAdornment: (
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        ),
                    }}
                />

                <Button
                    variant="contained"
                    startIcon={<AddCircleOutline />}
                    style={{
                        borderRadius: 5,
                        backgroundColor: "#1a1c1e",
                        color: "#fff",
                        fontFamily: "Poppins !important",
                        textTransform: "lowercase"
                    }}
                >
                    Crear
                </Button>
            </div>
            <TableContainer
                component={Paper}
                style={{
                    tableLayout: "fixed",
                    width: "100%",
                    borderRadius: "5px",
                    height: "500px",
                }}
            >
                <Table style={{ height: "500px" }}>
                    <TableHead>
                        <TableRow style={{
                            position: "sticky",
                            top: 0,
                            backgroundColor: "white",
                            zIndex: 1,
                        }}>
                            {columns.map((column) => (
                                <TableCell key={column.id}>
                                    <TableSortLabel
                                        active={orderBy === column.id}
                                        direction={order}
                                        onClick={() => handleSort(column.id)}
                                    >
                                        {column.label}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            .filter((row) =>
                                String(row[columns[0].id])
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            )
                            .sort((a, b) =>
                                order === "asc"
                                    ? String(a[orderBy]) > String(b[orderBy])
                                        ? 1
                                        : -1
                                    : String(b[orderBy]) > String(a[orderBy])
                                        ? 1
                                        : -1
                            )
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {columns.map((column, columnIndex) => (
                                        <TableCell key={columnIndex}>{row[column.id]}</TableCell>
                                    ))}
                                    <TableCell>
                                        <MoreVert onClick={handleClick} />
                                        <Menu
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}><Edit /> Editar</MenuItem>
                                            <MenuItem onClick={handleClose}><Delete /> Eliminar</MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={columns.length} />
                            </TableRow>
                        )}
                    </TableBody>
                    {pagination && (
                        <TableFooter style={{ position: "sticky", bottom: 0 }}>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    count={filteredData.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </TableRow>
                        </TableFooter>
                    )}
                </Table>
            </TableContainer>
        </div>
    )
}

export default DynamicTable