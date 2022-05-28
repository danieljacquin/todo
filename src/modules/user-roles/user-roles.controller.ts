import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserRolesService } from './user-roles.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UserRole } from './entities/user-role.entity';
import { FindOneDto } from './dto/find-one.tdo';

@Controller('user-roles')
export class UserRolesController {
  constructor(private readonly userRolesService: UserRolesService) {}

  @Post('create')
  create(@Body() createUserRoleDto: CreateUserRoleDto): Promise<UserRole> {
    return this.userRolesService.create(createUserRoleDto);
  }

  @Get('all')
  findAll(): Promise<any> {
    return this.userRolesService.findAll();
  }

  @Get(':id')
  findOne(@Param() findOneDto: FindOneDto): Promise<UserRole| null> {
    return this.userRolesService.findOne(findOneDto);
  }

  @Put(':id')
  update(@Param() findOneDto: FindOneDto, @Body() updateUserRoleDto: UpdateUserRoleDto): Promise<UserRole> {
    return this.userRolesService.update(findOneDto, updateUserRoleDto);
  }

  @Delete(':id')
  remove(@Param() findOneDto: FindOneDto): Promise<UserRole> {
    return this.userRolesService.remove(findOneDto);
  }
}
