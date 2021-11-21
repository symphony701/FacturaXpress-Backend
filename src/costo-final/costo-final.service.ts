import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCostosFinalesDto } from './dtos/create-costo-final.dto';
import { CostosFinales } from './entities/costo-inicial_entity';

@Injectable()
export class CostoFinalService {
  constructor(
    @InjectRepository(CostosFinales)
    private readonly costoFinalRepository: Repository<CostosFinales>,
  ) {}
  async getCostosFinalesByCartera(idCartera: number) {
    return 'ok';
  }
  async addCostoFinal(CostoInicial: CreateCostosFinalesDto) {
    const costofinal = this.costoFinalRepository.create(CostoInicial);
    return this.costoFinalRepository.save(costofinal);
  }
}
