import { CostosIniciales } from 'src/costo-inicial/entities/costo-inicial_entity';
import { Factura } from 'src/factura/entities/factura_entity';
import { Usuario } from 'src/user/entities/user_entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cartera')
export class Cartera {
  @PrimaryGeneratedColumn()
  CCartera: number;
  @ManyToOne(() => Usuario, (Usuario) => Usuario.carteras)
  @JoinColumn({ name: 'CUsuario' })
  CUsuario: Usuario;
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
  @Column({ type: 'varchar', length: 40 })
  NPerioCapital: string;
  @Column({ type: 'int' })
  NumPerioCapital: number;
  @Column({ type: 'date' })
  DFechaDescuento: string;
  @OneToMany(
    () => CostosIniciales,
    (CostosIniciales) => CostosIniciales.CCartera,
  )
  costosIniciales: CostosIniciales[];
  @OneToMany(() => Factura, (Factura) => Factura.CCartera)
  facturas: Factura[];
}
