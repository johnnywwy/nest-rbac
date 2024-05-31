import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Permission } from '../../permission/entities/permission.entity';
import { Menu } from '../../menu/entities/menu.entity';

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
