import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserdto } from './dtos/create-user.dto';
import { Usuario } from './entities/user_entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,
  ) {}
  async getUsers() {
    return await this.userRepository.find();
  }
  async getUserById(id: number) {
    return await this.userRepository.findOne(id);
  }
  async createUser(user: CreateUserdto) {
    const usuario = this.userRepository.create(user as any);
    return this.userRepository.save(usuario);
  }
  async validateUser(user: string, password: string) {
    return await this.userRepository.find({
      NUsuario: user,
      NContrasenia: password,
    });
  }
}
