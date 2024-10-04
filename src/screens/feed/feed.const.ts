// Define a function to generate a random date
function getRandomDate() {
  const startDate = new Date('2024-01-01');
  const endDate = new Date('2024-10-01');
  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime()),
  );
  return randomDate.toISOString().split('T')[0];
}

// Define a function to generate a random avatar
function getRandomAvatar() {
  const avatars = [
    'https://picsum.photos/200/200',
    'https://picsum.photos/200/201',
    'https://picsum.photos/200/202',
    'https://picsum.photos/200/203',
    'https://picsum.photos/200/204',
  ];
  return avatars[Math.floor(Math.random() * avatars.length)];
}

// Define a function to generate a random carousel image
function getRandomCarouselImage() {
  const carouselImages = [
    'https://picsum.photos/400/200',
    'https://picsum.photos/400/201',
    'https://picsum.photos/400/202',
    'https://picsum.photos/400/203',
    'https://picsum.photos/400/204',
  ];
  return carouselImages[Math.floor(Math.random() * carouselImages.length)];
}

// Generate the Instagram feed array
const feeds = Array.from({length: 500}, (_, index) => {
  return {
    id: index + 1,
    username: `user${index + 1}`,
    avatar: getRandomAvatar(),
    carouselImages: Array.from(
      {length: Math.floor(Math.random() * 5) + 1},
      () => getRandomCarouselImage(),
    ),
    description: `This is a sample description for post ${
      index + 1
    } Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    likes: Math.floor(Math.random() * 1000),
    dislikes: Math.floor(Math.random() * 100),
    postDate: getRandomDate(),
  };
});

const feed = [
  {
    id: 1,
    username: 'user1',
    avatar: 'https://avatars.githubusercontent.com/u/123456?v=4',
    carouselImages: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/301',
    ],
    description: 'This is a sample description for post 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    likes: 500,
    dislikes: 20,
    postDate: '2022-01-01T12:00:00.000Z',
  },
  {
    id: 2,
    username: 'user2',
    avatar: 'https://avatars.githubusercontent.com/u/789012?v=4',
    carouselImages: [
      'https://picsum.photos/200/302',
      'https://picsum.photos/200/303',
      'https://picsum.photos/200/304',
    ],
    description: 'This is a sample description for post 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    likes: 800,
    dislikes: 30,
    postDate: '2022-01-05T14:00:00.000Z',
  },
  {
    id: 3,
    username: 'user3',
    avatar: 'https://avatars.githubusercontent.com/u/345678?v=4',
    carouselImages: [
      'https://picsum.photos/200/305',
    ],
    description: 'This is a sample description for post 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    likes: 200,
    dislikes: 10,
    postDate: '2022-01-10T10:00:00.000Z',
  },
  {
    id: 4,
    username: 'user4',
    avatar: 'https://avatars.githubusercontent.com/u/567890?v=4',
    carouselImages: [
      'https://picsum.photos/200/306',
      'https://picsum.photos/200/307',
      'https://picsum.photos/200/308',
      'https://picsum.photos/200/309',
    ],
    description: 'This is a sample description for post 4 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    likes: 1200,
    dislikes: 50,
    postDate: '2022-01-15T16:00:00.000Z',
  },
  {
    id: 5,
    username: 'user5',
    avatar: 'https://avatars.githubusercontent.com/u/901234?v=4',
    carouselImages: [
      'https://picsum.photos/200/310',
    ],
    description: 'This is a sample description for post 5 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    likes: 400,
    dislikes: 25,
    postDate: '2022-01-20T12:00:00.000Z',
  },
];
export {feeds,feed};
