import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TopPageModel } from './top-page.model/top-page.model';
import * as Path from 'path';
import { FindTopPageDto } from './top-page.model/dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  @HttpCode(201)
  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {}

  @HttpCode(200)
  @Get(':id')
  async get(@Param('id') id: string) {}

  @HttpCode(201)
  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @HttpCode(201)
  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPageModel) {}

  @HttpCode(200)
  @Get('find')
  async find(@Body() dto: FindTopPageDto) {}
}
