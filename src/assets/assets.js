import logo from './logo.png'
import heroImage1 from './heroImage1.jpeg'
import heroImage2 from './heroImage2.png'
import heroImage3 from './heroImage3.png'
import heroImage4 from './heroImage4.jpeg'
import heroImage5 from './heroImage5.png'
import heroImage6 from './heroImage6.png'
import p_img1 from './p_img1.png'
import cart_icon from './cart_icon.png'
import dropdown_icon from './dropdown_icon.png'
import menu_icon from './menu_icon.png'
import profile_icon from './profile_icon.png'
import search_icon from './search_icon.png'
import bq_img_1 from './bq_img_1.png'
import bq_img_2 from './bq_img_2.png'
import bq_img_3 from './bq_img_3.png'
import bq_img_4 from './bq_img_4.png'
import star_icon from './star_icon.png'
import star_dull_icon from './star_dull_icon.png'

// All Events Images
import allEventsWedding from './allEventsWedding.jpg'
import allEventsBirthday from './allEventsBirthday.jpg'
import allEventsAnniversary from './allEventsAnniversary.jpg'
import allEventsFreshers from './allEventsFreshers.jpg'
import allEventsHouseParty from './allEventsHouseParty.webp'
import allEventsCorporateParty from './allEventsCorporateParty.jpg'
import allEventsWorkshop from './allEventsWorkshop.webp'
import allEventsExhibition from './allEventsExhibition.png'
import allEventsProductLaunch from './allEventsProductLaunch.png'
import allEventsConvocation from './allEventsConvocation.png'
import allEventsConference from './allEventsConference.png'
import allEventsFestivalCelebration from './allEventsFestivalCelebration.png'
import allEventsSports from './allEventsSportsEvent.png'
import chooseIt from './chooseIt.gif'

export const assets = {
  logo,
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
  p_img1,
  cart_icon,
  dropdown_icon,
  menu_icon,
  profile_icon,
  search_icon,
  bq_img_1,
  star_icon,
  star_dull_icon,
  chooseIt,

  
}


export const allVenues = [
  {
    id: 10001,
    name: "Laxminarayan Club & Resort",
    category: "Banquet",
    startingPrice: 30000,
    description: "An elegant venue that blends tradition with luxury, ideal for all celebrations.",
    detailedDescription: `
Laxminarayan Club & Resort: A Grand Venue for Unforgettable Events

Situated in the heart of Vadodara, Laxminarayan Club & Resort is a premier banquet facility offering world-class amenities for all types of celebrations. The venue is designed to host weddings, receptions, corporate gatherings, and social events, providing a seamless blend of luxury and comfort. With exquisite décor, spacious halls, and an ambiance that exudes grandeur, this resort ensures a remarkable experience for both hosts and guests.

Facilities and Services:
- Spacious banquet hall with a seating capacity of 1000 and floating capacity of 2000
- Elegantly designed interiors, offering a sophisticated atmosphere
- Ample parking space for over 1200 vehicles
- On-site catering with a variety of menu options, including Indian, Continental, and Chinese cuisines
- Professional event planning services to assist in executing flawless events
- Luxurious suite rooms for overnight stays and pre-event preparations

Accessibility:
Located in Gotri, Vadodara, Laxminarayan Club & Resort is easily accessible from all parts of the city. Vadodara Airport is just 15 km away, and the Vadodara Railway Station is a short 10 km drive. The venue is well-connected with major roads, ensuring hassle-free transportation for guests traveling from near and far.
    `,
    area: "Gotri",
    city: "Vadodara",
    products: ["Diya", "Toran", "Decoration", "Plants", "Flowers"],
    rating: 4.5,
    reviewCount: 145,
    image: [bq_img_1, bq_img_2, bq_img_3, bq_img_4],
    capacityIndoorOutdoor: "1000 Seating | 2000 Floating",
    capacityIndoor: "500 Seating | 800 Floating",
    capacityOutdoor: "500 Seating | 1200 Standing",
  },
  {
    id: 10002,
    name: "Royal Palace Banquet",
    category: "Banquet",
    startingPrice: 50000,
    description: "An exquisite venue with luxurious facilities, perfect for grand celebrations.",
    detailedDescription: `
Royal Palace Banquet: Elegance Redefined

For those seeking an opulent venue that exudes luxury, Royal Palace Banquet is the ultimate destination. This banquet hall is equipped with state-of-the-art facilities, exquisite interiors, and impeccable services, making it the perfect setting for weddings, receptions, corporate events, and more.

Facilities and Services:
- Majestic main hall with seating for up to 800 guests
- Crystal chandeliers, elegant décor, and spacious dance floor
- Customizable catering services with gourmet cuisines
- Valet parking and ample space for over 1000 vehicles
- Professional event coordination team
- In-house DJ and lighting services for a memorable ambiance

Accessibility:
Located in Alkapuri, Vadodara, Royal Palace Banquet offers convenient access from major highways and transport hubs. The venue is a mere 12 km from Vadodara Airport and just 8 km from the railway station, ensuring seamless accessibility for all guests.
    `,
    area: "Alkapuri",
    city: "Vadodara",
    products: ["Flowers", "Decoration", "Lights"],
    rating: 4.8,
    reviewCount: 132,
    image: [bq_img_2, bq_img_3, bq_img_4, bq_img_1],
    capacityIndoorOutdoor: "800 Seating | 1500 Floating",
    capacityIndoor: "300 Seating | 500 Floating",
    capacityOutdoor: "500 Seating | 1000 Standing",
  },
  {
    id: 10003,
    name: "The Grand Courtyard",
    category: "Wedding Lawn",
    startingPrice: 75000,
    description: "A spacious and scenic outdoor venue, perfect for dreamy weddings.",
    detailedDescription: `
The Grand Courtyard: A Perfect Blend of Nature and Elegance

Imagine exchanging vows amidst lush greenery and an enchanting outdoor setting. The Grand Courtyard offers a breathtaking landscape for weddings and grand celebrations. With its meticulously maintained gardens, open-air seating arrangements, and premium services, it is one of Vadodara’s most sought-after wedding venues.

Facilities and Services:
- Expansive garden lawn with a seating capacity of 1200
- Picturesque setting with floral décor and aesthetic lighting
- Dedicated team for event planning and execution
- Premium catering services offering regional and international cuisines
- Well-furnished guest rooms for a comfortable stay
- Spacious parking lot accommodating up to 1500 vehicles

Accessibility:
Located in Fatehgunj, Vadodara, The Grand Courtyard is easily reachable via major roads and highways. Vadodara Airport is 18 km away, and the nearest railway station is just 14 km from the venue, making travel effortless for guests arriving from different locations.
    `,
    area: "Fatehgunj",
    city: "Vadodara",
    products: ["Toran", "Plants", "Lights"],
    rating: 4.7,
    reviewCount: 140,
    image: [bq_img_3, bq_img_4, bq_img_1, bq_img_2],
    capacityIndoorOutdoor: "1200 Seating | 2500 Floating",
    capacityIndoor: "400 Seating | 700 Floating",
    capacityOutdoor: "800 Seating | 1800 Standing",
  },
  // Add 12 more similar entries here with unique names, locations, ratings, and details
];

export const serviceProviders = [
  {
    id: 10001,
    name: "Laxminarayan Club & Resort",
    category: "Banquet",
    startingPrice: 30000,
    description: "An elegant venue that blends tradition with luxury, ideal for all celebrations.",
    detailedDescription: `
Laxminarayan Club & Resort: A Grand Venue for Unforgettable Events

Situated in the heart of Vadodara, Laxminarayan Club & Resort is a premier banquet facility offering world-class amenities for all types of celebrations. The venue is designed to host weddings, receptions, corporate gatherings, and social events, providing a seamless blend of luxury and comfort. With exquisite décor, spacious halls, and an ambiance that exudes grandeur, this resort ensures a remarkable experience for both hosts and guests.

Facilities and Services:
- Spacious banquet hall with a seating capacity of 1000 and floating capacity of 2000
- Elegantly designed interiors, offering a sophisticated atmosphere
- Ample parking space for over 1200 vehicles
- On-site catering with a variety of menu options, including Indian, Continental, and Chinese cuisines
- Professional event planning services to assist in executing flawless events
- Luxurious suite rooms for overnight stays and pre-event preparations

Accessibility:
Located in Gotri, Vadodara, Laxminarayan Club & Resort is easily accessible from all parts of the city. Vadodara Airport is just 15 km away, and the Vadodara Railway Station is a short 10 km drive. The venue is well-connected with major roads, ensuring hassle-free transportation for guests traveling from near and far.
    `,
    area: "Gotri",
    city: "Vadodara",
    products: ["Diya", "Toran", "Decoration", "Plants", "Flowers"],
    rating: 4.5,
    reviewCount: 145,
    image: [bq_img_1, bq_img_2, bq_img_3, bq_img_4],
    capacityIndoorOutdoor: "1000 Seating | 2000 Floating",
    capacityIndoor: "500 Seating | 800 Floating",
    capacityOutdoor: "500 Seating | 1200 Standing",
  },
  {
    id: 10002,
    name: "Royal Palace Banquet",
    category: "Banquet",
    startingPrice: 50000,
    description: "An exquisite venue with luxurious facilities, perfect for grand celebrations.",
    detailedDescription: `
Royal Palace Banquet: Elegance Redefined

For those seeking an opulent venue that exudes luxury, Royal Palace Banquet is the ultimate destination. This banquet hall is equipped with state-of-the-art facilities, exquisite interiors, and impeccable services, making it the perfect setting for weddings, receptions, corporate events, and more.

Facilities and Services:
- Majestic main hall with seating for up to 800 guests
- Crystal chandeliers, elegant décor, and spacious dance floor
- Customizable catering services with gourmet cuisines
- Valet parking and ample space for over 1000 vehicles
- Professional event coordination team
- In-house DJ and lighting services for a memorable ambiance

Accessibility:
Located in Alkapuri, Vadodara, Royal Palace Banquet offers convenient access from major highways and transport hubs. The venue is a mere 12 km from Vadodara Airport and just 8 km from the railway station, ensuring seamless accessibility for all guests.
    `,
    area: "Alkapuri",
    city: "Vadodara",
    products: ["Flowers", "Decoration", "Lights"],
    rating: 4.8,
    reviewCount: 132,
    image: [bq_img_2, bq_img_3, bq_img_4, bq_img_1],
    capacityIndoorOutdoor: "800 Seating | 1500 Floating",
    capacityIndoor: "300 Seating | 500 Floating",
    capacityOutdoor: "500 Seating | 1000 Standing",
  },
  {
    id: 10003,
    name: "The Grand Courtyard",
    category: "Wedding Lawn",
    startingPrice: 75000,
    description: "A spacious and scenic outdoor venue, perfect for dreamy weddings.",
    detailedDescription: `
The Grand Courtyard: A Perfect Blend of Nature and Elegance

Imagine exchanging vows amidst lush greenery and an enchanting outdoor setting. The Grand Courtyard offers a breathtaking landscape for weddings and grand celebrations. With its meticulously maintained gardens, open-air seating arrangements, and premium services, it is one of Vadodara’s most sought-after wedding venues.

Facilities and Services:
- Expansive garden lawn with a seating capacity of 1200
- Picturesque setting with floral décor and aesthetic lighting
- Dedicated team for event planning and execution
- Premium catering services offering regional and international cuisines
- Well-furnished guest rooms for a comfortable stay
- Spacious parking lot accommodating up to 1500 vehicles

Accessibility:
Located in Fatehgunj, Vadodara, The Grand Courtyard is easily reachable via major roads and highways. Vadodara Airport is 18 km away, and the nearest railway station is just 14 km from the venue, making travel effortless for guests arriving from different locations.
    `,
    area: "Fatehgunj",
    city: "Vadodara",
    products: ["Toran", "Plants", "Lights"],
    rating: 4.7,
    reviewCount: 140,
    image: [bq_img_3, bq_img_4, bq_img_1, bq_img_2],
    capacityIndoorOutdoor: "1200 Seating | 2500 Floating",
    capacityIndoor: "400 Seating | 700 Floating",
    capacityOutdoor: "800 Seating | 1800 Standing",
  },
  {
    id: 10003,
    name: "The Grand Courtyard",
    category: "Wedding Lawn",
    startingPrice: 75000,
    description: "A spacious and scenic outdoor venue, perfect for dreamy weddings.",
    detailedDescription: `
The Grand Courtyard: A Perfect Blend of Nature and Elegance

Imagine exchanging vows amidst lush greenery and an enchanting outdoor setting. The Grand Courtyard offers a breathtaking landscape for weddings and grand celebrations. With its meticulously maintained gardens, open-air seating arrangements, and premium services, it is one of Vadodara’s most sought-after wedding venues.

Facilities and Services:
- Expansive garden lawn with a seating capacity of 1200
- Picturesque setting with floral décor and aesthetic lighting
- Dedicated team for event planning and execution
- Premium catering services offering regional and international cuisines
- Well-furnished guest rooms for a comfortable stay
- Spacious parking lot accommodating up to 1500 vehicles

Accessibility:
Located in Fatehgunj, Vadodara, The Grand Courtyard is easily reachable via major roads and highways. Vadodara Airport is 18 km away, and the nearest railway station is just 14 km from the venue, making travel effortless for guests arriving from different locations.
    `,
    area: "Fatehgunj",
    city: "Vadodara",
    products: ["Toran", "Plants", "Lights"],
    rating: 4.7,
    reviewCount: 140,
    image: [bq_img_3, bq_img_4, bq_img_1, bq_img_2],
    capacityIndoorOutdoor: "1200 Seating | 2500 Floating",
    capacityIndoor: "400 Seating | 700 Floating",
    capacityOutdoor: "800 Seating | 1800 Standing",
  },
  {
    id: 10003,
    name: "The Grand Courtyard",
    category: "Wedding Lawn",
    startingPrice: 75000,
    description: "A spacious and scenic outdoor venue, perfect for dreamy weddings.",
    detailedDescription: `
The Grand Courtyard: A Perfect Blend of Nature and Elegance

Imagine exchanging vows amidst lush greenery and an enchanting outdoor setting. The Grand Courtyard offers a breathtaking landscape for weddings and grand celebrations. With its meticulously maintained gardens, open-air seating arrangements, and premium services, it is one of Vadodara’s most sought-after wedding venues.

Facilities and Services:
- Expansive garden lawn with a seating capacity of 1200
- Picturesque setting with floral décor and aesthetic lighting
- Dedicated team for event planning and execution
- Premium catering services offering regional and international cuisines
- Well-furnished guest rooms for a comfortable stay
- Spacious parking lot accommodating up to 1500 vehicles

Accessibility:
Located in Fatehgunj, Vadodara, The Grand Courtyard is easily reachable via major roads and highways. Vadodara Airport is 18 km away, and the nearest railway station is just 14 km from the venue, making travel effortless for guests arriving from different locations.
    `,
    area: "Fatehgunj",
    city: "Vadodara",
    products: ["Toran", "Plants", "Lights"],
    rating: 4.7,
    reviewCount: 140,
    image: [bq_img_3, bq_img_4, bq_img_1, bq_img_2],
    capacityIndoorOutdoor: "1200 Seating | 2500 Floating",
    capacityIndoor: "400 Seating | 700 Floating",
    capacityOutdoor: "800 Seating | 1800 Standing",
  },
  {
    id: 10003,
    name: "The Grand Courtyard",
    category: "Wedding Lawn",
    startingPrice: 75000,
    description: "A spacious and scenic outdoor venue, perfect for dreamy weddings.",
    detailedDescription: `
The Grand Courtyard: A Perfect Blend of Nature and Elegance

Imagine exchanging vows amidst lush greenery and an enchanting outdoor setting. The Grand Courtyard offers a breathtaking landscape for weddings and grand celebrations. With its meticulously maintained gardens, open-air seating arrangements, and premium services, it is one of Vadodara’s most sought-after wedding venues.

Facilities and Services:
- Expansive garden lawn with a seating capacity of 1200
- Picturesque setting with floral décor and aesthetic lighting
- Dedicated team for event planning and execution
- Premium catering services offering regional and international cuisines
- Well-furnished guest rooms for a comfortable stay
- Spacious parking lot accommodating up to 1500 vehicles

Accessibility:
Located in Fatehgunj, Vadodara, The Grand Courtyard is easily reachable via major roads and highways. Vadodara Airport is 18 km away, and the nearest railway station is just 14 km from the venue, making travel effortless for guests arriving from different locations.
    `,
    area: "Fatehgunj",
    city: "Vadodara",
    products: ["Toran", "Plants", "Lights"],
    rating: 4.7,
    reviewCount: 140,
    image: [bq_img_3, bq_img_4, bq_img_1, bq_img_2],
    capacityIndoorOutdoor: "1200 Seating | 2500 Floating",
    capacityIndoor: "400 Seating | 700 Floating",
    capacityOutdoor: "800 Seating | 1800 Standing",
  },
  // Add 12 more similar entries here with unique names, locations, ratings, and details
];

export const allEvents = [
  {
    eventId: 1,
    name: "Wedding",
    img: allEventsWedding
  },
  {
    eventId: 2,
    name: "Birthday",
    img: allEventsBirthday
  },
  {
    eventId: 3,
    name: "Anniversary",
    img: allEventsAnniversary
  },
  {
    eventId: 4,
    name: "Freshers/Farewell",
    img: allEventsFreshers
  },
  {
    eventId: 5,
    name: "House Party",
    img: allEventsHouseParty
  },
  {
    eventId: 6,
    name: "Corporate Party",
    img: allEventsCorporateParty
  },
  {
    eventId: 7,
    name: "Workshop",
    img: allEventsWorkshop
  },
  {
    eventId: 8,
    name: "Exhibition",
    img: allEventsExhibition
  },
  {
    eventId: 9,
    name: "Product Launch",
    img: allEventsProductLaunch
  },
  {
    eventId: 10,
    name: "Convocation",
    img: allEventsConvocation
  },
  {
    eventId: 11,
    name: "Conference",
    img: allEventsConference
  },
  {
    eventId: 12,
    name: "Sports Event",
    img: allEventsSports
  },
  {
    eventId: 13,
    name: "Festival Celebration",
    img: allEventsFestivalCelebration
  },

]

export const allCaterings = [
  {
    id: 1,
    name: "Royal Feast Catering",
    image: ["https://via.placeholder.com/300"], 
    rating: 4.8,
    cuisines: ["Indian", "Chinese", "Italian"],
    pricePerPlate: 1200,
  },
  {
    id: 2,
    name: "Gourmet Bites",
    image: ["https://via.placeholder.com/300"], 
    rating: 4.5,
    cuisines: ["Mexican", "Italian", "Thai"],
    pricePerPlate: 1500,
  },
  {
    id: 3,
    name: "Delish Catering Co.",
    image: ["https://via.placeholder.com/300"], 
    rating: 4.7,
    cuisines: ["South Indian", "Continental", "Japanese"],
    pricePerPlate: 1000,
  },
  {
    id: 4,
    name: "The Grand Banquet",
    image: ["https://via.placeholder.com/300"], 
    rating: 4.9,
    cuisines: ["North Indian", "Mughlai", "Chinese"],
    pricePerPlate: 1800,
  },
  {
    id: 5,
    name: "Taste Haven",
    image: ["https://via.placeholder.com/300"], 
    rating: 4.6,
    cuisines: ["Lebanese", "French", "Greek"],
    pricePerPlate: 1300,
  }
];


export const allServices = [
  { id: 1, name: "Transport" },
  { id: 2, name: "Accommodations" },
  { id: 3, name: "Gifting" },
  { id: 4, name: "Dressing" },
  { id: 5, name: "Decorators" },
  { id: 6, name: "Parking Agency" },
  { id: 7, name: "Water Supply" },
  { id: 8, name: "Cleaning Vendors" },
  { id: 9, name: "Saree Drapers" },
  { id: 10, name: "Photographer" },
  { id: 11, name: "Salon & Parlour" },
  { id: 12, name: "DJ / Sound" },
  { id: 13, name: "Lightning" },
  { id: 14, name: "Catering" },
  { id: 15, name: "Banquet / Party Hall" },
  { id: 16, name: "Mehndi Artist" },
  { id: 17, name: "Pandits" },
  { id: 18, name: "Farashkhana (Decor)" },
  { id: 19, name: "Anchors" },
  { id: 20, name: "Artist" },
  { id: 21, name: "Choreographer" },
  { id: 22, name: "Fireworks" },
  { id: 23, name: "Band Baja" },
  { id: 24, name: "Florist Decor" },
  { id: 25, name: "Invitation" },
  { id: 26, name: "Digital Invitation" },
  { id: 27, name: "Logistics" },
  { id: 28, name: "Car Rentals" }
];

