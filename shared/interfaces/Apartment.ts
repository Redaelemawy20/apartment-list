export default interface Apartment {
  _id: string;
  title: string;
  price: number;
  size: number;
  rooms: number;
  image: string;
  project: string;
  status: ApartmentStatus;
}
export enum ApartmentStatus {
  Available,
  Sold,
  Rented,
}
