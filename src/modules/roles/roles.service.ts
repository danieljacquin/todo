import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindOneDto } from '../users/dto/find-one.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {

   constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>
  ){}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const created = await this.roleRepository.create(createRoleDto);
    const saved = await this.roleRepository.save(created);
    return saved
  }


  async findAll(): Promise<any> {

    return await this.roleRepository.find();
  }

  async findOne(findOneDto: FindOneDto): Promise<Role | null> {
    const { id } = findOneDto;
    const role = await this.roleRepository.findOne({
      where: {
        id
      }
    });
    if(!role) throw new NotFoundException(`Role with id: ${id} does not exist`);
     
    return role || null ;
  }

  async update(findOneDto: FindOneDto, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const role = await this.findOne(findOneDto)
    const updated = await this.roleRepository.preload({
      id: role.id,
      ...updateRoleDto
    });

    return await this.roleRepository.save(updated);
  }

  async remove(findOneDto: FindOneDto): Promise<Role> {
    const role = await this.findOne(findOneDto)
    return await this.roleRepository.remove(role);
  }
}

