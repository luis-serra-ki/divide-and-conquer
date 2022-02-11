import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { JWT_REFRESH_TOKEN_SECRET } from '../../../libs/constants/jwt';
import { ValidateUserAuthService } from '../interfaces/services/validate-user.auth.service.interface';
import { TYPES } from '../interfaces/types';
import TokenPayload from '../../../libs/interfaces/jwt/token-payload.interface';

@Injectable()
export default class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor(
    private readonly configService: ConfigService,
    @Inject(TYPES.services.ValidateAuthService)
    private readonly validateUserAuthService: ValidateUserAuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get(JWT_REFRESH_TOKEN_SECRET),
      passReqToCallback: true,
      ignoreExpiration: false,
    });
  }

  validate(request: Request, payload: TokenPayload) {
    const { authorization } = request.headers;
    if (!authorization) throw new UnauthorizedException();
    return this.validateUserAuthService.validateUserByRefreshToken(
      authorization,
      payload.userId,
    );
  }
}