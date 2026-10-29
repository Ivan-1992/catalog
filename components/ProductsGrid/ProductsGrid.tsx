import {ProductCard, Product} from "@/components/ProductCard/ProductCard";
import './ProductsGrid.scss';

interface ProductsGridProps {
    products: Product[];
}

export const ProductsGrid = ({ products }: ProductsGridProps) => {
    return (
        <section className="products-grid">
            <h1 className="products-grid__header">Каталог товаров</h1>
            <div className="products-grid__content">
                {products.map((product) =>
                    <ProductCard
                        product={product}
                        key={product.id}
                    />
                )}
            </div>
        </section>
    )
}