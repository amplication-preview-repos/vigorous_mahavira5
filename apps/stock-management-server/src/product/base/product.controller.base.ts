/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { ProductService } from "../product.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProductCreateInput } from "./ProductCreateInput";
import { Product } from "./Product";
import { ProductFindManyArgs } from "./ProductFindManyArgs";
import { ProductWhereUniqueInput } from "./ProductWhereUniqueInput";
import { ProductUpdateInput } from "./ProductUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProductControllerBase {
  constructor(
    protected readonly service: ProductService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Product })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProduct(
    @common.Body() data: ProductCreateInput
  ): Promise<Product> {
    return await this.service.createProduct({
      data: {
        ...data,

        category: data.category
          ? {
              connect: data.category,
            }
          : undefined,

        order: data.order
          ? {
              connect: data.order,
            }
          : undefined,

        stock: data.stock
          ? {
              connect: data.stock,
            }
          : undefined,
      },
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        name: true,

        order: {
          select: {
            id: true,
          },
        },

        photo: true,
        price: true,
        rating: true,

        stock: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Product] })
  @ApiNestedQuery(ProductFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async products(@common.Req() request: Request): Promise<Product[]> {
    const args = plainToClass(ProductFindManyArgs, request.query);
    return this.service.products({
      ...args,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        name: true,

        order: {
          select: {
            id: true,
          },
        },

        photo: true,
        price: true,
        rating: true,

        stock: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async product(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    const result = await this.service.product({
      where: params,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        name: true,

        order: {
          select: {
            id: true,
          },
        },

        photo: true,
        price: true,
        rating: true,

        stock: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProduct(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() data: ProductUpdateInput
  ): Promise<Product | null> {
    try {
      return await this.service.updateProduct({
        where: params,
        data: {
          ...data,

          category: data.category
            ? {
                connect: data.category,
              }
            : undefined,

          order: data.order
            ? {
                connect: data.order,
              }
            : undefined,

          stock: data.stock
            ? {
                connect: data.stock,
              }
            : undefined,
        },
        select: {
          category: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          name: true,

          order: {
            select: {
              id: true,
            },
          },

          photo: true,
          price: true,
          rating: true,

          stock: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProduct(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    try {
      return await this.service.deleteProduct({
        where: params,
        select: {
          category: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          name: true,

          order: {
            select: {
              id: true,
            },
          },

          photo: true,
          price: true,
          rating: true,

          stock: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Put(":id/photo")
  @common.UseInterceptors(FileInterceptor("file"))
  @swagger.ApiConsumes("multipart/form-data")
  @swagger.ApiBody({
    schema: {
      type: "object",

      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiCreatedResponse({
    type: Product,
    status: "2XX",
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async uploadPhoto(
    @common.Param()
    params: ProductWhereUniqueInput,
    @common.UploadedFile()
    file: Express.Multer.File
  ): Promise<Product> {
    return this.service.uploadPhoto(
      {
        where: params,
      },
      Object.assign(file, {
        filename: file.originalname,
      })
    );
  }

  @common.Get(":id/photo")
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiOkResponse({
    type: common.StreamableFile,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async downloadPhoto(
    @common.Param()
    params: ProductWhereUniqueInput,
    @common.Res({
      passthrough: true,
    })
    res: Response
  ): Promise<common.StreamableFile> {
    const result = await this.service.downloadPhoto({
      where: params,
    });

    if (result === null) {
      throw new errors.NotFoundException(
        "No resource was found for ",
        JSON.stringify(params)
      );
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${result.filename}`
    );
    res.setHeader("Content-Type", result.mimetype);
    return result.stream;
  }

  @common.Delete(":id/photo")
  @swagger.ApiOkResponse({
    type: Product,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async deletePhoto(
    @common.Param()
    params: ProductWhereUniqueInput
  ): Promise<Product> {
    return this.service.deletePhoto({
      where: params,
    });
  }
}
