export class Movie {
// tslint:disable-next-line: variable-name
  _id: string;
  title: string;
  reviews: {
    userName: string;
    rating: number;
    review: string;
  };
}
