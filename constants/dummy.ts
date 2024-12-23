interface ImageData {
  id: number;
  url: string;
}

const defaulthomeSwipeImageOne =
  'https://d1sjtleuqoc1be.cloudfront.net/wp-content/uploads/2016/11/23152131/shutterstock_371602600.jpg';
const defaulthomeSwipeImageTwo =
  'https://www.mpluscosmetics.com/wp-content/uploads/2024/08/effective-cosmetic-marketing-strategies-for-brands-03.jpg';
const defaulthomeSwipeImageThree = 'https://images.indianexpress.com/2023/02/makeup-de-clutter-1200.jpg';
const defaulthomeSwipeImagFour = 'https://www.researchdive.com/blogImages/nZaSRapLSY.jpeg';

export const dummyHomeSwiperData: ImageData[] = [
  { id: 1, url: defaulthomeSwipeImageOne },
  { id: 2, url: defaulthomeSwipeImageTwo },
  { id: 3, url: defaulthomeSwipeImageThree },
  { id: 4, url: defaulthomeSwipeImagFour },
];

export const dummyHomeTrendingData = [
  { id: '1', name: 'Item 1', price: '$10', image: 'https://via.placeholder.com/50' },
  { id: '2', name: 'Item 2', price: '$20', image: 'https://via.placeholder.com/50' },
  { id: '3', name: 'Item 3', price: '$30', image: 'https://via.placeholder.com/50' },
  { id: '4', name: 'Item 4', price: '$40', image: 'https://via.placeholder.com/50' },
  { id: '5', name: 'Item 5', price: '$10', image: 'https://via.placeholder.com/50' },
  { id: '6', name: 'Item 6', price: '$20', image: 'https://via.placeholder.com/50' },
  { id: '7', name: 'Item 7', price: '$30', image: 'https://via.placeholder.com/50' },
  { id: '8', name: 'Item 8', price: '$40', image: 'https://via.placeholder.com/50' },
];

export const dummyHomePopularData = [
  { id: '1', name: 'Category 1', itemCount: '10', image: 'https://via.placeholder.com/50' },
  { id: '2', name: 'Category 2', itemCount: '80', image: 'https://via.placeholder.com/50' },
  { id: '3', name: 'Category 3', itemCount: '20', image: 'https://via.placeholder.com/50' },
  { id: '4', name: 'Category 4', itemCount: '35', image: 'https://via.placeholder.com/50' },
  { id: '5', name: 'Category 5', itemCount: '8', image: 'https://via.placeholder.com/50' },
  { id: '6', name: 'Category 6', itemCount: '5', image: 'https://via.placeholder.com/50' },
  { id: '7', name: 'Category 7', itemCount: '80', image: 'https://via.placeholder.com/50' },
];
