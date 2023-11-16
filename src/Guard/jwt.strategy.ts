import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'xyztknseckey', // Replace with your secret key
    });
  }

  async validate(payload: JwtPayload): Promise<any> {
    // You can perform additional validation, e.g., checking if the user exists in the database
    if (!payload) {
      throw new UnauthorizedException();
    }
    return payload;
  }
}
