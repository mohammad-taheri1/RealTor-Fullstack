import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserInfo } from 'src/types/commonTypes.types';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly prismaService: PrismaService,
  ) {}
  async canActivate(context: ExecutionContext) {
    // Get UsereTypes array from @Roles()
    const roles: string[] = this.reflector.getAllAndOverride('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    //console.log(roles);

    if (roles?.length) {
      // Get JWT from header and verify it
      const request = context.switchToHttp().getRequest();
      const token = request.headers?.authorization?.split('Bearer ')[1];
      try {
        const payload = (await jwt.verify(
          token,
          process.env.JSON_TOKEN_KEY,
        )) as UserInfo;

        const user = await this.prismaService.user.findUnique({
          where: {
            id: payload.id,
          },
          select: {
            user_type: true,
          },
        });
        if (roles.includes(user.user_type)) return true;

        return false;
      } catch (error) {
        return false;
      }
    }
    //
    return true;
  }
}
