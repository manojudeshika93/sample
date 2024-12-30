import { Notification } from '@/models';
import { Products } from '@/models/products';

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
  {
    id: '1',
    name: 'Dr Renaud',
    price: 'AED 10.00',
    isNew: true,
    image:
      'https://nazih.ae/media/catalog/product/1/2/12130140.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
  },
  {
    id: '2',
    name: 'Artistic Nail Design',
    price: 'AED 20.00',
    isNew: true,
    image:
      'https://nazih.ae/media/catalog/product/1/6/16640143040.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
  },
  {
    id: '3',
    name: 'Macadamia Natural',
    price: 'AED 30.00',
    isNew: false,
    image:
      'https://nazih.ae/media/catalog/product/3/9/3933006-3.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
  },
  {
    id: '4',
    name: 'Ravlon Professional',
    price: 'AED 40.00',
    isNew: false,
    image:
      'https://nazih.ae/media/catalog/product/1/6/16470467.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
  },
  {
    id: '5',
    name: 'Paul Michella',
    price: 'AED 10.00',
    isNew: false,
    image:
      'https://nazih.ae/media/catalog/product/1/7/17770310002.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
  },
  {
    id: '6',
    name: 'GHD',
    price: 'AED 20.00',
    isNew: false,
    image:
      'https://nazih.ae/media/catalog/product/1/2/12570140_1.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
  },
];

export const dummyHomePopularData = [
  { id: '1', name: 'Haircare', itemCount: '10', image: 'https://nazih.ae/media/deal/image/hair-care_2.jpg' },
  { id: '2', name: 'Skincare', itemCount: '20', image: 'https://nazih.ae/media/deal/image/skin-care_2.jpg' },
  { id: '3', name: 'Makeup', itemCount: '25', image: 'https://nazih.ae/media/deal/image/makeup_14.jpg' },
  { id: '4', name: 'Fragrance', itemCount: '40', image: 'https://nazih.ae/media/deal/image/fragrance_8.jpg' },
  { id: '5', name: 'Nail Care', itemCount: '10', image: 'https://nazih.ae/media/deal/image/nail-care.jpg' },
  {
    id: '6',
    name: 'Hair Electricals',
    itemCount: '20',
    image: 'https://nazih.ae/media/deal/image/hair-electricals.jpg',
  },
];

export const dummyNotifications: Notification[] = [
  {
    id: '1',
    title: 'Welcome to the App!',
    body: 'We are excited to have you on board. Start exploring the app today!',
    isRead: false,
  },
  {
    id: '2',
    title: 'Update Available',
    body: 'A new version of the app is available. Update now for the latest features.',
    isRead: true,
  },
  {
    id: '3',
    title: 'Special Offer!',
    body: 'Don’t miss our special offer. Enjoy 50% off premium plans.',
    isRead: false,
  },
  {
    id: '4',
    title: 'Account Security',
    body: 'Your account password was changed successfully.',
    isRead: true,
  },
  {
    id: '5',
    title: 'Feedback Request',
    body: 'Let us know how we are doing by completing a short survey.',
    isRead: true,
  },
];

export const dummyProductData: Products[] = [
  {
    title: 'Haircare',
    data: [
      {
        id: '1',
        name: 'Shampoo',
        price: 'AED 10',
        rating: 4.5,
        image:
          'https://nazih.ae/media/catalog/product/1/6/16410165003.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
      },
      {
        id: '2',
        name: 'Conditioner',
        price: 'AED 12',
        rating: 4.2,
        image:
          'https://nazih.ae/media/catalog/product/1/7/17770373.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
      },
      {
        id: '3',
        name: 'Hair Oil',
        price: 'AED 8',
        rating: 4.8,
        image:
          'https://nazih.ae/media/catalog/product/1/3/13510068006_1_.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
      },
    ],
  },
  {
    title: 'Skincare',
    data: [
      {
        id: '4',
        name: 'Face Wash',
        price: 'AED 5',
        rating: 4.6,
        image:
          'https://nazih.ae/media/catalog/product/1/2/12290509.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
      },
      {
        id: '5',
        name: 'Moisturizer',
        price: 'AED 15',
        rating: 4.7,
        image:
          'https://nazih.ae/media/catalog/product/1/3/13480248.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
      },
      {
        id: '6',
        name: 'Sunscreen',
        price: 'AED 20',
        rating: 4.3,
        image:
          'https://nazih.ae/media/catalog/product/1/2/12290216002_1.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
      },
    ],
  },
  {
    title: 'Makeup',
    data: [
      {
        id: '7',
        name: 'Lipstick',
        price: 'AED 10',
        rating: 4.8,
        image:
          'https://nazih.ae/media/catalog/product/1/1/11270017.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
      },
      {
        id: '8',
        name: 'Foundation',
        price: 'AED 25',
        rating: 4.5,
        image:
          'https://nazih.ae/media/catalog/product/1/2/12290646.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
      },
      {
        id: '9',
        name: 'Mascara',
        price: 'AED 18',
        rating: 4.6,
        image:
          'https://nazih.ae/media/catalog/product/e/y/eyelash_and_eyebrow_extension_tools.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
      },
    ],
  },
];

export const dummyCartData = [
  {
    id: '1',
    name: 'Ravlon Professional',
    price: 10,
    image:
      'https://nazih.ae/media/catalog/product/1/6/16470467.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
  },
  {
    id: '2',
    name: 'Artistic Nail Design',
    price: 20,
    isNew: true,
    image:
      'https://nazih.ae/media/catalog/product/1/6/16640143040.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
  },
  {
    id: '3',
    name: 'Macadamia Natural',
    price: 30,
    isNew: false,
    image:
      'https://nazih.ae/media/catalog/product/3/9/3933006-3.jpg?width=400&height=400&canvas=400:400&optimize=medium&bg-color=255,255,255&fit=bounds',
  },
];
