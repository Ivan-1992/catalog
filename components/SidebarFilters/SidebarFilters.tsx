import './SidebarFilters.scss';

interface SidebarFiltersProps {
    search: string;
    brand: string;
    minPrice: number | null;
    maxPrice: number | null;
    hideOutOfStock: boolean;
    onSearchChange: (value: string) => void;
    onBrandChange: (value: string) => void;
    onMinPriceChange: (value: number | null) => void;
    onMaxPriceChange: (value: number | null) => void;
    onHideOutOfStockChange: (value: boolean) => void;
}

export const SidebarFilters = ({
    search,
    brand,
    minPrice,
    maxPrice,
    hideOutOfStock,
    onSearchChange,
    onBrandChange,
    onMinPriceChange,
    onMaxPriceChange,
    onHideOutOfStockChange,
} : SidebarFiltersProps)=> {
    return (
        <aside className="sidebar-filters">
            <h2 className="sidebar-filters__header">Фильтры</h2>
            <label htmlFor="productName">Название</label>
            <input
                name="productName"
                id="productName"
                className="sidebar-filters__name-input"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />
            <label htmlFor="productPriceFrom">Цена от</label>
            <input
                type="number"
                id="productPriceFrom"
                className="sidebar-filters__price-input"
                value={minPrice ?? ""}
                onChange={(e) =>
                    onMinPriceChange(
                        e.target.value === "" ? null : Number(e.target.value)
                    )
                }
            />
            <label htmlFor="productPriceTo">Цена до</label>
            <input
                type="number"
                id="productPriceTo"
                className="sidebar-filters__price-input"
                value={maxPrice ?? ""}
                onChange={(e) =>
                    onMaxPriceChange(
                        e.target.value === "" ? null : Number(e.target.value)
                    )
                }
            />
            <label htmlFor="productBrand">Бренд</label>
            <select
                name="productBrand"
                id="productBrand"
                className="sidebar-filters__select"
                value={brand}
                onChange={(e) => onBrandChange(e.target.value)}
            >
                <option value="">Все бренды</option>
                <option value="Volvo">Volvo</option>
                <option value="Toyota">Toyota</option>
                <option value="Suzuki">Suzuki</option>
            </select>
            <div className="sidebar-filters__instock_container">
                <label htmlFor="productInStock">Скрыть товары не в наличии</label>
                <input
                    type="checkbox"
                    name="productInStock"
                    id="productInStock"
                    className="sidebar-filters__checkbox"
                    checked={hideOutOfStock}
                    onChange={(e) => {
                        onHideOutOfStockChange(e.target.checked);
                    }}
                />
            </div>
        </aside>
    )
}