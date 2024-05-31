import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Permission } from './permission.entity';
import { Menu } from '../../';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Permission)
  permissions: Permission[];

  @ManyToMany(() => Menu)
  menus: Menu[];
}
