import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostoInicialController } from './costo-inicial.controller';
import { CostoInicialService } from './costo-inicial.service';
import { CostosIniciales } from './entities/costo-inicial_entity';

@Module({
  imports: [TypeOrmModule.forFeature([CostosIniciales])],
  controllers: [CostoInicialController],
  providers: [CostoInicialService],
})
export class CostoInicialModule {}
