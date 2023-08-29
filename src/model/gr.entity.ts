import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DocModule } from './module.entity';
import { Grline } from './grline.entity';

@Entity()
export class Gr {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => DocModule, (module) => module.grs)
  @JoinColumn()
  module: DocModule;

  @Column()
  docnum: string;

  @Column()
  status: string;

  @OneToMany(() => Grline, (grline) => grline.grs)
  grlines: Grline[];

  @Column({ type: 'timestamptz', nullable: true })
  dateTime: Date;

  @Column({ nullable: true })
  isActive: boolean;
}
