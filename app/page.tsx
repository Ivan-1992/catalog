'use client'
import {ProductsGrid} from "@/components/ProductsGrid/ProductsGrid";
import {Product} from "@/components/ProductCard/ProductCard";
import {SidebarFilters} from "@/components/SidebarFilters/SidebarFilters";
import {useState} from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [hideOutOfStock, setHideOutOfStock] = useState(false);

  const testProducts: Product[] = [
      {
        id: 0,
        name: 'Test',
        price: 1000,
        brand: 'Volvo',
        image: '/favicon.ico',
        inStock: true,
      },
      {
        id: 1,
        name: 'Test1',
        price: 10000,
        brand: 'Toyota',
        image: '/favicon.ico',
        inStock: false,
      },{
        id: 2,
        name: 'Test2',
        price: 500,
        brand: 'Suzuki',
        image: '/favicon.ico',
        inStock: true,
      },
  ]

    const filteredProducts = testProducts.filter((product) => {
        const matchesSearch =
            search === "" ||
            product.name.toLowerCase().includes(search.toLowerCase());

        const matchesBrand =
            brand === "" ||
            product.brand === brand;

        const matchesMinPrice =
            minPrice === null ||
            product.price >= minPrice;

        const matchesMaxPrice =
            maxPrice === null ||
            product.price <= maxPrice;

        const matchesInStock =
            !hideOutOfStock ||
            product.inStock;

        return (
            matchesSearch &&
            matchesBrand &&
            matchesMinPrice &&
            matchesMaxPrice &&
            matchesInStock
        );
    });

  return (
      <main>
          <SidebarFilters
            search={search}
            brand={brand}
            minPrice={minPrice}
            maxPrice={maxPrice}
            hideOutOfStock={hideOutOfStock}
            onSearchChange={setSearch}
            onBrandChange={setBrand}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
            onHideOutOfStockChange={setHideOutOfStock}
          />
          <ProductsGrid products={filteredProducts} />
      </main>
  );
}
