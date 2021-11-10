import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factura } from './entities/factura_entity';
import { FacturaController } from './factura.controller';
import { FacturaService } from './factura.service';

@Module({
  imports: [TypeOrmModule.forFeature([Factura])],
  controllers: [FacturaController],
  providers: [FacturaService],
})
export class FacturaModule {}
