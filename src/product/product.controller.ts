import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ProductModel } from './product.model/product.model';
import { HTTP_CODE_METADATA } from '@nestjs/common/constants';
import { FindProductDto } from './dto/find-product';

@Controller('product')
export class ProductController {
  @HttpCode(201)
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) {}

  @HttpCode(200)
  @Get(':id')
  async get(@Param('id') id) {}

  @HttpCode(201)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: ProductModel) {}

  @HttpCode(201)
  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {}
}
