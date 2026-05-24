import type { Producto } from "./producto";

interface ProductosApiResponse {
  productos: Producto[];
  total: number;
  skip: number;
  limit: number;
}
