// Media page (singleton). Today's live content: code fallbacks plus the values
// already saved in Sanity. The seeder only fills fields that are empty in Sanity.
// The Videos section was removed from the page on purpose and is not seeded.
// Articles 2 and 3 have no image in Sanity; the page shows stock photos for them,
// and the home page shows different stock photos for the same articles, so no
// image is seeded (seeding one would change the home page).
const doc = {
  "_id": "mediaPage",
  "_type": "mediaPage",
  "hero": {
    "eyebrow": "Media",
    "heading": "Press, plant tours and the conversations shaping circular industry.",
    "intro": "Where Madhav KRG Environmental Solution Limited shows up on the page, on camera and on the ground at the forums where recycling policy and practice are being rewritten.",
    "image": {
      "_type": "image",
      "_file": "public/images/media-hero-team.jpeg",
      "alt": "The MKESL team at an industry event"
    }
  },
  "articlesSection": {
    "eyebrow": "In the news",
    "heading": "Recycling, sustainability policy and long-term resource use.",
    "intro": "Independent coverage and analysis that frames the work MKESL and the wider industry are doing.",
    "items": [
      {
        "topic": "Pollution Control",
        "title": "PPCB develops new pollution control device for furnace units",
        "source": "The Times of India",
        "date": "2018-01-15",
        "href": "https://timesofindia.indiatimes.com/city/chandigarh/ppcb-develops-new-pollution-control-device-for-furnace-units/articleshow/62501422.cms",
        "image": {
          "_type": "image",
          "asset": {
            "_ref": "image-cf73f6bff8ace083e28ed4a5d0615bfdda4d3da1-400x225-avif",
            "_type": "reference"
          }
        }
      },
      {
        "topic": "Pollution Control",
        "title": "New pollution-control device for furnace units",
        "source": "The Tribune",
        "date": "2018-01-15",
        "href": "https://www.tribuneindia.com/news/archive/chandigarh/new-pollution-control-device-for-furnace-units-528733/"
      },
      {
        "topic": "Recycling ",
        "title": "Recycling metal dust, turning waste into wealth at zinc recovery plant in Punjab",
        "source": "Hindustan Times",
        "date": "2017-09-25",
        "href": "https://www.hindustantimes.com/punjab/recycling-metal-dust-turning-waste-into-wealth-at-zinc-recovery-plant-in-punjab/story-At28t2Zvnx9xHjdryTsOoM.html"
      }
    ]
  },
  "seo": {
    "title": "Media | Madhav KRG Environmental Solution Limited",
    "description": "Industry articles featuring Madhav KRG Environmental Solution Limited, covering recycling innovation, sustainability policy and the circular economy."
  }
};

export default doc;
