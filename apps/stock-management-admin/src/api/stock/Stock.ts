import { Product } from "../product/Product";

export type Stock = {
  createdAt: Date;
  id: string;
  minimumQuantity: number | null;
  products?: Array<Product>;
  quantityAvailable: number | null;
  replenishmentAlert: boolean | null;
  updatedAt: Date;
};
