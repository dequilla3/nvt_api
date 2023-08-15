import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Sales } from './sales.entity';
import { Stockard } from './stockard.entity';

@Entity()
export class DocModule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  moduleName: string;

  @Column()
  moduleCode: string;

  @OneToMany(() => Sales, (sales) => sales.module)
  saleses: Sales[];

  @OneToMany(() => Stockard, (stockard) => stockard.module)
  stockards: Stockard[];

  @Column({ type: 'timestamptz', nullable: true })
  dateTime: Date;

  @Column({ nullable: true })
  isActive: boolean;
}
