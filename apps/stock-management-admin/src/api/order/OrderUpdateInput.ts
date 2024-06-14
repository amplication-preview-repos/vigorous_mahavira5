import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  orderNumber?: string | null;
  products?: ProductUpdateManyWithoutOrdersInput;
};
