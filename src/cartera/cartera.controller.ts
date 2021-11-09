import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CarteraService } from './cartera.service';
import { CreateCarteraDto } from './dtos/create-cartera.dto';

@ApiTags('Carteras')
@Controller('cartera')
export class CarteraController {
  constructor(private readonly carteraService: CarteraService) {}
  @Get(':id')
  async getCarteraById(@Param('id', ParseIntPipe) id: number) {
    return await this.carteraService.getCarteraById(id);
  }
  @Post()
  async addCartera(@Body() cartera: CreateCarteraDto) {
    return await this.carteraService.addCartera(cartera);
  }
}
