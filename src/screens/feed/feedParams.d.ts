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

interface Feeds {
  [index: number]: feedPost;
}
