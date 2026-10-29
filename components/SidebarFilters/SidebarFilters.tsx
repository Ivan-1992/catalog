import './SidebarFilters.scss';

export const SidebarFilters = ()=> {
    return (
        <aside className="sidebar-filters">
            <h2 className="sidebar-filters__header">Фильтры</h2>
            <label htmlFor="productName">Название</label>
            <select
                name="productName"
                id="productName"
                className="sidebar-filters__select"
            >
                <option>Test</option>
                <option>Test1</option>
                <option>Test2</option>
            </select>
            <label htmlFor="productPriceFrom">Цена от</label>
            <input
                type="number"
                id="productPriceFrom"
                className="sidebar-filters__price-input"
            />
            <label htmlFor="productPriceTo">Цена до</label>
            <input
                type="number"
                id="productPriceTo"
                className="sidebar-filters__price-input"
            />
            <label htmlFor="productBrand">Бренд</label>
            <select
                name="productBrand"
                id="productBrand"
                className="sidebar-filters__select"
            >
                <option>Volvo</option>
                <option>Toyota</option>
                <option>Suzuki</option>
            </select>
            <label htmlFor="productInStock">В наличии</label>
            <select
                name="productInStock"
                id="productInStock"
                className="sidebar-filters__select"
            >
                <option>Да</option>
                <option>Нет</option>
            </select>
        </aside>
    )
}