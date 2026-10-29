import './SidebarFilters.css';

export const SidebarFilters = ()=> {
    return (
        // <aside className="sidebar-filters">
        <aside>
            <label htmlFor="productName">Название</label>
            <select name="productName" id="productName" >
                <option>Test</option>
                <option>Test1</option>
                <option>Test2</option>
            </select>
            <label htmlFor="productPriceFrom">Цена от</label>
            <input type="number" id="productPriceFrom" />
            <label htmlFor="productPriceTo">Цена до</label>
            <input type="number" id="productPriceTo" />
            <label htmlFor="productBrand">Бренд</label>
            <select name="productBrand" id="productBrand" >
                <option>Volvo</option>
                <option>Toyota</option>
                <option>Suzuki</option>
            </select>
            <label htmlFor="productInStock">В наличии</label>
            <select name="productInStock" id="productInStock" >
                <option>Да</option>
                <option>Нет</option>
            </select>
        </aside>
    )
}