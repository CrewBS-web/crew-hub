import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  products: [
    {
      name: "Polo Sporting Stretch Shirt",
      slug: "polo-sporting-stretch-shirt",
      category: "Men's Dress Shirts",
      description: "Classic Polo style with modern comfort",
      images: [
        "/images/sample-products/p1-1.jpg",
        "/images/sample-products/p1-2.jpg"
      ],
      price: 59.99,
      brand: "Polo",
      rating: 4.5,
      numReviews: 10,
      stock: 5,
      isFeatured: true,
      banner: "banner-1.jpg"
    },
    {
      name: "Brooks Brothers Long Sleeved Shirt",
      slug: "brooks-brothers-long-sleeved-shirt",
      category: "Men's Dress Shirts",
      description: "Timeless style and premium comfort",
      images: [
        "/images/sample-products/p2-1.jpg",
        "/images/sample-products/p2-2.jpg"
      ],
      price: 85.9,
      brand: "Brooks Brothers",
      rating: 4.2,
      numReviews: 8,
      stock: 10,
      isFeatured: true,
      banner: "banner-2.jpg"
    },
    {
      name: "Tommy Hilfiger Classic Fit Dress Shirt",
      slug: "tommy-hilfiger-classic-fit-dress-shirt",
      category: "Men's Dress Shirts",
      description: "A perfect blend of sophistication and comfort",
      images: [
        "/images/sample-products/p3-1.jpg",
        "/images/sample-products/p3-2.jpg"
      ],
      price: 99.95,
      brand: "Tommy Hilfiger",
      rating: 4.9,
      numReviews: 3,
      stock: 0,
      isFeatured: false,
      banner: null
    },
    {
      name: "Calvin Klein Slim Fit Stretch Shirt",
      slug: "calvin-klein-slim-fit-stretch-shirt",
      category: "Men's Dress Shirts",
      description: "Streamlined design with flexible stretch fabric",
      images: [
        "/images/sample-products/p4-1.jpg",
        "/images/sample-products/p4-2.jpg"
      ],
      price: 39.95,
      brand: "Calvin Klein",
      rating: 3.6,
      numReviews: 5,
      stock: 10,
      isFeatured: false,
      banner: null
    },
    {
      name: "Polo Ralph Lauren Oxford Shirt",
      slug: "polo-ralph-lauren-oxford-shirt",
      category: "Men's Dress Shirts",
      description: "Iconic Polo design with refined oxford fabric",
      images: [
        "/images/sample-products/p5-1.jpg",
        "/images/sample-products/p5-2.jpg"
      ],
      price: 79.99,
      brand: "Polo",
      rating: 4.7,
      numReviews: 18,
      stock: 6,
      isFeatured: false,
      banner: null
    },
    {
      name: "Polo Classic Pink Hoodie",
      slug: "polo-classic-pink-hoodie",
      category: "Men's Sweatshirts",
      description: "Soft, stylish, and perfect for laid-back days",
      images: [
        "/images/sample-products/p6-1.jpg",
        "/images/sample-products/p6-2.jpg"
      ],
      price: 99.99,
      brand: "Polo",
      rating: 4.6,
      numReviews: 12,
      stock: 8,
      isFeatured: true,
      banner: null
    }
  ],

  services: [
    {
      name: "Стрижка класична",
      description:
        "Класична чоловіча стрижка з використанням ножиць та машинки.",
      price: 350,
      senior_price: 400,
      duration: 60
    },
    {
      name: "Гоління небезпечною бритвою",
      description:
        "Традиційне вологе гоління небезпечною бритвою з гарячими рушниками.",
      price: 300,
      senior_price: 400,
      duration: 30
    },
    {
      name: "Стрижка бороди",
      description:
        "Формування та догляд за бородою із застосуванням професійної косметики.",
      price: 250,
      senior_price: 400,
      duration: 30
    },
    {
      name: "Камуфлювання сивини",
      description: "М'яке тонування волосся для природного вигляду без сивини.",
      price: 400,
      senior_price: 400,
      duration: 30
    },
    {
      name: "Дитяча стрижка",
      description: "Весела та комфортна стрижка для дітей до 12 років.",
      price: 300,
      senior_price: 400,
      duration: 60
    },
    {
      name: "Комплекс: стрижка + борода",
      description:
        "Повний образ: чоловіча стрижка разом із доглядом за бородою.",
      price: 550,
      senior_price: 400,
      duration: 90
    },
    {
      name: "Укладання волосся",
      description:
        "Професійне укладання волосся з використанням засобів фіксації.",
      price: 150,
      senior_price: 400,
      duration: 30
    }
  ],

  location: [
    {
      name: "CREW",
      address: "вулиця Капушанська, 87",
      mapLink:
        "https://www.google.com/maps/place/%D0%91%D0%B0%D1%80%D0%B1%D0%B5%D1%80%D1%88%D0%BE%D0%BF+%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4+CREW+barbershop/@48.6160307,22.2818643,17z/data=!3m1!4b1!4m6!3m5!1s0x4739199f4389c18f:0x48961ea493225951!8m2!3d48.6160307!4d22.2818643!16s%2Fg%2F11vdf98ndn?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D",
      reservationUrl: "https://widget.easyweek.com.ua/iconic-crew"
    },
    {
      name: "Cloud:Mark1",
      address: "вулиця Легоцького, 80",
      mapLink:
        "https://www.google.com/maps/place/Cloud:Mark1+Barbershop+%7C+%D0%91%D0%B0%D1%80%D0%B1%D0%B5%D1%80%D1%88%D0%BE%D0%BF+%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4/@48.6038286,22.2695792,15z/data=!4m6!3m5!1s0x4739190b9fd9d31b:0xa4fc2b1ac88324dd!8m2!3d48.6038375!4d22.2695738!16s%2Fg%2F11l70kqllq?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D",
      reservationUrl:
        "https://n816066.alteg.io/company/766546/personal/menu?o=m-1"
    },
    {
      name: "Cloud:Mark1",
      address: "вулиця Легоцького, 80",
      mapLink:
        "https://www.google.com/maps/place/Cloud:Mark1+Barbershop+%7C+%D0%91%D0%B0%D1%80%D0%B1%D0%B5%D1%80%D1%88%D0%BE%D0%BF+%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4/@48.6038286,22.2695792,15z/data=!4m6!3m5!1s0x4739190b9fd9d31b:0xa4fc2b1ac88324dd!8m2!3d48.6038375!4d22.2695738!16s%2Fg%2F11l70kqllq?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D",
      reservationUrl:
        "https://n816066.alteg.io/company/766546/personal/menu?o=m-1"
    }
  ],
  staff: [
    {
      id: "1d8a6c61-93c2-4e4d-a81c-1e6df16b01a1",
      name: "Олександр Іванов",
      isSenior: true,
      isArtDirector: true,
      description_short: "Досвідчений майстер класичних чоловічих стрижок.",
      description:
        "Олександр має понад 10 років досвіду в барберінгу та є справжнім знавцем класичних технік. Його улюблений інструмент — небезпечна бритва, якою він володіє досконало. Він завжди точно розуміє побажання клієнта й вміє порадити найкращу стрижку. Його клієнти — це переважно постійні відвідувачі, які цінують якість і професіоналізм. У вільний час навчає молодих барберів та бере участь у майстер-класах. Завжди спокійний, впевнений і зібраний у роботі.",
      images: "/images/staff/staff-1.jpg"
    },
    {
      id: "2a7f4b7b-5b2d-4f7c-913e-6e7cfcb053d2",
      name: "Михайло Петренко",
      isSenior: false,
      isArtDirector: false,
      description_short:
        "Молодий барбер з креативним підходом до кожної зачіски.",
      description:
        "Михайло — це нове покоління барберів, які поєднують сучасний стиль з класикою. Він постійно вивчає нові техніки та тренди в чоловічих зачісках. Його клієнти часто приходять за свіжими й неординарними образами. Він легко знаходить спільну мову з будь-якою людиною та створює дружню атмосферу в барбершопі. Працює швидко, впевнено і якісно. Захоплюється фотографією та часто знімає власні роботи для Instagram.",
      images: "/images/staff/staff-1.jpg"
    }
  ],

  articles: [
    {
      title: "Секрети ідеального фарбування волосся",
      text: "У цій статті ми розкриваємо ключові техніки фарбування, що забезпечують довготривалий та насичений колір без шкоди для волосся.",
      images: [
        "/images/articles/article-1",
        "/images/articles/article-2",
        "/images/articles/article-3"
      ]
    },
    {
      title: "5 міфів про догляд за шкірою голови",
      text: "Розвінчуємо поширені хибні уявлення про щоденний догляд за шкірою голови та пропонуємо науково обґрунтовані альтернативи.",
      images: [
        "/images/articles/article-1",
        "/images/articles/article-2",
        "/images/articles/article-3"
      ]
    },
    {
      title: "Як обрати свого майстра: поради клієнтам",
      text: "Довіра між майстром та клієнтом — ключ до ідеального результату. Дізнайтесь, на що звертати увагу під час вибору спеціаліста.",
      images: [
        "/images/articles/article-1",
        "/images/articles/article-2",
        "/images/articles/article-3"
      ]
    },
    {
      title: "Новинки в світі доглядової косметики 2025",
      text: "Огляд найактуальніших засобів для догляду за волоссям і шкірою, які вже з'явилися або тільки виходять на український ринок.",
      images: [
        "/images/articles/article-1",
        "/images/articles/article-2",
        "/images/articles/article-3"
      ]
    }
  ],
  users: [
    {
      name: "Admin",
      email: "crew.network.corp@gmail.com",
      password: hashSync("3YCGvSsDUInm$H&e", 10),
      role: "admin"
    }
  ]
};

export default sampleData;
