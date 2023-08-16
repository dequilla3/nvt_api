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

  @Column({ type: 'timestamptz', nullable: true })
  dateTime: Date;

  @Column({ nullable: true })
  isActive: boolean;
}
