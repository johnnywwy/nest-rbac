import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../modules/user/entities/user.entity';
import { Role } from '../modules/role/entities/role.entity';
import { Permission } from '../modules/permission/entities/permission.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}

  async initData() {
    // 生成用户
    const users: User[] = [];
    for (let i = 1; i <= 10; i++) {
      const user = new User();
      user.username = `User ${i}`;
      user.password = '123456'; // 默认密码
      users.push(user);
    }
    await this.userRepository.save(users);

    // 生成角色
    const roles: Role[] = [];
    const roleNames = ['管理员', '普通用户'];
    for (const roleName of roleNames) {
      const role = new Role();
      role.name = roleName;
      roles.push(role);
    }
    await this.roleRepository.save(roles);

    // 生成权限
    const permissions: Permission[] = [];
    const permissionNames = ['新增', '修改', '删除', '查询'];
    for (const permissionName of permissionNames) {
      const permission1 = new Permission();
      permission1.name = `${permissionName} aaa`;
      const permission2 = new Permission();
      permission2.name = `${permissionName} bbb`;
      permissions.push(permission1, permission2);
    }
    await this.permissionRepository.save(permissions);

    // 关联角色和权限
    roles[0].permissions = permissions;
    roles[1].permissions = permissions.slice(0, 4);
    await this.roleRepository.save(roles);
  }
}
