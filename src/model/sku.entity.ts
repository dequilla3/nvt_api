import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ProductUnit } from './productUnit.entity';
import { Product } from './product.entity';
import { Stockard } from './stockard.entity';
import { Salesline } from './salesline.entity';
import { Grline } from './grline.entity';

@Entity()
export class Sku {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  skucode: string;

  @ManyToOne(() => ProductUnit, (productUnit) => productUnit.skus)
  @JoinColumn()
  productUnit: ProductUnit;

  @OneToOne(() => Product, (product) => product.sku)
  @JoinColumn()
  product: Product;

  @OneToMany(() => Stockard, (stockard) => stockard.sku)
  stockards: Stockard[];

  @OneToMany(() => Salesline, (salesline) => salesline.sku)
  saleslines: Salesline[];

  @OneToMany(() => Grline, (grline) => grline.sku)
  grlines: Grline[];

  @Column({ type: 'timestamptz', nullable: true })
  dateTime: Date;

  @Column({ nullable: true })
  isActive: boolean;
}
