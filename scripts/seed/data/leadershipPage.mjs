// Leadership page (singleton). Today's live content: code fallbacks plus the
// values already saved in Sanity (published and draft are identical). The seeder
// only fills fields that are empty in Sanity. Rahul Goyal's "Turning Metal into
// Tomorrow" entry is intentional.
const doc = {
  "_id": "leadershipPage",
  "_type": "leadershipPage",
  "hero": {
    "eyebrow": "Leadership",
    "heading": "The people behind every tonne we recycle.",
    "intro": "Madhav KRG Environmental Solution Limited is led by operators, not bystanders. The people on this page have been on the shop floor, in the audit room and in the field often all in the same week.",
    "image": {
      "_type": "image",
      "_file": "public/images/leadership/team-hero.jpg",
      "alt": "Madhav KRG Environmental Solution Limited leadership team"
    }
  },
  "founder": {
    "eyebrow": "Managing Director's message",
    "heading": "A note from Sudhir Goyal.",
    "name": "Sudhir Goyal",
    "role": "Managing Director",
    "story": "Positive outcomes are the result of following accurate techniques, procedures and systems. At Madhav KRG Environmental Solution Limited we maintain dedicated systems to ensure compliance with the standards we set for ourselves and the ones our partners hold us to.\n\nThe word that guides everything we do is GIVING giving quality to our customers, fair remuneration to our people, dependable services to our partners, robust systems to our operations, and meaningful contribution to society.\n\nThis wholehearted commitment has helped us build strong, long-standing relationships with the customers and stakeholders who choose to grow with us.",
    "image": {
      "_type": "image",
      "asset": {
        "_ref": "image-8608c850624b04a7ad90c52a01033aee09ee8f19-577x667-jpg",
        "_type": "reference"
      },
      "alt": "Sudhir Goyal, Managing Director"
    }
  },
  "pullQuote": {
    "text": "Efficient utilization of Energy and Nature's Resources is the mantra of Madhav KRG Environmental Solution Limited in achieving our set goals.",
    "attribution": "Sudhir Goyal, Managing Director",
    "backgroundImage": {
      "_type": "image",
      "_url": "https://images.unsplash.com/photo-1488330890490-c291ecf62571?w=800&h=700&fit=crop&auto=format&q=80"
    }
  },
  "director": {
    "eyebrow": "Director's message",
    "heading": "A note from Sanjeev Goyal.",
    "name": "Sanjeev Goyal",
    "role": "Director",
    "story": "Madhav KRG Environmental Solution Limited believes in long-term relationships and in creating an environment in which those relationships can grow. We welcome existing and new vendors with the same impartiality, because equitable economic development is what makes a supply chain durable.\n\nWe treat the regulatory policies of the government as business guidelines, not constraints and the work we do is meant to contribute to the socio-economic development of the country.\n\nQuality assurance, for us, is not a step in the manufacturing line. It is part of the culture of our organisation.",
    "image": {
      "_type": "image",
      "asset": {
        "_ref": "image-09aa9c0b03169dad03ecc41d18b4052bdcc63f99-577x667-jpg",
        "_type": "reference"
      },
      "alt": "Sanjeev Goyal, Director"
    }
  },
  "additionalLeaders": [
    {
      "eyebrow": "Director's message",
      "heading": "Turning Metal into Tomorrow",
      "name": "Rahul Goyal",
      "role": "Director",
      "story": "True progress lies in building a sustainable future through innovation, responsibility, and purpose. At MKESL, we are committed to creating solutions that make a lasting difference.",
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "image-7f9cabf6d19dedf3a88f96f128ab67fb6e9b77da-1122x1402-png",
          "_type": "reference"
        },
        "alt": "Rahul Goyal, Director"
      }
    }
  ],
  "contactEmail": "contact@mkrg.in",
  "seo": {
    "title": "Leadership | Madhav KRG Environmental Solution Limited",
    "description": "Founder story, leadership team and the environmental mission behind Madhav KRG Environmental Solution Limited."
  }
};

export default doc;
