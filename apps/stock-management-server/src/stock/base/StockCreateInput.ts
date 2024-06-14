/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, ValidateNested, IsBoolean } from "class-validator";
import { ProductCreateNestedManyWithoutStocksInput } from "./ProductCreateNestedManyWithoutStocksInput";
import { Type } from "class-transformer";

@InputType()
class StockCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  minimumQuantity?: number | null;

  @ApiProperty({
    required: false,
    type: () => ProductCreateNestedManyWithoutStocksInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateNestedManyWithoutStocksInput)
  @IsOptional()
  @Field(() => ProductCreateNestedManyWithoutStocksInput, {
    nullable: true,
  })
  products?: ProductCreateNestedManyWithoutStocksInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantityAvailable?: number | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  replenishmentAlert?: boolean | null;
}

export { StockCreateInput as StockCreateInput };
