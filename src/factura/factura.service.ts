import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacturaDto } from './dtos/create-factura.dto';
import { Factura } from './entities/factura_entity';

@Injectable()
export class FacturaService {
  constructor(
    @InjectRepository(Factura)
    private readonly facturaRepository: Repository<Factura>,
  ) {}
  async getFacturasByCartera(idCartera: number) {
    return 'ok';
  }
  async addFactura(factura: CreateFacturaDto) {
    const data = this.facturaRepository.create(factura as any);
    return this.facturaRepository.save(data);
  }
}
