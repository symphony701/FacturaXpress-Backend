import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CostoInicialService } from './costo-inicial.service';
import { CreateCostosInicialesDto } from './dtos/create-costo-inicial.dto';

@ApiTags('Costos Iniciales')
@Controller('costo-inicial')
export class CostoInicialController {
  constructor(private readonly costoInicialService: CostoInicialService) {}
  @Get(':idCartera')
  async getCostosInicialesByCartera(
    @Param('idCartera', ParseIntPipe) idCartera: number,
  ) {
    return this.costoInicialService.getCostosInicialesByCartera(idCartera);
  }
  @Post()
  async addCostoInicial(@Body() costoInicial: CreateCostosInicialesDto) {
    return this.costoInicialService.addCostoInicial(costoInicial);
  }
}
