import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CostoFinalService } from './costo-final.service';
import { CreateCostosFinalesDto } from './dtos/create-costo-final.dto';

@Controller('costo-final')
export class CostoFinalController {
  constructor(private readonly costoFinalService: CostoFinalService) {}
  @Get(':idCartera')
  async getCostosFinalesByCartera(
    @Param('idCartera', ParseIntPipe) idCartera: number,
  ) {
    return this.costoFinalService.getCostosFinalesByCartera(idCartera);
  }
  @Post()
  async addCostoFinal(@Body() costoFinal: CreateCostosFinalesDto) {
    return this.costoFinalService.addCostoFinal(costoFinal);
  }
}
