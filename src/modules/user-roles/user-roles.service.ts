import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolesService } from '../roles/roles.service';
import { UsersService } from '../users/users.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { FindOneDto } from './dto/find-one.tdo';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UserRole } from './entities/user-role.entity';

@Injectable()
export class UserRolesService {

  constructor(
    @InjectRepository(UserRole)
    private readonly userRoleRepository: Repository<UserRole>,
    private readonly usersService: UsersService,
    private readonly rolesService: RolesService
  ){}

  async create(createUserRoleDto: CreateUserRoleDto): Promise<UserRole> {
    
    const { userId, rolId } = createUserRoleDto;

    const user = await this.usersService.findOne({id: userId})

    const role = await this.rolesService.findOne({id: rolId});

    const created =  this.userRoleRepository.create({
      ...createUserRoleDto,
      user,
      role
    });

   return await this.userRoleRepository.save(created)

  }

  async findAll(): Promise<any> {
    return await this.userRoleRepository.find();
  }

  async findOne(findOneDto: FindOneDto): Promise<UserRole | null> {
    const { id } = findOneDto;

    const userRole = await this.userRoleRepository.findOne({
        where: {
          id
        }
    })

    if(!userRole) throw new NotFoundException(`UserRole with id: ${id} does not exist`);


    return userRole || null;
  }

  async update(findOneDto: FindOneDto, updateUserRoleDto: UpdateUserRoleDto): Promise<UserRole> {
    const { id } = findOneDto;

    const userRole = await this.findOne({id})

    const { userId, rolId } = updateUserRoleDto;

    const user = await this.usersService.findOne({id: userId});

    const role = await this.rolesService.findOne({id: rolId});

    const updated = await this.userRoleRepository.preload({
      id: userRole.id,
      ...updateUserRoleDto,
      user,
      role
    })

    return await this.userRoleRepository.save(updated);

  }

  async remove(findOneDto: FindOneDto): Promise<UserRole> {
    const userRoles = await this.findOne(findOneDto);
    return await this.userRoleRepository.remove(userRoles);
  }
}
