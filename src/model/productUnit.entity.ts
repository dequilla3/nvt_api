import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Product } from './product.entity';

@Entity()
export class ProductUnit {
  @PrimaryGeneratedColumn()
  productUnitId: number;

  @Column()
  unit: string;

  @OneToMany(() => Product, (product) => product.productUnit)
  products: Product[];

  @Column({ type: 'timestamptz' })
  dateTime: Date;

  @Column()
  isActive: boolean;
}
