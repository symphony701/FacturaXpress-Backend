import { Cartera } from 'src/cartera/entities/cartera_entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  CUsuario: number;
  @Column({ type: 'varchar', length: 40 })
  NUsuario: string;
  @Column({ type: 'varchar', length: 40 })
  NContrasenia: string;
  @Column({ type: 'varchar', length: 40 })
  NCorreo: string;
  @OneToMany(() => Cartera, (Cartera) => Cartera.CUsuario)
  carteras: Cartera[];
}
