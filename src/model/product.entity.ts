import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ProductCat } from './productCat.entity';
import { Sku } from './sku.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productCode: string;

  @Column()
  productName: string;

  @ManyToOne(() => ProductCat, (prodCat) => prodCat.products)
  @JoinColumn()
  productCat: ProductCat;

  @OneToOne(() => Sku, (sku) => sku.product)
  sku: Sku;

  @Column({ type: 'timestamptz', nullable: true })
  dateTime: Date;

  @Column({ nullable: true })
  isActive: boolean;
}
