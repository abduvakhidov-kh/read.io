export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks?: {
      thumbnail: string;
    };
    categories?: string[];
    authors?: string[];
  };
}