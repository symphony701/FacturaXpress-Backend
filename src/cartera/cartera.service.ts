import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCarteraDto } from './dtos/create-cartera.dto';
import { Cartera } from './entities/cartera_entity';
//import { Usuario } from 'src/user/entities/user_entity';

@Injectable()
export class CarteraService {
  constructor(
    @InjectRepository(Cartera)
    private readonly carteraRepository: Repository<Cartera>,
  ) {}
  async getCarteraById(id: number) {
    return this.carteraRepository.findOne(id);
  }
  async addCartera(cartera: CreateCarteraDto) {
    const data = this.carteraRepository.create(cartera as any);
    return this.carteraRepository.save(data);
  }
  async getCarteraByUser(idUser: number) {
    return this.carteraRepository.find({
      where: {
        CUsuario: idUser,
      },
    });
  }
}
