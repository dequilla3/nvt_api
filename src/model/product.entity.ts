import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { ProductCat } from './productCat.entity';
import { ProductUnit } from './productUnit.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column()
  productName: string;

  @ManyToOne(() => ProductCat, (prodCat) => prodCat.products)
  productCat: ProductCat;

  @ManyToOne(() => ProductUnit, (productUnit) => productUnit.products)
  productUnit: ProductUnit;

  @Column({ type: 'timestamptz' })
  dateTime: Date;

  @Column()
  isActive: boolean;
}
