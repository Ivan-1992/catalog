import './ProductCard.scss';

export type Product = {
    id: number;
    name: string;
    price: number;
    brand: string;
    image: string;
    inStock: boolean;
};

type ProductCardProps = {
    product: Product;
};

export const ProductCard = ({ product }: ProductCardProps ) => {
    const { name, price, brand, image, inStock } = product;
    return (
        <article className="product-card">
            <img
                alt={name}
                src={image}
                className="product-card__image"
            />
            <div>Бренд: {brand}</div>
            <div>Название: {name}</div>
            <div>Цена: {price} Р</div>
            <div>{inStock ? "В наличии" : "Нет в наличии"}</div>
        </article>
    )
}