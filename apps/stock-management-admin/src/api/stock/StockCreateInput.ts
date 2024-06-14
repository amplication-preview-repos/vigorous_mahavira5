import { ProductCreateNestedManyWithoutStocksInput } from "./ProductCreateNestedManyWithoutStocksInput";

export type StockCreateInput = {
  minimumQuantity?: number | null;
  products?: ProductCreateNestedManyWithoutStocksInput;
  quantityAvailable?: number | null;
  replenishmentAlert?: boolean | null;
};
