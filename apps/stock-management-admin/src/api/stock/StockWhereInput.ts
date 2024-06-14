import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type StockWhereInput = {
  id?: StringFilter;
  minimumQuantity?: IntNullableFilter;
  products?: ProductListRelationFilter;
  quantityAvailable?: IntNullableFilter;
  replenishmentAlert?: BooleanNullableFilter;
};
