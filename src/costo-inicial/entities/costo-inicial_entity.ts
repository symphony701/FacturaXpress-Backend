import { Cartera } from 'src/cartera/entities/cartera_entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('costosiniciales')
export class CostosIniciales {
  @PrimaryGeneratedColumn()
  CCostoInicial: number;
  @ManyToOne(() => Cartera, (Cartera) => Cartera.costosIniciales)
  @JoinColumn({ name: 'CCartera' })
  CCartera: number;
  @Column({ type: 'varchar', length: 50 })
  NMotivo: string;
  @Column({ type: 'float' })
  NumMonto: number;
  @Column({ type: 'varchar', length: 10 })
  NMoneda: string;
}
