import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DocModule } from './module.entity';
import { Salesline } from './salesline.entity';

@Entity()
export class Sales {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => DocModule, (module) => module.saleses)
  @JoinColumn()
  module: DocModule;

  @Column()
  docnum: string;

  @Column()
  status: string;

  @OneToMany(() => Salesline, (salesline) => salesline.sales)
  saleslines: Salesline[];

  @Column({ type: 'timestamptz', nullable: true })
  dateTime: Date;

  @Column({ nullable: true })
  isActive: boolean;
}
