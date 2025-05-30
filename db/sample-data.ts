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
      price: 350.0,
      senior_price: 400.0,
      duration: 60
    },
    {
      name: "Гоління небезпечною бритвою",
      description:
        "Традиційне вологе гоління небезпечною бритвою з гарячими рушниками.",
      price: 300.0,
      senior_price: 400.0,
      duration: 30
    },
    {
      name: "Стрижка бороди",
      description:
        "Формування та догляд за бородою із застосуванням професійної косметики.",
      price: 250.0,
      senior_price: 400.0,
      duration: 30
    },
    {
      name: "Камуфлювання сивини",
      description: "М'яке тонування волосся для природного вигляду без сивини.",
      price: 400.0,
      senior_price: 400.0,
      duration: 30
    },
    {
      name: "Дитяча стрижка",
      description: "Весела та комфортна стрижка для дітей до 12 років.",
      price: 300.0,
      senior_price: 400.0,
      duration: 60
    },
    {
      name: "Комплекс: стрижка + борода",
      description:
        "Повний образ: чоловіча стрижка разом із доглядом за бородою.",
      price: 550.0,
      senior_price: 400.0,
      duration: 90
    },
    {
      name: "Укладання волосся",
      description:
        "Професійне укладання волосся з використанням засобів фіксації.",
      price: 150.0,
      senior_price: 400.0,
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
      description_short: "Досвідчений майстер класичних чоловічих стрижок.",
      description:
        "Олександр має понад 10 років досвіду в барберінгу та є справжнім знавцем класичних технік. Його улюблений інструмент — небезпечна бритва, якою він володіє досконало. Він завжди точно розуміє побажання клієнта й вміє порадити найкращу стрижку. Його клієнти — це переважно постійні відвідувачі, які цінують якість і професіоналізм. У вільний час навчає молодих барберів та бере участь у майстер-класах. Завжди спокійний, впевнений і зібраний у роботі.",
      images: "/images/staff/staff-1.jpg"
    },
    {
      id: "2a7f4b7b-5b2d-4f7c-913e-6e7cfcb053d2",
      name: "Михайло Петренко",
      isSenior: false,
      description_short:
        "Молодий барбер з креативним підходом до кожної зачіски.",
      description:
        "Михайло — це нове покоління барберів, які поєднують сучасний стиль з класикою. Він постійно вивчає нові техніки та тренди в чоловічих зачісках. Його клієнти часто приходять за свіжими й неординарними образами. Він легко знаходить спільну мову з будь-якою людиною та створює дружню атмосферу в барбершопі. Працює швидко, впевнено і якісно. Захоплюється фотографією та часто знімає власні роботи для Instagram.",
      images: "/images/staff/staff-1.jpg"
    },
    {
      id: "3f5bcbf4-fb17-4a8a-8655-9a5b53112c99",
      name: "Дмитро Кузнецов",
      isSenior: true,
      description_short: "Професіонал з оформлення бороди та техніки fade.",
      description:
        "Дмитро спеціалізується на високоточних fade-стрижках та оформленні бороди. Його робота — це завжди чистота ліній і точність форм. Він надає особливого значення деталям і використовує тільки преміум-косметику. Клієнти відзначають його вміння чути та розуміти побажання. Часто бере участь у змаганнях барберів та має кілька перемог. Має стриманий стиль та завжди готовий до викликів.",
      images: "/images/staff/staff-1.jpg"
    },
    {
      id: "4ec14eaf-0a8b-4efc-b4de-d7d0e234ca6c",
      name: "Ігор Сидоренко",
      isSenior: false,
      description_short: "Новачок у команді, який активно розвивається.",
      description:
        "Ігор — один із наймолодших барберів у нашій команді, але вже показав себе як відповідальний та талановитий майстер. Він постійно практикується й вдосконалює свої навички під керівництвом старших колег. Ігор відкритий до нового досвіду та уважно прислухається до клієнтів. Його стиль — це свіжий погляд і акуратність у кожному русі. У нього вже з'являються свої постійні клієнти. Він активно вивчає тренди та бере участь у внутрішніх навчаннях.",
      images: "/images/staff/staff-1.jpg"
    },
    {
      id: "5b13a5d2-d155-4a1e-9155-62ec2a97e9a0",
      name: "Нікіта Смирнов",
      isSenior: false,
      description_short: "Завжди усміхнений барбер, що дарує позитив.",
      description:
        "Нікіта відомий своєю дружелюбністю та вмінням створити легку атмосферу. Його підхід — це завжди увага до деталей та добрий настрій. Він любить експериментувати з укладками та формами, зберігаючи водночас класику. Нікіта знаходить спільну мову з будь-яким клієнтом, незалежно від віку. Після стрижки в нього клієнти виходять із посмішкою. Захоплюється спортом і завжди заряджає позитивом.",
      images: "/images/staff/staff-1.jpg"
    },
    {
      id: "6a2d1f2f-b2fc-41e2-b86a-88e97c2222c7",
      name: "Артем Орлов",
      isSenior: true,
      description_short: "Креативний директор з унікальним баченням стилю.",
      description:
        "Артем — головний стиліст та натхненник нашого барбершопу. Він має вражаюче портфоліо й досвід роботи з відомими людьми. Його головна мета — підкреслити індивідуальність кожного клієнта. Артем стежить за трендами та навчає команду сучасним технікам. Його поради безцінні, а результат — завжди вище очікувань. Він також веде майстер-класи й ділиться знаннями з молодими барберами.",
      images: "/images/staff/staff-1.jpg"
    },
    {
      id: "7e312f61-9f45-4c5b-aaf5-3e9a3f93421d",
      name: "Владислав Черненко",
      isSenior: false,
      description_short: "Прихильник барбер-культури та сучасного стилю.",
      description:
        "Владислав має особливий підхід до кожного клієнта та обожнює створювати стильні образи. Він прагне зробити кожну стрижку мистецтвом. Працює акуратно, швидко та з повагою до побажань клієнта. Має гарний смак і допоможе підібрати образ до події чи стилю життя. Постійно навчається та вдосконалює техніку fade. У вільний час читає професійну літературу й веде блог про барберінг.",
      images: "/images/staff/staff-1.jpg"
    },
    {
      id: "8ab9c820-4f53-4b3b-97b3-f381541d6db1",
      name: "Ярослав Бондаренко",
      isSenior: false,
      description_short: "Майстер, що працює швидко, чисто й стильно.",
      description:
        "Ярослав — той, хто не гаяє часу дарма. Його стрижки завжди чіткі, стильні й сучасні. Він добре знає, як вкласти волосся так, щоб зачіска трималася до наступного візиту. Працює з різними типами волосся та формами обличчя. У нього чіткий підхід до кожної деталі. Доброзичливий та завжди радий новим клієнтам.",
      images: "/images/staff/staff-1.jpg"
    },
    {
      id: "9dd24389-91e8-4c8a-8103-69e0e214f45c",
      name: "Роман Ткаченко",
      isSenior: true,
      description_short: "Майстер із великим досвідом і постійною клієнтурою.",
      description:
        "Роман — справжній професіонал, якого цінують за стабільність і якість. Його клієнти — це люди, які довіряють лише йому. Він знає всі класичні техніки та вміє підлаштувати їх під сучасний стиль. Роман не зупиняється в розвитку — постійно відвідує профільні заходи. Має сертифікати міжнародного рівня. Завжди спокійний, точний і пунктуальний.",
      images: "/images/staff/staff-1.jpg"
    },
    {
      id: "10f6dc9b-3645-49c7-9edb-b64383912345",
      name: "Богдан Литвин",
      isSenior: false,
      description_short: "Молодий ентузіаст, який швидко прогресує.",
      description:
        "Богдан нещодавно приєднався до команди, але вже показав себе як старанний і здібний барбер. Його сильна сторона — це бажання розвиватися та вдосконалюватися. Він уважний до деталей та відкритий до критики. Навчається у старших майстрів і активно переймає досвід. Має гарне відчуття стилю і швидко навчається новим технікам. Його робота — це завжди охайність і акуратність.",
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
  ]
};

export default sampleData;
