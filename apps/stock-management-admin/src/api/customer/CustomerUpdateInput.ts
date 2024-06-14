import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  password?: string | null;
};
