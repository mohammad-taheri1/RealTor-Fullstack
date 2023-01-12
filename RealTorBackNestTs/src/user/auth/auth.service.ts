import { Injectable, ConflictException, HttpException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserType } from '@prisma/client';

interface SignupParams {
  email: string;
  password: string;
  name: string;
  phone: string;
}

interface SigninParams {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  // 1
  async signup({ email, password, name, phone }: SignupParams, userType: UserType) {
    //
    const isUserExists = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (isUserExists) {
      throw new ConflictException('Email is Already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prismaService.user.create({
      data: {
        email,
        name,
        phone,
        password: hashedPassword,
        user_type: userType,
      },
    });

    return await this.generateJWT(name, user.id);
  }

  // 2
  async signin({ email, password }: SigninParams) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new HttpException('Invalid credentials', 444);
    }

    const hashedPassword = user.password;

    const isValidPassword = await bcrypt.compare(password, hashedPassword);

    if (!isValidPassword) {
      throw new HttpException('Invalid credentials', 444);
    }

    return await this.generateJWT(user.name, user.id);
  }

  private generateJWT(name: string, id: number) {
    return jwt.sign(
      {
        name,
        id,
      },
      process.env.JSON_TOKEN_KEY,
      {
        expiresIn: 36000,
      },
    );
  }

  generatProductKey(email: string, userType: UserType) {
    const string = `${email}-${userType}-${process.env.PRODUCT_KEY_SECRET}`;

    return bcrypt.hash(string, 10);
  }
}
