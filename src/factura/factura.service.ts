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
    return idCartera;
  }
  async addFactura(factura: CreateFacturaDto) {
    const data = this.facturaRepository.create(factura as any);
    return this.facturaRepository.save(data);
  }
  async getFacutrasByUser(idUser: number) {
    return await this.facturaRepository
      .createQueryBuilder('factura')
      .innerJoin('factura.CCartera', 'cartera')
      .select('factura.CFactura')
      .addSelect('factura.DFechaEmision')
      .addSelect('factura.DFechaPago')
      .addSelect('factura.NumMonto')
      .addSelect('factura.NMoneda')
      .addSelect('factura.CCartera')
      .addSelect('factura.NumTEA')
      .addSelect('factura.NumTED')
      .addSelect('factura.NumD360')
      .addSelect('factura.NumDescuento')
      .addSelect('factura.NumVNeto')
      .addSelect('factura.NumVRecibido')
      .addSelect('factura.NumVEntregado')
      .addSelect('factura.NumTCEA')
      .addSelect('factura.NumVRecibidoTotal')
      .addSelect('factura.NumTCEATotal')
      .addSelect('factura.NMotivo')
      .where('cartera.CUsuario = :usuario', { usuario: idUser })
      .getMany();
  }
}
