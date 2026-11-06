// About page (singleton). Today's live content: code fallbacks plus the values
// already saved in Sanity. The seeder only fills fields that are empty in Sanity.
const doc = {
  "_id": "aboutPage",
  "_type": "aboutPage",
  "hero": {
    "eyebrow": "About us",
    "heading": "The recycler India can build its future on.",
    "intro": "Madhav KRG Environmental Solution Limited has spent decades closing the loop turning hazardous industrial waste into zinc that meets International Standards. We are building our identity as a state-of-the-art recycler so that industry, communities and the planet can grow together.",
    "image": {
      "_type": "image",
      "_url": "https://images.unsplash.com/photo-1684259499227-e9844ab79747?w=1600&h=1000&fit=crop&auto=format&q=80",
      "alt": "MKESL plant operations"
    }
  },
  "heroVideos": [
    {
      "video": {
        "_type": "file",
        "_file": "public/videos/about-hero-2.mp4"
      },
      "duration": 5
    },
    {
      "video": {
        "_type": "file",
        "_file": "public/videos/about-hero.mp4"
      },
      "duration": 5
    }
  ],
  "purpose": {
    "eyebrow": "Purpose",
    "heading": "A purpose built around the planet.",
    "mission": "To provide efficient, responsible recycling solutions that empower \ncommunities and businesses to minimize their environmental footprint. ",
    "vision": "Accelerating India’s growth by enabling Green Infrastructure",
    "missionLabel": "Mission",
    "visionLabel": "Vision"
  },
  "values": {
    "eyebrow": "Values",
    "heading": "Six values. One way of working",
    "intro": "Integrity · Excellence · Patriotism · Empowerment · Humility · Unity the principles that pre-date every plant, every audit, and every hire.",
    "items": [
      {
        "title": "Integrity",
        "body": "We act on principle, not expedience every batch, every audit, every conversation.",
        "icon": "shield-check"
      },
      {
        "title": "Excellence",
        "body": "International Standards are our floor, not our ceiling. We engineer above the bar.",
        "icon": "award"
      },
      {
        "title": "Patriotism",
        "body": "Building India's green infrastructure is our charge and our privilege.",
        "icon": "flag"
      },
      {
        "title": "Empowerment",
        "body": "Communities and partners grow with us never around us.",
        "icon": "sparkles"
      },
      {
        "title": "Humility",
        "body": "We listen before we lead. The work is bigger than any one voice.",
        "icon": "heart-handshake"
      },
      {
        "title": "Unity",
        "body": "One team, one direction across every plant and every shift.",
        "icon": "users"
      }
    ]
  },
  "brandIdentity": {
    "body": [
      {
        "_type": "block",
        "children": [
          {
            "_type": "span",
            "marks": [],
            "text": "Madhav KRG Environmental Solution Limited (MKESL) is a subsidiary of MADHAV KRG LIMITED and was incorporated on 25th OCT’2019. It is located in District Fatehgarh Sahib, Punjab. MKESL’s directors include Sudhir Goyal, Sanjeev Kumar and Rahul Goyal. MKESL is associated with the MADHAV KRG GROUP, one of the leading manufacturers of Tempcore TMT Rebars, galvanized rebars and MS Pipes in India. The group aims to accelerate India’s growth by enabling green infrastructure and is committed to innovation, customer delight, employee augmentation, integrity, excellence and patriotism. Strongly, believe in giving back to society and nature."
          }
        ],
        "markDefs": [],
        "style": "normal"
      }
    ],
    "eyebrow": "Brand identity",
    "heading": "One purpose. Every plant. A greener output.",
    "image": {
      "_type": "image",
      "asset": {
        "_ref": "image-7bb2a2dc2699f031a0dede5d9cb35c374a2080d3-1280x960-jpg",
        "_type": "reference"
      },
      "alt": "Madhav KRG Environmental Solution Limited identity"
    }
  },
  "differentiators": {
    "eyebrow": "Differentiators",
    "heading": "What Sets Us Apart?",
    "intro": "Four things show up in every audit, every spec sheet and every customer conversation they are the reason partners choose us over the next bid.",
    "items": [
      {
        "title": "A Pioneer in Pollution to Resource",
        "body": "Since 2014, refining a process that turns steel industry air pollutants into valuable resources.",
        "image": {
          "_type": "image",
          "_url": "https://images.unsplash.com/photo-1710189605189-9b7e94dc04cb?w=800&h=600&fit=crop&auto=format&q=80"
        }
      },
      {
        "title": "APCD Dust Recycling",
        "body": "Recycling APCD dust from steel manufacturers to recover zinc, keeping it out of landfill.",
        "image": {
          "_type": "image",
          "asset": {
            "_ref": "image-edd5f277d4b9c30872aa5f778d1f7ad80d6cf963-1760x1328-jpg",
            "_type": "reference"
          }
        }
      },
      {
        "title": "Zinc Recovery at Scale",
        "body": "Two lines, 10 tons of zinc a day each, roughly 6,000 tons a year.",
        "image": {
          "_type": "image",
          "asset": {
            "_ref": "image-7eba233971f691bf975bbed2544e4f249b056753-749x1029-jpg",
            "_type": "reference"
          }
        }
      },
      {
        "title": "Advanced APCD Technology",
        "body": "State-of-the-art APCD systems capture fumes, ensuring quality output with a minimised carbon footprint.",
        "image": {
          "_type": "image",
          "_url": "https://images.unsplash.com/photo-1558611997-dd5b20e08c71?w=800&h=600&fit=crop&auto=format&q=80"
        }
      }
    ]
  },
  "timeline": {
    "closingBody": "Madhav KRG Environmental Solution Limited was founded in year 2019 as a spin-off from the Madhav KRG Group’s steel manufacturing operations. The company was established with the goal of addressing the environmental challenges posed by the steel industry, particularly the issue of air pollution caused by dust particles from steel production. In year 2014, the Madhav KRG Group took the initiative to develop a pilot plant inside the existing plant for processing and refining these air pollutants. Over the next five years, the company worked to refine and improve the process, becoming a pioneer in converting “pollution to resource.” This innovative approach presented a significant opportunity for both the steel and zinc industries. To accommodate the growing scale and importance of this environmental initiative, Madhav KRG Environmental Solution Limited was established as a separate company in year 2019. The company’s mission is to make a positive impact on the environment through sustainable practices, including the recycling of waste materials. The company’s dedication to environmental responsibility and innovation has earned it a reputable position in the industry.",
    "closingHeading": "Brief History",
    "entries": [
      {
        "body": "The Madhav KRG Group develops a pilot plant inside its existing operations to process and refine air pollutants generated from steel production.",
        "title": "A pilot plant and an idea",
        "year": "2014"
      },
      {
        "body": "Over five years, the process is refined and improved, establishing Madhav KRG as a pioneer in converting pollution to resource.",
        "title": "Refining the process",
        "year": "2014–2019"
      },
      {
        "body": "Madhav KRG Environmental Solution Limited was established as a separate company on 25th October 2019, dedicated to sustainable recycling solutions.",
        "title": "MKESL is incorporated",
        "year": "2019"
      },
      {
        "body": "Line 1 has utilised 60% of its capacity. The Punjab Government has granted an incentive of Rs 18 crore, to be received over the next five years.",
        "title": "Line 1 at 60% utilisation",
        "year": "Ongoing"
      },
      {
        "body": "Line 2 is now established in parallel to Line 1 and is in operation. Once ramped, both lines are expected to reach a combined capacity of 70%, with a further incentive covering the next seven years.",
        "title": "Line 2 in operation",
        "year": "What's next"
      }
    ],
    "eyebrow": "Our story",
    "heading": "A Decade Spent Turning Waste into Resource",
    "intro": "A short timeline of how Madhav KRG Environmental Solution Limited grew from a single founding idea into one of India's most integrated recyclers."
  },
  "sustainabilityStatement": {
    "body": "MKESL contributes to environmental sustainability through its core operations focused on recycling APCD dust & metal waste. The company plays a vital role in preserving the environment by actively engaging in the recycling process, which helps reduce waste and minimize the extraction of new raw materials. Additionally, MKESL manufactures and trades zinc cathodes and zinc ingots, essential components in various industries, further promoting sustainable practices. The company’s commitment to environmental sustainability is evident in its state-of-the-art manufacturing & processes that adhere to strict environmental regulations, reflecting its commitment to environmental sustainability. Moreover, the company’s mission extends beyond profitability to being a leader in promoting sustainable practices and creating a greener future for generations to come.",
    "heading": "Driving Sustainable Change"
  },
  "seo": {
    "title": "About | Madhav KRG Environmental Solution Limited",
    "description": "Mission, vision, values, brand identity, differentiators and the company history of Madhav KRG Environmental Solution Limited, India's state-of-the-art recycler."
  }
};

export default doc;
