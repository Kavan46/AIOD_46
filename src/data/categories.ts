import { Utensils, ShoppingBag, Pill, Plane, Film, ShoppingCart } from 'lucide-react';
import { Category } from '../components/Categories/types';

export const categories: Category[] = [
  {
    title: 'Shopping',
    icon: ShoppingCart,
    apps: [
      {
        name: 'Amazon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
        url: 'https://www.amazon.in',
        description: 'Everything Store'
      },
      {
        name: 'Flipkart',
        logo: 'https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png',
        url: 'https://www.flipkart.com',
        description: 'Big Billion Store'
      },
      {
        name: 'Meesho',
        logo: 'https://seeklogo.com/images/M/meesho-logo-2E20AB77E8-seeklogo.com.png',
        url: 'https://www.meesho.com',
        description: 'Social Commerce'
      }
    ],
  },
  {
    title: 'Food Delivery',
    icon: Utensils,
    apps: [
      {
        name: 'Swiggy',
        logo: 'https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png',
        url: 'https://www.swiggy.com',
        description: 'Food Delivery'
      },
      {
        name: 'Zomato',
        logo: 'https://seeklogo.com/images/Z/zomato-logo-200607EC4C-seeklogo.com.png',
        url: 'https://www.zomato.com',
        description: 'Food & Dining'
      },
      {
        name: "Domino's",
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/dominos-pizza-4-logo-svg-vector.svg',
        url: 'https://www.dominos.co.in',
        description: 'Pizza Delivery'
      },
      {
        name: "McDonald's",
        logo: 'https://seeklogo.com/images/M/mcdonalds-logo-0D95A820B2-seeklogo.com.png',
        url: 'https://www.mcdelivery.co.in',
        description: 'Fast Food'
      }
    ],
  },
  {
    title: 'Groceries',
    icon: ShoppingBag,
    apps: [
      {
        name: 'Zepto',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zepto_Logo.svg/2560px-Zepto_Logo.svg.png',
        url: 'https://www.zeptonow.com',
        description: '10-min Delivery'
      },
      {
        name: 'Blinkit',
        logo: 'https://res.cloudinary.com/dyyjph6kx/image/upload/gift_vouchers/php9GtAHI_t1lp0w.png',
        url: 'https://blinkit.com',
        description: 'Quick Commerce'
      },
      {
        name: 'BigBasket',
        logo: 'https://seeklogo.com/images/B/bigbasket-logo-CCFD652568-seeklogo.com.png',
        url: 'https://www.bigbasket.com',
        description: 'Online Grocery'
      }
    ],
  },
  {
    title: 'Medicines',
    icon: Pill,
    apps: [
      {
        name: 'MedPlus',
        logo: 'https://seeklogo.com/images/M/medplus-logo-5DB68D902A-seeklogo.com.png',
        url: 'https://www.medplusmart.com',
        description: 'Pharmacy'
      },
      {
        name: 'Apollo 247',
        logo: 'https://seeklogo.com/images/A/apollo-hospitals-logo-D404E82528-seeklogo.com.png',
        url: 'https://www.apollo247.com',
        description: 'Healthcare'
      },
      {
        name: 'PharmEasy',
        logo: 'https://seeklogo.com/images/P/pharmeasy-logo-ED809E7A0C-seeklogo.com.png',
        url: 'https://pharmeasy.in',
        description: 'Online Medicine'
      }
    ],
  },
  {
    title: 'Travel',
    icon: Plane,
    apps: [
      {
        name: 'MakeMyTrip',
        logo: 'https://seeklogo.com/images/M/makemytrip-logo-797F76C823-seeklogo.com.png',
        url: 'https://www.makemytrip.com',
        description: 'Travel Booking'
      },
      {
        name: 'RedBus',
        logo: 'https://seeklogo.com/images/R/redbus-logo-5B2A75C4DA-seeklogo.com.png',
        url: 'https://www.redbus.in',
        description: 'Bus Tickets'
      },
      {
        name: 'Rapido',
        logo: 'https://i.pinimg.com/736x/6e/75/8d/6e758deba2689e4122853b0b5e079e8e.jpg',
        url: 'https://www.rapido.bike',
        description: 'Bike Taxi'
      },
      {
        name: 'Uber',
        logo: 'https://seeklogo.com/images/U/uber-logo-2BB8EC4342-seeklogo.com.png',
        url: 'https://www.uber.com',
        description: 'Ride Hailing'
      },
      {
        name: 'Ola',
        logo: 'https://seeklogo.com/images/O/ola-logo-AE6F96EFD4-seeklogo.com.png',
        url: 'https://www.olacabs.com',
        description: 'Cab Service'
      }
    ],
  },
  {
    title: 'Movies',
    icon: Film,
    apps: [
      {
        name: 'BookMyShow',
        logo: 'https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png',
        url: 'https://in.bookmyshow.com',
        description: 'Entertainment'
      },
      {
        name: 'PVR',
        logo: 'https://seeklogo.com/images/P/pvr-cinemas-logo-32B23B9167-seeklogo.com.png',
        url: 'https://www.pvrcinemas.com',
        description: 'Cinema Chain'
      }
    ],
  }
];