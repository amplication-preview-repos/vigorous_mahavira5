import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  photo?: InputJsonValue;
  price?: number | null;
  rating?: number | null;
  stock?: StockWhereUniqueInput | null;
};
