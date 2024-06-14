import { SortOrder } from "../../util/SortOrder";

export type StockOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  minimumQuantity?: SortOrder;
  quantityAvailable?: SortOrder;
  replenishmentAlert?: SortOrder;
  updatedAt?: SortOrder;
};
