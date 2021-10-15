import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  taste: string;

  @Column()
  description?: string;

  @Column()
  quantity: number;

  @UpdateDateColumn()
  updateAt: Date;
}
