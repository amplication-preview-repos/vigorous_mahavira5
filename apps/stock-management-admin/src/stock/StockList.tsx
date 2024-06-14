import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const StockList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Stocks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="MinimumQuantity" source="minimumQuantity" />
        <TextField label="QuantityAvailable" source="quantityAvailable" />
        <BooleanField label="ReplenishmentAlert" source="replenishmentAlert" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
