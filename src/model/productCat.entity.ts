import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductCat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productCatName: string;

  @OneToMany(() => Product, (product) => product.productCat)
  products: Product[];

  @Column({ nullable: true })
  isActive: boolean;
}
