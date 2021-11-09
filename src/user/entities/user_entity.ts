import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  CUsuario: number;
  @Column({ type: 'varchar', length: 40 })
  NUsuario: string;
  @Column({ type: 'varchar', length: 40 })
  NContrasenia: string;
  @Column({ type: 'varchar', length: 40 })
  NCorreo: string;
}
