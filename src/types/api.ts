import type { Producto } from "./producto";

export interface ProductosApiResponse {
  productos: Producto[];
  total: number;
  skip: number;
  limit: number;
}
