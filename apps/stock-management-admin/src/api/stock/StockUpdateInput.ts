import { ProductUpdateManyWithoutStocksInput } from "./ProductUpdateManyWithoutStocksInput";

export type StockUpdateInput = {
  minimumQuantity?: number | null;
  products?: ProductUpdateManyWithoutStocksInput;
  quantityAvailable?: number | null;
  replenishmentAlert?: boolean | null;
};
