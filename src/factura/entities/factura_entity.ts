import { Cartera } from 'src/cartera/entities/cartera_entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Factura')
export class Factura {
  @PrimaryGeneratedColumn()
  CFactura: number;
  @Column({ type: 'date' })
  DFechaEmision: string;
  @Column({ type: 'date' })
  DFechaPago: string;
  @Column({ type: 'float' })
  NumMonto: number;
  @Column({ type: 'varchar', length: 10 })
  NMoneda: string;
  @ManyToOne(() => Cartera, (Cartera) => Cartera.facturas)
  @JoinColumn({ name: 'CCartera' })
  CCartera: number;
  @Column({ type: 'float' })
  NumTEA: number;
  @Column({ type: 'float' })
  NumTED: number;
  @Column({ type: 'float' })
  NumD360: number;
  @Column({ type: 'float' })
  NumDescuento: number;
  @Column({ type: 'float' })
  NumVNeto: number;
  @Column({ type: 'float' })
  NumVRecibido: number;
  @Column({ type: 'float' })
  NumVEntregado: number;
  @Column({ type: 'float' })
  NumTCEA: number;
  @Column({ type: 'int' })
  NumPlazoDescuento: number;
}
