import React from 'react';
import Dashboard from '../../../components/Dashboard';
import DynamicTable from '../../../components/Dashboard/components/DynamicTable';

interface Data {
    id: number;
    name: string;
    description: string;
    category: string;
}

const columns = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Nombre' },
    { id: 'description', label: 'Descripción' },
    { id: 'category', label: 'Categoría' },
].map((column) => ({
    id: column.id as keyof Data,
    label: column.label,
}));

const data: Data[] = [
    { id: 1, name: "Artículo 1", description: "Descripción del artículo 1", category: "Categoría 1" },
    { id: 2, name: "Artículo 2", description: "Descripción del artículo 2", category: "Categoría 2" },
    { id: 3, name: "Artículo 3", description: "Descripción del artículo 3", category: "Categoría 3" },
];

const Articles = () => {
    return (
        <div>
            <Dashboard>
                <DynamicTable
                    data={data}
                    columns={columns}
                    pagination={true}
                />
            </Dashboard>
        </div>
    );
};

export default Articles;
