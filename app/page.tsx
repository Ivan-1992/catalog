import {ProductsGrid} from "@/components/ProductsGrid/ProductsGrid";
import {Product} from "@/components/ProductCard/ProductCard";
import {SidebarFilters} from "@/components/SidebarFilters/SidebarFilters";

export default function Home() {
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

  return (
      <main>
          <SidebarFilters />
          <ProductsGrid products={testProducts} />
      </main>
  );
}
