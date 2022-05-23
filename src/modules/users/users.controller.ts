import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindOneDto } from './dto/find-one.dto';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { Public } from 'src/common/decorators/public.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get('all')
  findAll(): Promise<any> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param() findOneDto: FindOneDto): Promise<User | null> {
    return this.usersService.findOne(findOneDto);
  }

  @Put(':id')
  update(@Param()findOneDto: FindOneDto, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.update(findOneDto, updateUserDto);
  }

  @Delete(':id')
  remove(@Param() findOneDto: FindOneDto): Promise<User> {
    return this.usersService.remove(findOneDto);
  }
}
