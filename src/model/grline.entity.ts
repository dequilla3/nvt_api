import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Gr } from './gr.entity';
import { Sku } from './sku.entity';

@Entity()
export class Grline {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Gr, (gr) => gr.grlines)
  @JoinColumn()
  grs: Gr;

  @ManyToOne(() => Sku, (sku) => sku.grlines)
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
