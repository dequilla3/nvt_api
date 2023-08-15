import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DocModule } from './module.entity';
import { Sku } from './sku.entity';

@Entity()
export class Stockard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  docnum: string;

  @ManyToOne(() => DocModule, (module) => module.stockards)
  @JoinColumn()
  module: DocModule;

  @ManyToOne(() => Sku, (sku) => sku.stockards)
  @JoinColumn()
  sku: Sku;

  @Column()
  qty: number;

  @Column()
  amount: number;

  @Column()
  qtyBalance: number;

  @Column()
  amountBalance: number;
}
