export interface feedInitialState {
  data: Array<feedPost>;
}
interface feedPost {
  id: number;
  username: string;
  avatar: string;
  carouselImages: string[];
  description: string;
  likes: number;
  dislikes: number;
  postDate: string;
}
