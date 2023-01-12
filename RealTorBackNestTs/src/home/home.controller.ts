import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { HomeResponseDto } from './dto/home.dto';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  getHomes(): Promise<HomeResponseDto[]> {
    return this.homeService.getHomes();
  }

  @Get(':id')
  getHome() {
    return 'getHome';
  }

  @Post()
  createHome() {
    return 'createHome';
  }

  @Put(':id')
  updateHome() {
    return 'updateHome';
  }

  @Delete(':id')
  deleteHome() {
    return 'deleteHome';
  }
}
