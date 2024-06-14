import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  orderNumber?: string | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
};
