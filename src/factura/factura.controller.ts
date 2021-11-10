import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFacturaDto } from './dtos/create-factura.dto';
import { FacturaService } from './factura.service';

@ApiTags('Facturas')
@Controller('factura')
export class FacturaController {
  constructor(private readonly facturaService: FacturaService) {}
  @Get(':idCartera')
  async getFacturasByCartera(
    @Param('idCartera', ParseIntPipe) idCartera: number,
  ) {
    return await this.facturaService.getFacturasByCartera(idCartera);
  }
  @Post()
  async addFactura(@Body() factura: CreateFacturaDto) {
    return await this.facturaService.addFactura(factura);
  }
  @Get('/user/:idUser')
  async getCarteraByUser(@Param('idUser', ParseIntPipe) idUser: number) {
    return await this.facturaService.getFacutrasByUser(idUser);
  }
}
