// CSR page (/csr and the six /csr/<slug> focus-area pages): today's content from
// src/components/CsrPageContent.tsx, src/components/CsrFocusAreaContent.tsx,
// src/lib/csr.ts (CSR_FOCUS_AREAS) and the metadata in src/app/(site)/csr/.
// Focus-area icons: graduation-cap / heart-pulse / wrench are CSR-only keys
// resolved in src/lib/csr.ts.
const doc = {
  _id: "csrPage",
  _type: "csrPage",
  hero: {
    eyebrow: "Corporate Social Responsibility",
    heading: "Investing in the communities we call home.",
    intro: "For Madhav KRG Environmental Solution Limited, responsibility reaches beyond the plant gate. Across education, health, the environment and rural livelihoods, our CSR work helps the people and places around our operations build a stronger, more dignified future.",
    image: {
      _type: "image",
      _file: "public/images/CSR/Plantation.jpeg",
      alt: "Madhav KRG Environmental Solution Limited community work"
    }
  },
  impact: {
    eyebrow: "Our impact so far",
    heading: "Measured not in numbers alone, but in the lives they represent.",
    stats: [
      {
        _type: "stat",
        value: "30,000+",
        label: "Saplings planted"
      },
      {
        _type: "stat",
        value: "1 lakh+",
        label: "Lives touched"
      },
      {
        _type: "stat",
        value: "2,000+",
        label: "Youth skilled"
      },
      {
        _type: "stat",
        value: "2,000+",
        label: "Women empowered"
      }
    ]
  },
  focus: {
    eyebrow: "Where we focus",
    heading: "Six focus areas, one commitment.",
    intro: "Each focus area runs as a set of on-the-ground programmes in the villages and towns around our plants. Explore any area to see the work in detail.",
    cardLinkLabel: "Explore focus area"
  },
  focusAreas: [
    {
      slug: {
        _type: "slug",
        current: "education"
      },
      title: "Education",
      tagline: "Free schooling, scholarships and better-equipped government schools.",
      summary: "From classrooms for children outside the formal system to scholarships and school upgrades, our education work helps young people from underprivileged families learn, stay in school and build a future.",
      icon: "graduation-cap",
      heroImage: {
        _type: "image",
        _file: "public/images/CSR/Scholorship.jpeg",
        alt: "Education"
      },
      cardStat: {
        value: "200+",
        label: "Children educated"
      },
      stats: [
        {
          _type: "stat",
          value: "200+",
          label: "Children in free education"
        },
        {
          _type: "stat",
          value: "100+",
          label: "Scholarships awarded"
        },
        {
          _type: "stat",
          value: "Multiple",
          label: "Govt schools equipped"
        }
      ],
      initiatives: [
        {
          title: "Education Centres for Underprivileged Children",
          image: {
            _type: "image",
            _file: "public/images/CSR/Equipment donation.jpg",
            alt: "Education Centres for Underprivileged Children"
          },
          body: [
            "We run education centres for labour-class children in the slum area at Amloh and at the construction site in Mohali. Non-school-going children receive free education along with study material, and more than 200 children have been supported so far."
          ],
          bullets: [
            "Free schooling and study material for children outside the formal system",
            "Support to re-enter and enrol in mainstream schools",
            "Building awareness of the value of education among children and parents"
          ]
        },
        {
          title: "Need-Based Scholarships",
          image: {
            _type: "image",
            _file: "public/images/CSR/Scholorship.jpeg",
            alt: "Need-Based Scholarships"
          },
          body: [
            "Education is crucial for the overall growth of every child, more so for those from financially weaker sections. Madhav supports needy students to pursue higher education, putting these scholarships at the forefront of our fight against poverty and inequality. More than 100 scholarships have been awarded to date."
          ]
        },
        {
          title: "Strengthening Government Schools",
          image: {
            _type: "image",
            _file: "public/images/CSR/Equipment donation.jpg",
            alt: "Strengthening Government Schools"
          },
          body: [
            "We provide government schools with essential items based on their specific needs, including inverters, RO water purifiers, computers and other equipment. We also carry out renovation projects from time to time, responding to requests from school officials and local panchayat members so that schools stay well equipped and well maintained.",
            "The goal is a better learning environment for students and staff, and the overall enhancement of education in the community."
          ]
        }
      ],
      seoTitle: "Education | CSR | Madhav KRG Environmental Solution Limited",
      seoDescription: "From classrooms for children outside the formal system to scholarships and school upgrades, our education work helps young people from underprivileged families learn, stay in school and build a future."
    },
    {
      slug: {
        _type: "slug",
        current: "health"
      },
      title: "Health",
      tagline: "Blood donation drives and free medical camps across rural communities.",
      summary: "We bring healthcare closer to underserved villages through regular blood donation drives and free medical camps, with qualified doctors and medicines provided at no cost to the community.",
      icon: "heart-pulse",
      heroImage: {
        _type: "image",
        _file: "public/images/CSR/Women health camp.jpg",
        alt: "Health"
      },
      cardStat: {
        value: "3,000+",
        label: "Patients treated"
      },
      stats: [
        {
          _type: "stat",
          value: "16",
          label: "Blood donation camps"
        },
        {
          _type: "stat",
          value: "3,000+",
          label: "Patients treated free"
        },
        {
          _type: "stat",
          value: "Multiple",
          label: "Villages reached"
        }
      ],
      initiatives: [
        {
          title: "Blood Donation Camps",
          image: {
            _type: "image",
            _file: "public/images/CSR/Blood donation.jpeg",
            alt: "Blood Donation Camps"
          },
          body: [
            "Blood donation is a powerful act of kindness with the potential to save lives, and regular donation carries real health benefits for donors too. Madhav KRG Environmental Solution Limited organises blood donation camps both within the company premises and in nearby villages, supporting healthcare needs while building a culture of compassion. We have held around 16 such camps so far."
          ]
        },
        {
          title: "Medical & Health Check-up Camps",
          image: {
            _type: "image",
            _file: "public/images/CSR/Women health camp.jpg",
            alt: "Medical & Health Check-up Camps"
          },
          body: [
            "We organise a series of health check-up camps across multiple villages, including general health camps, eye check-up camps and dedicated women's and children's health camps, to improve healthcare access in underserved rural areas. Community members receive free consultations from qualified doctors along with essential medicines at no cost. More than 3,000 people have been treated to date."
          ]
        }
      ],
      seoTitle: "Health | CSR | Madhav KRG Environmental Solution Limited",
      seoDescription: "We bring healthcare closer to underserved villages through regular blood donation drives and free medical camps, with qualified doctors and medicines provided at no cost to the community."
    },
    {
      slug: {
        _type: "slug",
        current: "environment"
      },
      title: "Environment",
      tagline: "Large-scale tree plantation and plastic-free awareness drives.",
      summary: "We work to restore green cover and cut plastic waste, planting tens of thousands of saplings and running awareness campaigns that help communities protect the environment around them.",
      icon: "leaf",
      heroImage: {
        _type: "image",
        _file: "public/images/CSR/Plantation 2.jpeg",
        alt: "Environment"
      },
      cardStat: {
        value: "30,000+",
        label: "Saplings planted"
      },
      stats: [
        {
          _type: "stat",
          value: "30,000+",
          label: "Saplings planted"
        },
        {
          _type: "stat",
          value: "Many",
          label: "Villages greened"
        },
        {
          _type: "stat",
          value: "Ongoing",
          label: "Plastic-free drives"
        }
      ],
      initiatives: [
        {
          title: "Tree Plantation & Afforestation",
          image: {
            _type: "image",
            _file: "public/images/CSR/Plantation.jpeg",
            alt: "Tree Plantation & Afforestation"
          },
          body: [
            "Trees are being stripped from the earth at an alarming rate, threatening biodiversity, accelerating climate change and disrupting communities. With collective effort we can reverse the damage, so we regularly organise plantation drives across villages and have planted around 30,000 saplings to date.",
            "These drives restore green cover and raise awareness among local communities about caring for the environment."
          ],
          bullets: [
            "Purify the air we breathe",
            "Provide shade that cools our surroundings",
            "Support wildlife and preserve biodiversity",
            "Restore green cover and beautify neighbourhoods"
          ]
        },
        {
          title: "Plastic-Free Awareness",
          image: {
            _type: "image",
            _file: "public/images/CSR/Plastic ban.jpeg",
            alt: "Plastic-Free Awareness"
          },
          body: [
            "Banning single-use plastic is vital for a healthier planet. We promote the message of refusing plastic through colourful wall paintings at prominent locations and community meetings, where we share the harmful effects of plastic pollution and encourage sustainable alternatives. Together these efforts foster environmental responsibility and drive lasting change."
          ]
        }
      ],
      seoTitle: "Environment | CSR | Madhav KRG Environmental Solution Limited",
      seoDescription: "We work to restore green cover and cut plastic waste, planting tens of thousands of saplings and running awareness campaigns that help communities protect the environment around them."
    },
    {
      slug: {
        _type: "slug",
        current: "infrastructure"
      },
      title: "Infrastructure & Community Development",
      tagline: "Street lighting, school sanitation and bus stands for safer villages.",
      summary: "We invest in the everyday infrastructure rural communities need, from street lights and bus stands to clean school washrooms, improving safety, hygiene and quality of life for thousands of residents.",
      icon: "building-2",
      heroImage: {
        _type: "image",
        _file: "public/images/CSR/Street light.jpeg",
        alt: "Infrastructure & Community Development"
      },
      cardStat: {
        value: "1 lakh+",
        label: "People benefited"
      },
      stats: [
        {
          _type: "stat",
          value: "12",
          label: "Villages lit"
        },
        {
          _type: "stat",
          value: "180+",
          label: "Street lights installed"
        },
        {
          _type: "stat",
          value: "20+",
          label: "School washrooms built"
        },
        {
          _type: "stat",
          value: "12",
          label: "Bus stands constructed"
        }
      ],
      initiatives: [
        {
          title: "Village Street Lighting",
          image: {
            _type: "image",
            _file: "public/images/CSR/Street light.jpeg",
            alt: "Village Street Lighting"
          },
          body: [
            "Street lighting greatly improves visibility at night, helping road users, pedestrians and cyclists move safely while reducing the risk of crime in poorly lit areas. In response to community requests, we provide and install street lights across villages so people can travel safely after dark. Twelve villages have been covered under this project with around 180 lights installed, benefiting approximately one lakh people."
          ]
        },
        {
          title: "School Sanitation Infrastructure",
          image: {
            _type: "image",
            _file: "public/images/CSR/Sanitation program.jpg",
            alt: "School Sanitation Infrastructure"
          },
          body: [
            "A survey of government schools found washrooms in unhygienic condition, so we began constructing and renovating washrooms in schools including Akalgarh, Parri Panecha, Bhadal Thua and Ramgarh. The work includes clean toilets, proper drainage and hand-washing stations, improving hygiene and encouraging a positive learning atmosphere. Around 20 such washrooms have been built in nearby areas."
          ]
        },
        {
          title: "Bus Stand Construction",
          image: {
            _type: "image",
            _file: "public/images/CSR/Bus stand.jpeg",
            alt: "Bus Stand Construction"
          },
          body: [
            "Bus stops keep travellers safe from the weather and make public transport more efficient. After surveying nearby villages, we found that the lack of bus stands was causing real hardship, especially in bad weather, so we took the initiative to build them for the public. Twelve bus stands have been constructed to date."
          ]
        }
      ],
      seoTitle: "Infrastructure & Community Development | CSR | Madhav KRG Environmental Solution Limited",
      seoDescription: "We invest in the everyday infrastructure rural communities need, from street lights and bus stands to clean school washrooms, improving safety, hygiene and quality of life for thousands of residents."
    },
    {
      slug: {
        _type: "slug",
        current: "women-empowerment"
      },
      title: "Women Empowerment",
      tagline: "Sewing skills that give women income, confidence and independence.",
      summary: "We help women improve the economic standing of their families through sewing skills training that builds confidence, restores self-esteem and opens the door to financial independence.",
      icon: "users",
      heroImage: {
        _type: "image",
        _file: "public/images/CSR/Women empowerment 2.jpeg",
        alt: "Women Empowerment"
      },
      cardStat: {
        value: "2,000+",
        label: "Women trained"
      },
      stats: [
        {
          _type: "stat",
          value: "2,000+",
          label: "Women trained"
        },
        {
          _type: "stat",
          value: "Multiple",
          label: "Sewing centres"
        },
        {
          _type: "stat",
          value: "Many",
          label: "Villages reached"
        }
      ],
      initiatives: [
        {
          title: "Economic Empowerment through Sewing Skills",
          image: {
            _type: "image",
            _file: "public/images/CSR/women empowerment.jpeg",
            alt: "Economic Empowerment through Sewing Skills"
          },
          body: [
            "Our aim is to improve the economic status of women and their families by equipping them with practical business skills through sewing machine training. The programme teaches technical skills while rebuilding confidence and self-esteem, giving women the ability to create their own employment, earn an independent income and raise their social standing. Sewing centres have been set up across several villages, and more than 2,000 women have been trained."
          ]
        }
      ],
      seoTitle: "Women Empowerment | CSR | Madhav KRG Environmental Solution Limited",
      seoDescription: "We help women improve the economic standing of their families through sewing skills training that builds confidence, restores self-esteem and opens the door to financial independence."
    },
    {
      slug: {
        _type: "slug",
        current: "skill-development"
      },
      title: "Skill Development & Livelihood",
      tagline: "Vocational training that turns local youth into employable professionals.",
      summary: "Through dedicated skill centres, we train local youth in trades, healthcare and computer skills, helping them realise their potential and build sustainable careers.",
      icon: "wrench",
      heroImage: {
        _type: "image",
        _file: "public/images/CSR/Skill center.jpeg",
        alt: "Skill Development & Livelihood"
      },
      cardStat: {
        value: "2,000+",
        label: "Youth trained"
      },
      stats: [
        {
          _type: "stat",
          value: "2,000+",
          label: "Youth trained"
        },
        {
          _type: "stat",
          value: "4",
          label: "Trades offered"
        },
        {
          _type: "stat",
          value: "Multiple",
          label: "Skill centres"
        }
      ],
      initiatives: [
        {
          title: "Madhav KRG Skill Development Centre",
          image: {
            _type: "image",
            _file: "public/images/CSR/Skill center.jpeg",
            alt: "Madhav KRG Skill Development Centre"
          },
          body: [
            "Our mission is to enable youth through quality skill training and placement, helping them realise their potential and shape sustainable careers. The skill centre at Amloh has trained approximately 2,000 students across four trades, with a special focus on soft skills and computer classes."
          ],
          bullets: [
            "Assistant Electrician",
            "Business Correspondent",
            "Fitter",
            "Welder"
          ]
        },
        {
          title: "Healthcare Skill Centre",
          image: {
            _type: "image",
            _file: "public/images/CSR/Women health camp.jpg",
            alt: "Healthcare Skill Centre"
          },
          body: [
            "At the Madhav KRG Healthcare Skill Centre, trades such as Emergency Care Assistant and General Duty Assistant give students comprehensive practical and theoretical training. Courses also cover soft skills, communication, English, entrepreneurship and computer skills, so graduates are ready for real healthcare workplaces."
          ]
        },
        {
          title: "Free Computer Education",
          image: {
            _type: "image",
            _file: "public/images/CSR/Equipment donation.jpg",
            alt: "Free Computer Education"
          },
          body: [
            "We have established a computer centre to provide free computer education to children who need it. The programme enhances creativity and thinking skills, builds confident use of IT, and opens up better career prospects for local youth.",
            "Across our skill programmes the objective stays the same: improve quality of life through training, bridge the skills gap in the economy, and encourage an entrepreneurial spirit by helping youth set up their own enterprises."
          ]
        }
      ],
      seoTitle: "Skill Development & Livelihood | CSR | Madhav KRG Environmental Solution Limited",
      seoDescription: "Through dedicated skill centres, we train local youth in trades, healthcare and computer skills, helping them realise their potential and build sustainable careers."
    }
  ],
  detailPages: {
    heroEyebrow: "Corporate Social Responsibility",
    backLinkLabel: "All focus areas",
    initiativesEyebrow: "On the ground",
    initiativesHeading: "How the work happens.",
    othersHeading: "Explore other focus areas",
    viewAllLabel: "View all"
  },
  closingCta: {
    heading: "Partner with us on the ground.",
    body: "Whether you represent a panchayat, a school, an NGO or a fellow business, we welcome partners who want to extend this work to more communities.",
    primaryLabel: "Get in touch",
    primaryHref: "/contact"
  },
  seo: {
    title: "CSR | Madhav KRG Environmental Solution Limited",
    description: "Madhav KRG Environmental Solution Limited's Corporate Social Responsibility work across education, health, environment, infrastructure, women empowerment and skill development in the communities around our operations."
  }
};

export default doc;
