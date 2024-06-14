import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  orderNumber: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
