export type Categories =
  | 'action'
  | 'comedy'
  | 'drama'
  | 'horror'
  | 'romance'
  | 'sci-fi';

export type RootParamList = {
  CategoryList: {cat: Categories};
};
