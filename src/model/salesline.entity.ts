import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Sales } from './sales.entity';
import { Sku } from './sku.entity';

@Entity()
export class Salesline {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sales, (sales) => sales.saleslines)
  @JoinColumn()
  sales: Sales;

  @ManyToOne(() => Sku, (sku) => sku.saleslines)
  @JoinColumn()
  sku: Sku;

  @Column()
  qty: number;
  
  @Column()
  amount: number;

  @Column({ type: 'timestamptz', nullable: true })
  dateTime: Date;

  @Column({ nullable: true })
  isActive: boolean;
}
