import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Permission } from '../../permission/entities/permission.entity';
// import { Menu } from '../../menu/entities/menu.entity';
// import { User } from 'src/modules/user/entities/user.entity';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn({
    comment: '角色id',
  })
  id: number;

  @Column({
    comment: '角色名称',
    length: 20,
  })
  name: string;

  @CreateDateColumn({
    comment: '创建时间',
  })
  createTime: Date;

  @UpdateDateColumn({
    comment: '更新时间',
  })
  updateTime: Date;

  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'role_permission_relation',
  })
  permissions: Permission[];
}
