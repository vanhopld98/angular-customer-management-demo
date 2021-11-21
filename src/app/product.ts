import {Category} from './category';

export interface Product {
  id?: number;
  name?: string;
  quantity?: number;
  price?: number;
  description?: string;
  category?: Category;
}
