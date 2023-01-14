import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import {
  mocUserByHomeIdresponse,
  mockGetHomesCallWithObject,
  mockGetHomesFilter1,
  mockGetHomesFilter2,
  mockUpdateHomeResponse,
  mockUpdateHomeUser,
  mockUpdateHomeBody,
} from 'src/mock/homeController.mock';
import { PrismaService } from 'src/prisma/prisma.service';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

describe('HomeController', () => {
  let controller: HomeController;
  let homeService: HomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
      providers: [
        {
          provide: HomeService,
          useValue: {
            getHomes: jest.fn().mockReturnValue([]),
            getRealtorByHomeId: jest
              .fn()
              .mockReturnValue(mocUserByHomeIdresponse),
            updateHomeById: jest.fn().mockReturnValue(mockUpdateHomeResponse),
          },
        },
        PrismaService,
      ],
    }).compile();

    controller = module.get<HomeController>(HomeController);
    homeService = module.get<HomeService>(HomeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getHomes', () => {
    it('should be defined', () => {
      expect(controller.getHomes).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof controller.getHomes).toBe('function');
    });

    it('should construct filter object correctly', async () => {
      const mockGetHomes = jest.fn().mockReturnValue([]);

      jest.spyOn(homeService, 'getHomes').mockImplementation(mockGetHomes);

      await controller.getHomes(mockGetHomesFilter1, mockGetHomesFilter2);

      expect(mockGetHomes).toBeCalledWith(mockGetHomesCallWithObject);
    });
  });

  describe('updateHome', () => {
    it('should be defined', () => {
      expect(controller.updateHome).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof controller.updateHome).toBe('function');
    });

    it("should throw UnauthorizedException if realtor didn't create home", async () => {
      await expect(
        controller.updateHome(5, mockUpdateHomeBody, mockUpdateHomeUser),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('should update home if realtor id is valid', async () => {
      const mockUpdateHome = jest.fn().mockReturnValue(mockUpdateHomeResponse);

      jest
        .spyOn(homeService, 'updateHomeById')
        .mockImplementation(mockUpdateHome);

      await controller.updateHome(5, mockUpdateHomeBody, {
        ...mockUpdateHomeUser,
        id: 1000,
      });

      expect(mockUpdateHome).toBeCalled();
    });
  });
});
