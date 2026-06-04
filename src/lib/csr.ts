import type { LucideIcon } from "lucide-react";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Leaf,
  Users,
  Wrench,
} from "lucide-react";

import { PLACEHOLDER_IMAGES } from "./placeholderImages";

const IMG = PLACEHOLDER_IMAGES.csr;

export type CsrStat = { value: string; label: string };

export type CsrInitiative = {
  title: string;
  image: string;
  body: string[];
  bullets?: string[];
};

export type CsrFocusArea = {
  slug: string;
  title: string;
  /** One-line summary shown on the focus-area card. */
  tagline: string;
  /** Longer intro shown in the detail-page hero. */
  summary: string;
  icon: LucideIcon;
  heroImage: string;
  /** Headline number shown on the card. */
  cardStat: CsrStat;
  /** Stat row shown on the detail page. */
  stats: CsrStat[];
  initiatives: CsrInitiative[];
};

export const CSR_FOCUS_AREAS: CsrFocusArea[] = [
  {
    slug: "education",
    title: "Education",
    tagline: "Free schooling, scholarships and better-equipped government schools.",
    summary:
      "From classrooms for children outside the formal system to scholarships and school upgrades, our education work helps young people from underprivileged families learn, stay in school and build a future.",
    icon: GraduationCap,
    heroImage: IMG.education.hero,
    cardStat: { value: "200+", label: "Children educated" },
    stats: [
      { value: "200+", label: "Children in free education" },
      { value: "100+", label: "Scholarships awarded" },
      { value: "Multiple", label: "Govt schools equipped" },
    ],
    initiatives: [
      {
        title: "Education Centres for Underprivileged Children",
        image: IMG.education.initiatives[0],
        body: [
          "We run education centres for labour-class children in the slum area at Amloh and at the construction site in Mohali. Non-school-going children receive free education along with study material, and more than 200 children have been supported so far.",
        ],
        bullets: [
          "Free schooling and study material for children outside the formal system",
          "Support to re-enter and enrol in mainstream schools",
          "Building awareness of the value of education among children and parents",
        ],
      },
      {
        title: "Need-Based Scholarships",
        image: IMG.education.initiatives[1],
        body: [
          "Education is crucial for the overall growth of every child, more so for those from financially weaker sections. Madhav supports needy students to pursue higher education, putting these scholarships at the forefront of our fight against poverty and inequality. More than 100 scholarships have been awarded to date.",
        ],
      },
      {
        title: "Strengthening Government Schools",
        image: IMG.education.initiatives[2],
        body: [
          "We provide government schools with essential items based on their specific needs, including inverters, RO water purifiers, computers and other equipment. We also carry out renovation projects from time to time, responding to requests from school officials and local panchayat members so that schools stay well equipped and well maintained.",
          "The goal is a better learning environment for students and staff, and the overall enhancement of education in the community.",
        ],
      },
    ],
  },
  {
    slug: "health",
    title: "Health",
    tagline: "Blood donation drives and free medical camps across rural communities.",
    summary:
      "We bring healthcare closer to underserved villages through regular blood donation drives and free medical camps, with qualified doctors and medicines provided at no cost to the community.",
    icon: HeartPulse,
    heroImage: IMG.health.hero,
    cardStat: { value: "3,000+", label: "Patients treated" },
    stats: [
      { value: "16", label: "Blood donation camps" },
      { value: "3,000+", label: "Patients treated free" },
      { value: "Multiple", label: "Villages reached" },
    ],
    initiatives: [
      {
        title: "Blood Donation Camps",
        image: IMG.health.initiatives[0],
        body: [
          "Blood donation is a powerful act of kindness with the potential to save lives, and regular donation carries real health benefits for donors too. Madhav KRG Group organises blood donation camps both within the company premises and in nearby villages, supporting healthcare needs while building a culture of compassion. We have held around 16 such camps so far.",
        ],
      },
      {
        title: "Medical & Health Check-up Camps",
        image: IMG.health.initiatives[1],
        body: [
          "We organise a series of health check-up camps across multiple villages, including general health camps, eye check-up camps and dedicated women's and children's health camps, to improve healthcare access in underserved rural areas. Community members receive free consultations from qualified doctors along with essential medicines at no cost. More than 3,000 people have been treated to date.",
        ],
      },
    ],
  },
  {
    slug: "environment",
    title: "Environment",
    tagline: "Large-scale tree plantation and plastic-free awareness drives.",
    summary:
      "We work to restore green cover and cut plastic waste, planting tens of thousands of saplings and running awareness campaigns that help communities protect the environment around them.",
    icon: Leaf,
    heroImage: IMG.environment.hero,
    cardStat: { value: "30,000+", label: "Saplings planted" },
    stats: [
      { value: "30,000+", label: "Saplings planted" },
      { value: "Many", label: "Villages greened" },
      { value: "Ongoing", label: "Plastic-free drives" },
    ],
    initiatives: [
      {
        title: "Tree Plantation & Afforestation",
        image: IMG.environment.initiatives[0],
        body: [
          "Trees are being stripped from the earth at an alarming rate, threatening biodiversity, accelerating climate change and disrupting communities. With collective effort we can reverse the damage, so we regularly organise plantation drives across villages and have planted around 30,000 saplings to date.",
          "These drives restore green cover and raise awareness among local communities about caring for the environment.",
        ],
        bullets: [
          "Purify the air we breathe",
          "Provide shade that cools our surroundings",
          "Support wildlife and preserve biodiversity",
          "Restore green cover and beautify neighbourhoods",
        ],
      },
      {
        title: "Plastic-Free Awareness",
        image: IMG.environment.initiatives[1],
        body: [
          "Banning single-use plastic is vital for a healthier planet. We promote the message of refusing plastic through colourful wall paintings at prominent locations and community meetings, where we share the harmful effects of plastic pollution and encourage sustainable alternatives. Together these efforts foster environmental responsibility and drive lasting change.",
        ],
      },
    ],
  },
  {
    slug: "infrastructure",
    title: "Infrastructure & Community Development",
    tagline: "Street lighting, school sanitation and bus stands for safer villages.",
    summary:
      "We invest in the everyday infrastructure rural communities need, from street lights and bus stands to clean school washrooms, improving safety, hygiene and quality of life for thousands of residents.",
    icon: Building2,
    heroImage: IMG.infrastructure.hero,
    cardStat: { value: "1 lakh+", label: "People benefited" },
    stats: [
      { value: "12", label: "Villages lit" },
      { value: "180+", label: "Street lights installed" },
      { value: "20+", label: "School washrooms built" },
      { value: "12", label: "Bus stands constructed" },
    ],
    initiatives: [
      {
        title: "Village Street Lighting",
        image: IMG.infrastructure.initiatives[0],
        body: [
          "Street lighting greatly improves visibility at night, helping road users, pedestrians and cyclists move safely while reducing the risk of crime in poorly lit areas. In response to community requests, we provide and install street lights across villages so people can travel safely after dark. Twelve villages have been covered under this project with around 180 lights installed, benefiting approximately one lakh people.",
        ],
      },
      {
        title: "School Sanitation Infrastructure",
        image: IMG.infrastructure.initiatives[1],
        body: [
          "A survey of government schools found washrooms in unhygienic condition, so we began constructing and renovating washrooms in schools including Akalgarh, Parri Panecha, Bhadal Thua and Ramgarh. The work includes clean toilets, proper drainage and hand-washing stations, improving hygiene and encouraging a positive learning atmosphere. Around 20 such washrooms have been built in nearby areas.",
        ],
      },
      {
        title: "Bus Stand Construction",
        image: IMG.infrastructure.initiatives[2],
        body: [
          "Bus stops keep travellers safe from the weather and make public transport more efficient. After surveying nearby villages, we found that the lack of bus stands was causing real hardship, especially in bad weather, so we took the initiative to build them for the public. Twelve bus stands have been constructed to date.",
        ],
      },
    ],
  },
  {
    slug: "women-empowerment",
    title: "Women Empowerment",
    tagline: "Sewing skills that give women income, confidence and independence.",
    summary:
      "We help women improve the economic standing of their families through sewing skills training that builds confidence, restores self-esteem and opens the door to financial independence.",
    icon: Users,
    heroImage: IMG.women.hero,
    cardStat: { value: "2,000+", label: "Women trained" },
    stats: [
      { value: "2,000+", label: "Women trained" },
      { value: "Multiple", label: "Sewing centres" },
      { value: "Many", label: "Villages reached" },
    ],
    initiatives: [
      {
        title: "Economic Empowerment through Sewing Skills",
        image: IMG.women.initiatives[0],
        body: [
          "Our aim is to improve the economic status of women and their families by equipping them with practical business skills through sewing machine training. The programme teaches technical skills while rebuilding confidence and self-esteem, giving women the ability to create their own employment, earn an independent income and raise their social standing. Sewing centres have been set up across several villages, and more than 2,000 women have been trained.",
        ],
      },
    ],
  },
  {
    slug: "skill-development",
    title: "Skill Development & Livelihood",
    tagline: "Vocational training that turns local youth into employable professionals.",
    summary:
      "Through dedicated skill centres, we train local youth in trades, healthcare and computer skills, helping them realise their potential and build sustainable careers.",
    icon: Wrench,
    heroImage: IMG.skill.hero,
    cardStat: { value: "2,000+", label: "Youth trained" },
    stats: [
      { value: "2,000+", label: "Youth trained" },
      { value: "4", label: "Trades offered" },
      { value: "Multiple", label: "Skill centres" },
    ],
    initiatives: [
      {
        title: "Madhav KRG Skill Development Centre",
        image: IMG.skill.initiatives[0],
        body: [
          "Our mission is to enable youth through quality skill training and placement, helping them realise their potential and shape sustainable careers. The skill centre at Amloh has trained approximately 2,000 students across four trades, with a special focus on soft skills and computer classes.",
        ],
        bullets: [
          "Assistant Electrician",
          "Business Correspondent",
          "Fitter",
          "Welder",
        ],
      },
      {
        title: "Healthcare Skill Centre",
        image: IMG.skill.initiatives[1],
        body: [
          "At the Madhav KRG Healthcare Skill Centre, trades such as Emergency Care Assistant and General Duty Assistant give students comprehensive practical and theoretical training. Courses also cover soft skills, communication, English, entrepreneurship and computer skills, so graduates are ready for real healthcare workplaces.",
        ],
      },
      {
        title: "Free Computer Education",
        image: IMG.skill.initiatives[2],
        body: [
          "We have established a computer centre to provide free computer education to children who need it. The programme enhances creativity and thinking skills, builds confident use of IT, and opens up better career prospects for local youth.",
          "Across our skill programmes the objective stays the same: improve quality of life through training, bridge the skills gap in the economy, and encourage an entrepreneurial spirit by helping youth set up their own enterprises.",
        ],
      },
    ],
  },
];

export const CSR_SLUGS = CSR_FOCUS_AREAS.map((area) => area.slug);

export function getCsrFocusArea(slug: string): CsrFocusArea | undefined {
  return CSR_FOCUS_AREAS.find((area) => area.slug === slug);
}
