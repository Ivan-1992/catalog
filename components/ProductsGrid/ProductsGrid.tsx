import {ProductCard, Product} from "@/components/ProductCard/ProductCard";
import './ProductsGrid.css';

interface ProductsGridProps {
    products: Product[];
}

export const ProductsGrid = ({ products }: ProductsGridProps) => {
    return (
        <section className="products-grid">
            {products.map((product) =>
                <ProductCard
                    product={product}
                    key={product.id}
                />
            )}
        </section>
    )
}