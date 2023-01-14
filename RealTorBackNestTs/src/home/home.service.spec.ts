import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { homeSelect, HomeService } from './home.service';
import {
  mockCreateHomeCallWithObject,
  mockCreateHomeParams,
  mockGetHomesResponse,
  mockCreateHomeResponse,
  mockCreateManyImagesResponse,
  mockCreateManyImagesCallWithObject,
} from '../mock/homeService.mock';
import { PropertyType } from '@prisma/client';
import { NotFoundException } from '@nestjs/common';

describe('HomeService', () => {
  let service: HomeService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HomeService,
        {
          provide: PrismaService,
          useValue: {
            home: {
              findMany: jest.fn().mockReturnValue(mockGetHomesResponse),
              create: jest.fn().mockReturnValue(mockCreateHomeResponse),
            },
            image: {
              createMany: jest
                .fn()
                .mockReturnValue(mockCreateManyImagesResponse),
            },
          },
        },
      ],
    }).compile();

    service = module.get<HomeService>(HomeService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getHomes', () => {
    const filters = {
      city: 'Shiraz',
      price: {
        gte: 5000,
        lte: 500000,
      },
      propertyType: PropertyType.RESIDENTIAL,
    };

    it('should be defined', () => {
      expect(service.getHomes).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof service.getHomes).toBe('function');
    });

    it('should call prisma home.findMany with correct params', async () => {
      const mockPrismaFindManyHomes = jest
        .fn()
        .mockReturnValue(mockGetHomesResponse);

      jest
        .spyOn(prismaService.home, 'findMany')
        .mockImplementation(mockPrismaFindManyHomes);

      await service.getHomes(filters);

      expect(mockPrismaFindManyHomes).toBeCalledWith({
        select: {
          ...homeSelect,
          images: {
            select: {
              url: true,
            },
            take: 1,
          },
        },
        where: filters,
      });
    });

    it('should throw not found exception exception if not homes are found', async () => {
      const mockPrismaFindManyHomes = jest.fn().mockReturnValue([]);

      jest
        .spyOn(prismaService.home, 'findMany')
        .mockImplementation(mockPrismaFindManyHomes);

      await expect(service.getHomes(filters)).rejects.toThrowError(
        NotFoundException,
      );
    });
  });

  describe('createHome', () => {
    it('should be defined', () => {
      expect(service.createHome).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof service.createHome).toBe('function');
    });

    it('should call prisma home.create with the correct payload', async () => {
      const mockCreateHome = jest.fn().mockReturnValue(mockCreateHomeResponse);

      jest
        .spyOn(prismaService.home, 'create')
        .mockImplementation(mockCreateHome);

      await service.createHome(mockCreateHomeParams, 5);

      expect(mockCreateHome).toBeCalledWith(mockCreateHomeCallWithObject);
    });

    it('should call prisma image.createMany with the correct payload', async () => {
      const mockCreateManyImage = jest
        .fn()
        .mockReturnValue(mockCreateManyImagesResponse);

      jest
        .spyOn(prismaService.image, 'createMany')
        .mockImplementation(mockCreateManyImage);

      await service.createHome(mockCreateHomeParams, 5);

      expect(mockCreateManyImage).toBeCalledWith(
        mockCreateManyImagesCallWithObject,
      );
    });
  });
});
