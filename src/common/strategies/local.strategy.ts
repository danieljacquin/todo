import { Strategy } from 'passport-local';
import {PassportStrategy} from '@nestjs/passport';
import { AuthService } from '../../modules/auth/auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local'){

    constructor(private readonly authService: AuthService){
        super(
            {
                usernameField: 'email',
                passwordField: 'password'
            }
        )
    }


    async validate(email: string, password: string): Promise<any> {
        console.log("unau")
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            
          throw new UnauthorizedException();
        }
        return user;
      }
    
}


