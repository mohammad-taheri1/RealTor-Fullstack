import { PropertyType } from '@prisma/client';

export const mockGetHomesFilter1 = 'Shiraz';
export const mockGetHomesFilter2 = '150000';

export const mockGetHomesCallWithObject = {
  city: 'Shiraz',
  price: {
    gte: 150000,
  },
};

export const mocUserByHomeIdresponse = {
  id: 1000,
  name: 'Mamad',
  email: 'mamad.tmail.com',
  phone: '(917) 222 1234',
};

export const mockUpdateHomeResponse = {
  id: 1,
  address: '111 Axe Ave',
  number_of_bedrooms: 2,
  numbe_of_bathrooms: 5,
  city: 'Shiraz',
  landSize: 350,
  price: 52000,
  image: 'src1',
  propertyType: PropertyType.RESIDENTIAL,
};

export const mockUpdateHomeBody = {
  address: '111 Axe Ave',
  numberOfBathrooms: 2,
  numberOfBedrooms: 5,
  city: 'Shiraz',
  landSize: 350,
  price: 52000,
  propertyType: PropertyType.RESIDENTIAL,
};

export const mockUpdateHomeUser = {
  name: 'Mamad',
  id: 5,
  iat: 1673699917,
  exp: 1673735917,
};
