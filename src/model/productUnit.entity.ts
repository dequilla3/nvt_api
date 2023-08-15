import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Sku } from './sku.entity';

@Entity()
export class ProductUnit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unit: string;

  @OneToMany(() => Sku, (sku) => sku.productUnit)
  skus: Sku[];

  @Column({ type: 'timestamptz' })
  dateTime: Date;

  @Column()
  isActive: boolean;
}
