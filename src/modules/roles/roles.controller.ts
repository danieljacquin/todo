import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { FindOneDto } from './dto/find-one.tdo';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post('create')
  create(@Body() createRoleDto: CreateRoleDto): Promise<Role>{
    return this.rolesService.create(createRoleDto);
  }

 
  @Get('all')
  findAll(): Promise<any> {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param() findOneDto: FindOneDto): Promise<Role | null> {
    return this.rolesService.findOne(findOneDto);
  }

  @Put(':id')
  update(@Param()findOneDto: FindOneDto, @Body() updateRoleDto: UpdateRoleDto): Promise<Role> {
    return this.rolesService.update(findOneDto, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param() findOneDto: FindOneDto): Promise<Role> {
    return this.rolesService.remove(findOneDto);
  }
}
