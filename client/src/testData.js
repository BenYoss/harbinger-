const testData = [
  {
    _type: 'SearchResponse',
    queryContext: {
      originalQuery: 'apples',
      askUserForLocation: true,
    },
    webPages: {
      _type: 'Web/WebAnswer',
      webSearchUrl: 'https://www.bing.com/search?q=apples',
      totalEstimatedMatches: 90300000,
      value: [
        {
          _type: 'WebPage',
          id: 'https://api.cognitive.microsoft.com/api/v7/#WebPages.0',
          name: 'Apple',
          url: 'https://www.apple.com/',
          displayUrl: 'https://www.apple.com',
          snippet:
            'Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support.',
          deepLinks: [
            {
              _type: 'WebPage',
              name: 'Support',
              url: 'https://support.apple.com/',
              snippet:
                'Apple support is here to help. Learn more about popular topics and find resources that will help you with all of your Apple products.',
              deepLinks: [
                {
                  _type: 'WebPage',
                  name: 'Contact',
                  url: 'https://support.apple.com/contact',
                },
                {
                  _type: 'WebPage',
                  name: 'Apple ID',
                  url: 'https://support.apple.com/apple-id',
                },
                {
                  _type: 'WebPage',
                  name: 'Mac',
                  url: 'https://support.apple.com/mac',
                },
                {
                  _type: 'WebPage',
                  name: 'iCloud',
                  url: 'https://support.apple.com/icloud',
                },
                {
                  _type: 'WebPage',
                  name: 'Repair',
                  url: 'https://support.apple.com/repair',
                },
                {
                  _type: 'WebPage',
                  name: 'Phone Numbers',
                  url: 'https://support.apple.com/en-us/HT201232',
                },
              ],
            },
            {
              _type: 'WebPage',
              name: 'iPhone',
              url: 'https://www.apple.com/iphone/',
              snippet:
                'Apple Footer * In-store promotion availability subject to local law. Speak to a Specialist to learn more. ** Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. iPhone SE promotional pricing is after trade-in of iPhone 8 in good condition. Additional trade‑in values require purchase of a new ...',
              deepLinks: [
                {
                  _type: 'WebPage',
                  name: 'Compare Models',
                  url: 'https://www.apple.com/iphone/compare/',
                },
                {
                  _type: 'WebPage',
                  name: 'Buy iPhone',
                  url: 'https://www.apple.com/iphone/buy/',
                },
                {
                  _type: 'WebPage',
                  name: '11 Pro',
                  url: 'https://www.apple.com/iphone-11-pro/',
                },
                {
                  _type: 'WebPage',
                  name: 'iPhone Xr',
                  url: 'https://www.apple.com/iphone-xr/specs/',
                },
                {
                  _type: 'WebPage',
                  name: 'Accessories',
                  url: 'https://www.apple.com/shop/iphone/iphone-accessories',
                },
                {
                  _type: 'WebPage',
                  name: 'iPhone Trade-Up',
                  url: 'https://www.apple.com/shop/trade-in',
                },
              ],
            },
            {
              _type: 'WebPage',
              name: 'iTunes',
              url: 'https://www.apple.com/itunes/',
              snippet:
                'Download macOS Catalina for an all‑new entertainment experience. Your music, TV shows, movies, podcasts, and audiobooks will transfer automatically to the Apple Music, Apple TV, Apple Podcasts, and Apple Books apps where you’ll still have access to your favorite iTunes features, including purchases, rentals, and imports.',
              deepLinks: [
                {
                  _type: 'WebPage',
                  name: 'Install & Update',
                  url: 'https://support.apple.com/en-us/HT201352',
                },
                {
                  _type: 'WebPage',
                  name: 'Manage Your Apple ID',
                  url: 'https://appleid.apple.com/#!&page=signin',
                },
                {
                  _type: 'WebPage',
                  name: 'Apple Music',
                  url: 'https://www.apple.com/apple-music/',
                },
                {
                  _type: 'WebPage',
                  name: 'Redeem',
                  url:
                    'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/redeemLandingPage',
                },
                {
                  _type: 'WebPage',
                  name: 'Gift Cards',
                  url: 'https://www.apple.com/shop/gift-cards',
                },
                {
                  _type: 'WebPage',
                  name: 'Video',
                  url: 'https://www.apple.com/apple-tv-app/',
                },
              ],
            },
            {
              _type: 'WebPage',
              name: 'iPad',
              url: 'https://www.apple.com/ipad/',
              snippet:
                'Explore the world of iPad. Featuring iPad Pro in two sizes, iPad Air, iPad, and iPad mini. Visit the Apple site to learn, buy, and get support.',
              deepLinks: [
                {
                  _type: 'WebPage',
                  name: 'Compare',
                  url: 'https://www.apple.com/ipad/compare/',
                },
                {
                  _type: 'WebPage',
                  name: 'iPad Pro',
                  url: 'https://www.apple.com/ipad-pro/',
                },
                {
                  _type: 'WebPage',
                  name: 'iPad 9.7-Inch',
                  url: 'https://www.apple.com/ipad-10.2/',
                },
                {
                  _type: 'WebPage',
                  name: 'iPad Mini',
                  url: 'https://www.apple.com/ipad-mini/',
                },
                {
                  _type: 'WebPage',
                  name: 'iPad Air',
                  url: 'https://www.apple.com/ipad-air/',
                },
                {
                  _type: 'WebPage',
                  name: 'Buy',
                  url: 'https://www.apple.com/shop/buy-ipad/ipad-pro',
                },
              ],
            },
          ],
          dateLastCrawled: '2020-08-09T16:06:00.0000000Z',
        },
        {
          _type: 'WebPage',
          id: 'https://api.cognitive.microsoft.com/api/v7/#WebPages.1',
          name: 'Apple - Wikipedia',
          url: 'https://en.wikipedia.org/wiki/Apple',
          displayUrl: 'https://en.wikipedia.org/wiki/Apple',
          snippet:
            'Apples are eaten with honey at the Jewish New Year of Rosh Hashanah to symbolize a sweet new year. Apples are an important ingredient in many desserts, such as apple pie, apple crumble, apple crisp and apple cake. When cooked, some apple cultivars easily form a puree known as apple sauce. Apples are also made into apple butter and',
          dateLastCrawled: '2020-08-09T22:23:00.0000000Z',
        },
        {
          _type: 'WebPage',
          id: 'https://api.cognitive.microsoft.com/api/v7/#WebPages.2',
          name: 'Apples: Benefits, nutrition, and tips',
          url: 'https://www.medicalnewstoday.com/articles/267290',
          displayUrl: 'https://www.medicalnewstoday.com/articles/267290',
          snippet:
            'Apples are a popular fruit, containing antioxidants, vitamins, dietary fiber, and a range of other nutrients. Due to their varied nutrient content, they may help prevent several health conditions.',
          dateLastCrawled: '2020-08-09T13:03:00.0000000Z',
        },
        {
          _type: 'WebPage',
          id: 'https://api.cognitive.microsoft.com/api/v7/#WebPages.3',
          name: '10 Impressive Health Benefits of Apples',
          url:
            'https://www.healthline.com/nutrition/10-health-benefits-of-apples',
          displayUrl:
            'https://www.healthline.com/nutrition/10-health-benefits-of-apples',
          snippet:
            'Apples are high in fiber and water — two qualities that make them filling. In one study, people who ate apple slices before a meal felt fuller than those who consumed applesauce, apple juice, or ...',
          dateLastCrawled: '2020-08-09T18:22:00.0000000Z',
        },
        {
          _type: 'WebPage',
          id: 'https://api.cognitive.microsoft.com/api/v7/#WebPages.4',
          name: 'Apples: Nutrition & Health Benefits - WebMD',
          url: 'https://www.webmd.com/food-recipes/benefits-apples',
          displayUrl: 'https://www.webmd.com/food-recipes/benefits-apples',
          snippet:
            'Apples can do a lot for you, thanks to plant chemicals called flavonoids. And they have pectin, a fiber that breaks down in your gut. If you take off the apple’s skin before eating it, you won ...',
          dateLastCrawled: '2020-08-08T20:07:00.0000000Z',
        },
        {
          _type: 'WebPage',
          id: 'https://api.cognitive.microsoft.com/api/v7/#WebPages.5',
          name: 'Apples: Health Benefits, Risks & Nutrition Facts | Live ...',
          url: 'https://www.livescience.com/44686-apple-nutrition-facts.html',
          displayUrl:
            'https://www.livescience.com/44686-apple-nutrition-facts.html',
          snippet:
            "Apples are loaded with vitamin C, especially in the skins, which are also full of fiber, Flores said. Apples contain insoluble fiber, which is the type of fiber that doesn't absorb water.",
          dateLastCrawled: '2020-08-08T04:06:00.0000000Z',
        },
        {
          _type: 'WebPage',
          id: 'https://api.cognitive.microsoft.com/api/v7/#WebPages.6',
          name: 'Home - Apples Market',
          url: 'https://www.applesmarket.com/',
          displayUrl: 'https://www.applesmarket.com',
          snippet:
            'Mobile Apps For Online Ordering & More! Download Now. Back to top. Quick Links',
          dateLastCrawled: '2020-08-09T15:32:00.0000000Z',
        },
        {
          _type: 'WebPage',
          id: 'https://api.cognitive.microsoft.com/api/v7/#WebPages.7',
          name: 'Weekly Ad - Apples Market',
          url: 'https://www.applesmarket.com/weekly-ad',
          displayUrl: 'https://www.applesmarket.com/weekly-ad',
          snippet:
            '© 2020 Apples Market. Privacy Policy; Terms of Use; Billing Return Policy',
          dateLastCrawled: '2020-08-09T03:06:00.0000000Z',
        },
      ],
    },
  },
];
//console.log(testData[0].webPages.value);

let testArray = testData[0].webPages.value;
// mapping function for site
let newArray = testArray.map((site) => {
  return site.url;
});
//console.log(newArray);

let newTestData = [
  {
    id: 1,
    likes: 0,
    dislike: 0,
    id_user: 1,
    text: 'THIS IS JUST A TEST REVIEW',
    id_web: 1,
    id_keyword: 1,
    date: '2020-08-12T23:13:11.000Z',
    createdAt: '2020-08-12T23:13:11.000Z',
    updatedAt: '2020-08-12T23:13:11.000Z',
    User: {
      id: 1,
      username: 'Hove Sebastian',
      serial: '100104724231999533185',
      bio: 'bio goes here',
      image:
        'https://lh3.googleusercontent.com/a-/AOh14GhaLpWiU0YD9VzkSOymEgrKHQB3c7jDEXzqhHq_XA',
      createdAt: '2020-08-12T23:12:20.000Z',
      updatedAt: '2020-08-12T23:12:20.000Z',
    },
  },
  {
    id: 2,
    likes: 0,
    dislike: 0,
    id_user: 1,
    text: 'THIS IS A SECOND TEST REVIEW TO SEE IF APPLE.COM IS FOUND ',
    id_web: 1,
    id_keyword: 1,
    date: '2020-08-12T23:25:50.000Z',
    createdAt: '2020-08-12T23:25:50.000Z',
    updatedAt: '2020-08-12T23:25:50.000Z',
    User: {
      id: 1,
      username: 'Hove Sebastian',
      serial: '100104724231999533185',
      bio: 'bio goes here',
      image:
        'https://lh3.googleusercontent.com/a-/AOh14GhaLpWiU0YD9VzkSOymEgrKHQB3c7jDEXzqhHq_XA',
      createdAt: '2020-08-12T23:12:20.000Z',
      updatedAt: '2020-08-12T23:12:20.000Z',
    },
  },
];

// export { testArray };
console.log(newTestData[0]['User']);

let userProfileRetrievalData = [
  {
    id: 1,
    title: null,
    likes: 2,
    dislike: 1,
    id_user: 1,
    text: 'MAN I LOVE APPLE',
    id_web: 1,
    id_keyword: 1,
    date: '2020-08-14T20:01:36.000Z',
    createdAt: '2020-08-14T20:01:36.000Z',
    updatedAt: '2020-08-14T22:32:40.000Z',
    User: {
      id: 1,
      username: 'Hove Sebastian',
      serial: '100104724231999533185',
      bio: 'bio goes here',
      image:
        'https://lh3.googleusercontent.com/a-/AOh14GhaLpWiU0YD9VzkSOymEgrKHQB3c7jDEXzqhHq_XA',
      createdAt: '2020-08-14T19:37:57.000Z',
      updatedAt: '2020-08-14T19:37:57.000Z',
    },
  },
  {
    id: 2,
    title: 'amazon',
    likes: 0,
    dislike: 0,
    id_user: 1,
    text: 'TEST TWO',
    id_web: 2,
    id_keyword: 2,
    date: '2020-08-14T20:04:01.000Z',
    createdAt: '2020-08-14T20:04:01.000Z',
    updatedAt: '2020-08-14T20:04:01.000Z',
    User: {
      id: 1,
      username: 'Hove Sebastian',
      serial: '100104724231999533185',
      bio: 'bio goes here',
      image:
        'https://lh3.googleusercontent.com/a-/AOh14GhaLpWiU0YD9VzkSOymEgrKHQB3c7jDEXzqhHq_XA',
      createdAt: '2020-08-14T19:37:57.000Z',
      updatedAt: '2020-08-14T19:37:57.000Z',
    },
  },
  {
    id: 3,
    title: 'amazon',
    likes: 0,
    dislike: 0,
    id_user: 1,
    text: 'TEST TWO',
    id_web: 3,
    id_keyword: 2,
    date: '2020-08-14T20:05:38.000Z',
    createdAt: '2020-08-14T20:05:38.000Z',
    updatedAt: '2020-08-14T20:05:38.000Z',
    User: {
      id: 1,
      username: 'Hove Sebastian',
      serial: '100104724231999533185',
      bio: 'bio goes here',
      image:
        'https://lh3.googleusercontent.com/a-/AOh14GhaLpWiU0YD9VzkSOymEgrKHQB3c7jDEXzqhHq_XA',
      createdAt: '2020-08-14T19:37:57.000Z',
      updatedAt: '2020-08-14T19:37:57.000Z',
    },
  },
  {
    id: 4,
    title: 'Apple is the best',
    likes: 0,
    dislike: 0,
    id_user: 1,
    text: 'WOW APPLE IS SO FUCKING HIP',
    id_web: 1,
    id_keyword: 1,
    date: '2020-08-14T20:13:26.000Z',
    createdAt: '2020-08-14T20:13:26.000Z',
    updatedAt: '2020-08-14T20:13:26.000Z',
    User: {
      id: 1,
      username: 'Hove Sebastian',
      serial: '100104724231999533185',
      bio: 'bio goes here',
      image:
        'https://lh3.googleusercontent.com/a-/AOh14GhaLpWiU0YD9VzkSOymEgrKHQB3c7jDEXzqhHq_XA',
      createdAt: '2020-08-14T19:37:57.000Z',
      updatedAt: '2020-08-14T19:37:57.000Z',
    },
  },
  {
    id: 6,
    title: 'Love chicken',
    likes: 0,
    dislike: 0,
    id_user: 1,
    text: 'chicken is the best',
    id_web: 4,
    id_keyword: 3,
    date: '2020-08-15T15:39:04.000Z',
    createdAt: '2020-08-15T15:39:04.000Z',
    updatedAt: '2020-08-15T15:39:04.000Z',
    User: {
      id: 1,
      username: 'Hove Sebastian',
      serial: '100104724231999533185',
      bio: 'bio goes here',
      image:
        'https://lh3.googleusercontent.com/a-/AOh14GhaLpWiU0YD9VzkSOymEgrKHQB3c7jDEXzqhHq_XA',
      createdAt: '2020-08-14T19:37:57.000Z',
      updatedAt: '2020-08-14T19:37:57.000Z',
    },
  },
  {
    id: 7,
    title: 'Cranberry is the best',
    likes: 0,
    dislike: 0,
    id_user: 1,
    text: 'I love this site about cranberries',
    id_web: 5,
    id_keyword: 4,
    date: '2020-08-15T15:40:38.000Z',
    createdAt: '2020-08-15T15:40:38.000Z',
    updatedAt: '2020-08-15T15:40:38.000Z',
    User: {
      id: 1,
      username: 'Hove Sebastian',
      serial: '100104724231999533185',
      bio: 'bio goes here',
      image:
        'https://lh3.googleusercontent.com/a-/AOh14GhaLpWiU0YD9VzkSOymEgrKHQB3c7jDEXzqhHq_XA',
      createdAt: '2020-08-14T19:37:57.000Z',
      updatedAt: '2020-08-14T19:37:57.000Z',
    },
  },
];
