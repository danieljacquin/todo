import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
    ){}


  async validateUser(email:string, password: string): Promise<any>{
    const user = await this.usersService.findOneByEmail({email});
    if(!user) return null;
    const passwordcheked = await user.checkPassword(password);
    if(passwordcheked){
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { name: user.name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

 
}
