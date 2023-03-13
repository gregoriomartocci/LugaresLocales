import React from 'react';
import Dashboard from '../../../components/Dashboard';
import DynamicTable from '../../../components/Dashboard/components/DynamicTable';
import { useGetArticlesQuery } from '../../../features/articles/api';

interface Data {
    id: number;
    author: string;
    description: string;
    category: string;
    date: string;
}

const columns = [
    { id: 'id', label: 'ID' },
    { id: 'title', label: 'Titulo' },
    { id: 'description', label: 'Descripción' },
    { id: 'category', label: 'Categoría' },
    { id: 'author', label: 'Autor' },
    { id: 'date', label: 'Fecha' },
].map((column) => ({
    id: column.id as keyof Data,
    label: column.label,
}));

// const data: Data[] = [
//     { id: 1, name: "Artículo 1", description: "Descripción del artículo 1", category: "Categoría 1" },
//     { id: 2, name: "Artículo 2", description: "Descripción del artículo 2", category: "Categoría 2" },
//     { id: 3, name: "Artículo 3", description: "Descripción del artículo 3", category: "Categoría 3" },
// ];

const Articles = () => {

    const { data, isLoading } = useGetArticlesQuery();

    console.log(data, "que estoy obteniendo?")

    return (
        <div>
            <Dashboard>
                <DynamicTable
                    data={data ?? []}
                    columns={columns}
                    pagination={true}
                />
            </Dashboard>
        </div>
    );
};

export default Articles;
