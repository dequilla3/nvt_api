import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ type: 'timestamptz', nullable: true })
  dateTime: Date;

  @Column({ nullable: true })
  isActive: boolean;
}
