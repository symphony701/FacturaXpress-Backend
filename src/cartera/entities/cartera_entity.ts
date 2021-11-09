import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Cartera')
export class Cartera {
  @PrimaryGeneratedColumn()
  CCartera: number;
  @Column({ type: 'int' })
  CUsuario: number;
  @Column({ type: 'varchar', length: 40 })
  NTipoTasa: string;
  @Column({ type: 'float' })
  NumPorcentajeTasa: number;
  @Column({ type: 'varchar', length: 40 })
  NPlazoTasa: string;
  @Column({ type: 'int' })
  NumPlazoTasa: number;
  @Column({ type: 'int' })
  NumDiasXAnio: number;
  @Column({ type: 'int' })
  NumPlazoDescuento: number;
  @Column({ type: 'varchar', length: 40 })
  NPerioCapital: string;
  @Column({ type: 'int' })
  NumPerioCapital: number;
}
