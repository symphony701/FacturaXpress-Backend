import { Module } from '@nestjs/common';
import { CostoFinalService } from './costo-final.service';
import { CostoFinalController } from './costo-final.controller';
import { CostosFinales } from './entities/costo-inicial_entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CostosFinales])],
  providers: [CostoFinalService],
  controllers: [CostoFinalController],
})
export class CostoFinalModule {}
