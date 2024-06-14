import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const StockEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="MinimumQuantity"
          source="minimumQuantity"
        />
        <ReferenceArrayInput
          source="products"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="QuantityAvailable"
          source="quantityAvailable"
        />
        <BooleanInput label="ReplenishmentAlert" source="replenishmentAlert" />
      </SimpleForm>
    </Edit>
  );
};
