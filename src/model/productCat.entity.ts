import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductCat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  producCatName: string;

  @Column()
  skuCode: string;

  @Column()
  unit: string;

  @OneToMany(() => Product, (product) => product.productCat)
  products: Product[];

  @Column()
  isActive: boolean;
}
