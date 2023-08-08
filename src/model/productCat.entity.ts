import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductCat {
  @PrimaryGeneratedColumn()
  productCatId: number;

  @Column()
  producCattName: string;

  @Column()
  skuCode: string;

  @Column()
  unit: string;

  @OneToMany(() => Product, (product) => product.productCat)
  products: ProductCat[];

  @Column()
  isActive: boolean;
}
