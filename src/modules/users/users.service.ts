import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindOneByEmailDto } from './dto/find-one-by-email.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindOneDto } from './dto/find-one.dto';

@Injectable()
export class UsersService {

  
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}


  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email } = createUserDto;

    const user = await this.findOneByEmail({email});

    if(user) throw new ConflictException('The user already exists with email: '+email)

    const created = await this.userRepository.create(createUserDto);

    const saved = await this.userRepository.save(created);

    return saved
  }

  async findAll(): Promise<any> {
    return await this.userRepository.find();
  }

  async findOne(findOneDto: FindOneDto): Promise<User | null> {
    const { id } = findOneDto;

    const user = await this.userRepository.findOne({
      where: {
        id
      }
    });

    if(!user) throw new NotFoundException(`User with id: ${id} does not exist`);
     
    return user || null ;
  }

  findOneByEmail(findOneByEmailDto: FindOneByEmailDto): Promise<User | null>{
    const { email } = findOneByEmailDto

    const user = this.userRepository.findOne({
      where: {
        email
      }
    });

    return user || null;
  }

  async update(findOneDto: FindOneDto, updateUserDto: UpdateUserDto): Promise<User> {

    const user = await this.findOne(findOneDto)

    console.log("paso por aqui");

    const updated = await this.userRepository.preload({
      id: user.id,
      ...updateUserDto
    });

    const saved = await this.userRepository.save(updated);

    return saved;
  }

  async remove(findOneDto: FindOneDto): Promise<User> {
    const user = await this.findOne(findOneDto)


    const deleted = await this.userRepository.remove(user);

    return deleted;
  }
}
