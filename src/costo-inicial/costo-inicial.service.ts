import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCostosInicialesDto } from './dtos/create-costo-inicial.dto';
import { CostosIniciales } from './entities/costo-inicial_entity';

@Injectable()
export class CostoInicialService {
  constructor(
    @InjectRepository(CostosIniciales)
    private readonly costoInicialRepository: Repository<CostosIniciales>,
  ) {}
  async getCostosInicialesByCartera(idCartera: number) {
    return 'ok';
  }
  async addCostoInicial(CostoInicial: CreateCostosInicialesDto) {
    const costoinicial = this.costoInicialRepository.create(
      CostoInicial as any,
    );
    return this.costoInicialRepository.save(costoinicial);
  }
}
