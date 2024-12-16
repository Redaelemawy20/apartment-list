export enum ApartmentStatus {
  Available,
  Sold,
  Rented,
}

export default interface ApartmentDetailsI {
  _id: string;
  name: string;
  price: number;
  size: number;
  rooms: number;
  status: ApartmentStatus;
  image: string;
  views: number;
  recommendations: number;
  description: string;
  createdAt: string;
  project: {
    _id: string;
    name: string;
    description?: string;
  };
  area: {
    _id: string;
    name: string;
    description?: string;
  };
}
