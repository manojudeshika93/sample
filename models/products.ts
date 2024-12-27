export interface ProductData {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
}

export interface Products {
  title: string;
  data: ProductData[];
}
