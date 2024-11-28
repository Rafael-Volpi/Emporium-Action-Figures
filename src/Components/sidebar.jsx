import React from 'react';

const categories = [
    { id: "categoria-1", name: "Action Figures" },
    { id: "categoria-2", name: "Estátuas" },
    { id: "categoria-3", name: "Funko Pop" }
];

const Sidebar = () => (
    <div className="sidebar">
        <h3>Categorias</h3>
        <ul className="sidebar-list">
            {categories.map(category => (
                <li key={category.id}>
                    <a href={`#${category.id}`}>{category.name}</a>
                </li>
            ))}
        </ul>
    </div>
);

export default Sidebar;
