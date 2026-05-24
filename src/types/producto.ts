interface Producto {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  brand: string;
  thumbnail: string;
}

type ProductoPreview = Pick<Producto, "id" | "title" | "price" | "thumbnail">;

type ProductoEnCarrito = Producto & { cantidad: number };

export type { Producto, ProductoPreview, ProductoEnCarrito };
