import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img
          className="logo-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnA3Uzvp_meGS0F5yycgUX4DqVC7yG43KzFecEnr1Q2t3jhTkN2J2xZQ&s"
          alt="logo"
        />
      </div>
      <div className="Nav-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact us</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

// or we can directly destructure in the parameter itself like this
// const ResCard = ({resName, cuisine, rating, cost}) =>{
//    return (
//  <div className="res-card">
//         <img
//         className="res-logo"
//         alt="res-logo" src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"/>
//         <h3>{prop.resName}</h3>
//         <h4>{prop.cuisine}</h4>
//         <h4>{prop.rating}</h4>
//         <h5>{prop.cost}</h5>
//     </div>
// );
// };
// here we are destructuring the props object to get the required values and then using them in the JSX. This is a common pattern in React to make the code cleaner and more readable.

const reslist = [
  {
    type: "restaurant",
    data: {
      id: "23788",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/27/476822c7-0a80-44a6-acf9-5a914a04412c_23788.JPG",
      locality: "1st  Stage",
      areaName: "BTM Layout",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.5,
      parentId: "2456",
      avgRatingString: "4.5",
      totalRatingsString: "29K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-15 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            description: "Best in Bolt",
          },
          {
            imageId: "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
            description: "Best in Pizza",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in Bolt",
                  imageId:
                    "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in Pizza",
                  imageId:
                    "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-521e2972-d66e-4ad9-b510-b8db4503265d",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/dominos-pizza-1st-stage-btm-layout-rest23788",
      type: "WEBLINK",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "334475",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/7acfef15-202e-4743-9df1-6c08b12f35e9_334475.JPG",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-16 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            description: "Best in Bolt",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in Bolt",
                  imageId:
                    "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-622daf6a-5802-49a5-b86c-241f0d840792",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kfc-2nd-stage-btm-layout-rest334475",
      type: "WEBLINK",
    },
  },

  {
    type: "restaurant",
    data: {
      id: "411572",
      name: "Biryani By Kilo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/b0346c3e-ce60-4abf-9d48-404f451f82ec_411572.JPG",
      locality: "7th Sector",
      areaName: "HSR Layout",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Hyderabadi",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 4,
      parentId: "130",
      avgRatingString: "4.0",
      totalRatingsString: "4.4K+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "40-50 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-15 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "279",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-622daf6a-5802-49a5-b86c-241f0d840792",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/biryani-by-kilo-7th-sector-hsr-layout-rest411572",
      type: "WEBLINK",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "57283",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/f2e04fc7-621a-46cd-9d01-cd32736eaac9_57283.jpg",
      locality: "HSR Layout",
      areaName: "HSR Layout",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.1,
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "68K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "35-45 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-16 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "3.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-622daf6a-5802-49a5-b86c-241f0d840792",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/burger-king-hsr-layout-rest57283",
      type: "WEBLINK",
    },
  },

  {
    type: "restaurant",
    data: {
      id: "8725",
      name: "Krispy Kreme - Doughnuts & Coffee",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/9/ab564285-eee4-4547-98ea-bbff2b2b4f79_8725.JPG",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹170 for two",
      cuisines: ["Desserts", "Cafe", "Bakery", "Coffee", "Beverages", "Snacks"],
      avgRating: 4.5,
      veg: true,
      parentId: "570",
      avgRatingString: "4.5",
      totalRatingsString: "4.3K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-15 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "41K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-622daf6a-5802-49a5-b86c-241f0d840792",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/krispy-kreme-doughnuts-and-coffee-koramangala-rest8725",
      type: "WEBLINK",
    },
  },

  {
    type: "restaurant",
    data: {
      id: "477963",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/e94e5ef4-7b1b-4cd9-8d87-0b6b15dc8db2_477963.jpg",
      locality: "2nd Stage",
      areaName: "BTM 2nd Stage",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      avgRating: 4.5,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.5",
      totalRatingsString: "3.4K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-16 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-622daf6a-5802-49a5-b86c-241f0d840792",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-2nd-stage-btm-2nd-stage-rest477963",
      type: "WEBLINK",
    },
  },

  {
    type: "restaurant",
    data: {
      id: "590119",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/5/11/90b291fa-8331-4845-88e2-a3d2ebf3b962_590119.JPG",
      locality: "1st  Stage",
      areaName: "BTM Layout",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.6,
      parentId: "3818",
      avgRatingString: "4.6",
      totalRatingsString: "11K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-16 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-622daf6a-5802-49a5-b86c-241f0d840792",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/bakingo-1st-stage-btm-layout-rest590119",
      type: "WEBLINK",
    },
  },

  {
    type: "restaurant",
    data: {
      id: "752839",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/9ae62162-f822-4b64-af48-3e617205b8fa_752839.jpg",
      locality: "Kuvempu Nagar",
      areaName: "BTM Layout",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "2.2K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-15 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
            description: "EatRight",
          },
          {
            imageId:
              "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
            description: "Best in Subs & Sandwiches",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "EatRight",
                  imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in Subs & Sandwiches",
                  imageId:
                    "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-622daf6a-5802-49a5-b86c-241f0d840792",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/subway-kuvempu-nagar-btm-layout-rest752839",
      type: "WEBLINK",
    },
  },
  {
    type: "restaurant",
  data: {
      id: "524936",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/5/11/283c3d65-43d4-4a19-9197-17aa32357785_524936.JPG",
      locality: "HSR Layout",
      areaName: "HSR Layout",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts", "Bakery", "Beverages"],
      avgRating: 4.5,
      parentId: "1040",
      avgRatingString: "4.5",
      totalRatingsString: "9.5K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-16 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId:
              "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
            description: "Best in Cakes & Desserts",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in Cakes & Desserts",
                  imageId:
                    "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "587",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-622daf6a-5802-49a5-b86c-241f0d840792",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/theobroma-hsr-layout-rest524936",
      type: "WEBLINK",
    },
  },

  {
 type: "restaurant",
  data: {
      id: "248725",
      name: "Natural Ice Cream",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/196af401-5c4e-4ae5-b809-90e5c2439141_248725.jpg",
      locality: "7th Sector",
      areaName: "HSR Layout",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.8,
      veg: true,
      parentId: "2093",
      avgRatingString: "4.8",
      totalRatingsString: "7.9K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-15 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-622daf6a-5802-49a5-b86c-241f0d840792",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/natural-ice-cream-7th-sector-hsr-layout-rest248725",
      type: "WEBLINK",
    },
  },
  {
 type: "restaurant",
  data:{
      id: "108097",
      name: "Ambur Star Briyani Since 1890",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/12/bee2f2d5-6a39-477a-b669-c9df142ed5d0_108097.jpg",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Chettinad", "Andhra", "Beverages", "Seafood"],
      avgRating: 4.4,
      parentId: "21400",
      avgRatingString: "4.4",
      totalRatingsString: "25K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-05-16 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹39",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-622daf6a-5802-49a5-b86c-241f0d840792",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/ambur-star-briyani-since-1890-2nd-stage-btm-layout-rest108097",
      type: "WEBLINK",
    },
  },
];


const ResCard = (props) => {
    const { resData } = props;
    const {
        name,
        cuisines,
        avgRating,
        sla: { deliveryTime },
        cloudinaryImageId,
    } = resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h5>{deliveryTime} mins</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="Body">
      <div className="search">search</div>
      <div className="res-container">
        {
            reslist.map((restaurant) => (
                <ResCard  key={restaurant.data.id} resData={restaurant} />
            ))
        }
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
