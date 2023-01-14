import { PropertyType } from '@prisma/client';

export const mockGetHomesResponse = [
  {
    id: 3,
    address: '111 Axe Ave',
    city: 'Dalas',
    price: 500000,
    propertyType: PropertyType.CONDO,
    image: 'img00125',
    number_of_bedrooms: 4,
    numbe_of_bathrooms: 5,
    images: [{ url: 'lorem ipsum' }, { url: 'fs ews' }],
  },
  {
    id: 5,
    address: 'Phaz2 - 26 Hektari ',
    city: 'Sadra',
    price: 140000,
    propertyType: PropertyType.RESIDENTIAL,
    image: 'fagag',
    number_of_bedrooms: 4,
    numbe_of_bathrooms: 7,
    images: [{ url: 'lorem ipsum' }, { url: 'fs ews' }],
  },
  {
    id: 4,
    address: 'Maali Abad - 26 alley',
    city: 'Galedar',
    price: 20000,
    propertyType: PropertyType.CONDO,
    image: 'dsfasfdd',
    number_of_bedrooms: 2,
    numbe_of_bathrooms: 1,
    images: [{ url: 'lorem ipsum' }, { url: 'fs ews' }],
  },
  {
    id: 7,
    address: 'Phaz5 - 234 abds ',
    city: 'yazd',
    price: 43000,
    propertyType: PropertyType.RESIDENTIAL,
    image: 'asdfsdfsdfdsf',
    number_of_bedrooms: 4,
    numbe_of_bathrooms: 7,
    images: [{ url: 'lorem ipsum' }, { url: 'fs ews' }],
  },
  {
    id: 9,
    address: 'Phaz5 - 234 abds ',
    city: 'Dalahoooo',
    price: 43000,
    propertyType: PropertyType.RESIDENTIAL,
    image: 'asdfsdfsdfdsf',
    number_of_bedrooms: 4,
    numbe_of_bathrooms: 7,
    images: [{ url: 'lorem ipsum' }, { url: 'fs ews' }],
  },
  {
    id: 10,
    address: 'Phaz5 - 234 abds ',
    city: 'Dalahoooo',
    price: 43000,
    propertyType: PropertyType.RESIDENTIAL,
    image: 'asdfsdfsdfdsf',
    number_of_bedrooms: 4,
    numbe_of_bathrooms: 7,
    images: [{ url: 'lorem ipsum' }, { url: 'fs ews' }],
  },
  {
    id: 11,
    address: 'Phaz5 - 234 abds ',
    city: 'Dalahoooo',
    price: 43000,
    propertyType: PropertyType.RESIDENTIAL,
    image: 'asdfsdfsdfdsf',
    number_of_bedrooms: 4,
    numbe_of_bathrooms: 7,
    images: [{ url: 'lorem ipsum' }, { url: 'fs ews' }],
  },
  {
    id: 12,
    address: 'Phaz5 - 234 abds ',
    city: 'Dalahoooo',
    price: 43000,
    propertyType: PropertyType.RESIDENTIAL,
    image: 'asdfsdfsdfdsf',
    number_of_bedrooms: 4,
    numbe_of_bathrooms: 7,
    images: [{ url: 'lorem ipsum' }, { url: 'fs ews' }],
  },
  {
    id: 13,
    address: 'Phaz5 - 234 abds ',
    city: 'Dalahoooo',
    price: 43000,
    propertyType: PropertyType.RESIDENTIAL,
    image: 'asdfsdfsdfdsf',
    number_of_bedrooms: 4,
    numbe_of_bathrooms: 7,
    images: [{ url: 'lorem ipsum' }, { url: 'fs ews' }],
  },
  {
    id: 14,
    address: 'Phaz5 - 234 abds ',
    city: 'Dalahoooo',
    price: 43000,
    propertyType: PropertyType.RESIDENTIAL,
    image: 'asdfsdfsdfdsf',
    number_of_bedrooms: 4,
    numbe_of_bathrooms: 7,
    images: [{ url: 'lorem ipsum' }, { url: 'fs ews' }],
  },
  {
    id: 15,
    address: 'Phaz5 - 234 abds ',
    city: 'Dalahoooo',
    price: 43000,
    propertyType: PropertyType.RESIDENTIAL,
    image: 'asdfsdfsdfdsf',
    number_of_bedrooms: 4,
    numbe_of_bathrooms: 7,
    images: [{ url: 'lorem ipsum' }, { url: 'fs ews' }],
  },
];

export const mockCreateHomeResponse = {
  id: 1,
  address: '111 Axe Ave',
  number_of_bedrooms: 2,
  numbe_of_bathrooms: 5,
  city: 'Shiraz',
  landSize: 350,
  price: 52000,
  propertyType: PropertyType.RESIDENTIAL,
  image: 'src1',
  images: [{ url: 'src1' }, { url: 'src2' }, { url: 'src3' }],
};

export const mockCreateHomeParams = {
  address: '111 Axe Ave',
  numberOfBathrooms: 2,
  numberOfBedrooms: 5,
  city: 'Shiraz',
  landSize: 350,
  price: 52000,
  propertyType: PropertyType.RESIDENTIAL,
  images: [{ url: 'src1' }, { url: 'src2' }, { url: 'src3' }],
};

export const mockCreateHomeCallWithObject = {
  data: {
    address: '111 Axe Ave',
    number_of_bathrooms: 2,
    number_of_bedrooms: 5,
    city: 'Shiraz',
    land_size: 350,
    price: 52000,
    propertyType: PropertyType.RESIDENTIAL,
    realtor_id: 5,
  },
};

export const mockCreateManyImagesResponse = [
  {
    id: 1,
    url: 'src1',
  },
  {
    id: 2,
    url: 'src2',
  },
  {
    id: 3,
    url: 'src3',
  },
];

export const mockCreateManyImagesCallWithObject = {
  data: [
    {
      url: 'src1',
      home_id: 1,
    },
    {
      url: 'src2',
      home_id: 1,
    },
    {
      url: 'src3',
      home_id: 1,
    },
  ],
};
