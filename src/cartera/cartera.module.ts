import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarteraController } from './cartera.controller';
import { CarteraService } from './cartera.service';
import { Cartera } from './entities/cartera_entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cartera])],
  controllers: [CarteraController],
  providers: [CarteraService],
})
export class CarteraModule {}
