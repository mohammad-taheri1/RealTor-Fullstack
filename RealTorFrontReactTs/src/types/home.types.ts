export interface IHomeDto {
  id: number;
  address: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  city: string;
  listedDate: Date;
  price: number;
  image: string;
  landSize: number;
  propertyType: PropertyType;
}

enum PropertyType {
  RESIDENTIAL,
  CONDO
}