import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  orderId?: SortOrder;
  photo?: SortOrder;
  price?: SortOrder;
  rating?: SortOrder;
  stockId?: SortOrder;
  updatedAt?: SortOrder;
};
