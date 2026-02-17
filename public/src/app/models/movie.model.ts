export class Movie {
  _id: string = '';
  title: string = '';
  reviews: {
    userName: string;
    rating: number;
    review: string;
  } = {
    userName: '',
    rating: 0,
    review: ''
  };
}
