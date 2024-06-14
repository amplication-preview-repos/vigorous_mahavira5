import { Category } from "../category/Category";
import { Order } from "../order/Order";
import { JsonValue } from "type-fest";
import { Stock } from "../stock/Stock";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  order?: Order | null;
  photo: JsonValue;
  price: number | null;
  rating: number | null;
  stock?: Stock | null;
  updatedAt: Date;
};
