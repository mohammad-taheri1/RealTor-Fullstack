import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseEnumPipe,
  UnauthorizedException,
} from '@nestjs/common';
import { UserType } from '@prisma/client';
import { GenerateProductKeyDto, SigninDto, SignupDto } from '../dtos/auth.dto';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcryptjs';
import { User } from '../../decorators/user.decorator';
import { UserInfo } from 'src/types/commonTypes.types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup/:userType')
  async signup(
    @Body() body: SignupDto,
    @Param('userType', new ParseEnumPipe(UserType)) userType: UserType,
  ) {
    if (userType !== UserType.BUYER) {
      if (!body.productKey) {
        throw new UnauthorizedException('You Should Insert productKey');
      }

      const validPoductKey = `${body.email}-${userType}-${process.env.PRODUCT_KEY_SECRET}`;

      const isValidProductKey = await bcrypt.compare(
        validPoductKey,
        body.productKey,
      );

      if (!isValidProductKey) {
        throw new UnauthorizedException('You Should Insert valid productKey');
      }
    }

    return this.authService.signup(body, userType);
  }

  @Post('/signin')
  signin(@Body() body: SigninDto) {
    return this.authService.signin(body);
  }

  @Post('/key')
  generateProductKey(@Body() { userType, email }: GenerateProductKeyDto) {
    return this.authService.generatProductKey(email, userType);
  }

  @Get('/me')
  me(@User() user: UserInfo) {
    if (!user) {
      throw new UnauthorizedException('You are not authenticated');
    }
    return user;
  }
}
