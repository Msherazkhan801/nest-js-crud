import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from './todo.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {} //here i call the product service as private read only

  @Post()
  //addproduct  will add the product it is a faction the title and description are going in body like this
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
    @Res() res: Response,
  ) {
    const generatedId = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    const response = {
      id: generatedId,
      message: 'Product created successfully',
    };
    return res.status(HttpStatus.CREATED).json(response);
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return { message: 'the data has been updated' };
  }

  @Delete(':id')
  removeProduct(@Param('id') prodId: string) {
    this.productsService.deleteProduct(prodId);
    return null;
  }
}
