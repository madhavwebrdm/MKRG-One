/**
 * Curated Unsplash photos chosen to match MKRG's brand:
 * steel recycling, foundry operations, renewable energy, and Indian infrastructure.
 *
 * Swap with real Sanity-uploaded brand photography when assets land.
 */

const u = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

// --- Photo library (semantic IDs so it's easy to swap or reuse) ---
const PHOTO = {
  // Steel + foundry
  moltenPour: "1697281679213-fcab27e10ad4", // molten metal being poured
  factoryInterior: "1496247749665-49cf5b1022e9", // large industrial factory interior
  steelRolls: "1697698532634-ea59b636ccea", // rolls of steel in warehouse
  workersOnMetal: "1684259499227-e9844ab79747", // two men working on a metal piece
  overheadCrane: "1489689680823-fdc334aa73a4", // overhead crane in monochrome
  factoryExterior: "1743650050124-78df792c751d", // industrial factory building exterior
  weatheredFactory: "1743650050122-624233c928f3", // older factory structure

  // Welding / process
  welderSparks: "1504328345606-18bbc8c9d7d1", // welder with bright sparks
  welderFrame: "1455165814004-1126a7199f9b", // welder on steel frame
  grinderSparks: "1564182998523-6923112e7d6b", // angle grinder with sparks
  welderClose: "1558611997-dd5b20e08c71", // welder close-up

  // Steel products
  metalRodsBundled: "1623428454598-1bfe414bac03", // bundled metal rods
  steelRodsGray: "1520697517317-6767553cc51a", // pile of gray steel rods
  metalCylinders: "1681108212545-04cabe9cf771", // metal cylinders side by side

  // Scrap / recycling
  scrapTrain: "1753104228785-66d4f53c2ac7", // train cars filled with scrap metal
  industrialRefuse: "1710189605189-9b7e94dc04cb", // pile of refuse inside industrial space
  wasteWorker: "1558583055-d7ac00b1adca", // person standing among waste containers
  wasteBins: "1722482445685-91a6b17d5d02", // row of coloured waste bins

  // Renewable / nature
  solarGreenField: "1509391366360-2e959784a276", // solar panels in a green field
  solarClose: "1613665813446-82a78c468a1d", // close-up solar cells
  windmill: "1548337138-e87d889cc369", // single wind turbine
  windmillsField: "1508791290064-c27cc1ef7a9a", // windmills across green field
  pineTrees: "1488330890490-c291ecf62571", // green pine trees
  aerialForest: "1542273917363-3b1817f69a2d", // aerial view of forest canopy
  forestRoad: "1420593248178-d88870618ca0", // road through green forest

  // People / portraits (placeholders until real leadership photos arrive)
  portraitMan1: "1627401632925-a4c565d08a80", // professional male portrait
  portraitMan2: "1656221007870-dbb3900d6d99", // contemplative pose
  portraitMan3: "1656221009909-4f202547cd94", // suited man with microphone
  portraitMan4: "1656221009898-694595f2119b", // businessman at event
  portraitMan5: "1656221010175-bcfeadcb6017", // man in business suit
  portraitPair: "1656221008533-ebae2be98b48", // two men in suits

  // Certificates / awards
  certificateText: "1589330694653-ded6df03f754", // certificate document close-up
  certificateVintage: "1742415888265-d5044039d8e6", // vintage stock certificate
  awardPlaque: "1550438655-400744b9fefc", // framed award plaque on desk
  awardOnStage: "1766722906733-609eebf3b63a", // person holding an award on stage
  awardGroup: "1759560245150-8dcbb7f01142", // group photo at awards ceremony

  // Events / conference
  eventMingling: "1775163560631-6ff15eb2fa1f", // people mingling at indoor event
  speakerOnStage: "1762968269894-1d7e1ce8894e", // man speaking on stage
  conferenceAudience: "1769798643237-8642a3fbe5bc", // audience at conference
  conventionCentre: "1768590149034-c372f0c3a07c", // large convention venue

  // India infrastructure
  aerialHighway: "1708357997379-e55c1636e0d7", // aerial highway / cityscape
  highwayWater: "1705356395716-9357ed3156e9", // aerial highway near water
  cableBridge: "1569758267239-d08deb78bb1a", // cable-stayed bridge
  highwayMountains: "1737347799179-40be496e5937", // highway with mountains
} as const;

export const PLACEHOLDER_IMAGES = {
  // Home — Hero, metrics, mission, sustainability, processes, leadership, certs, media
  hero: u(PHOTO.moltenPour, 1600, 1200),
  metricsBg: u(PHOTO.factoryInterior, 1800, 1000),
  missionVision: u(PHOTO.workersOnMetal, 900, 1100),
  sustainability1: u(PHOTO.aerialForest, 800, 900),
  sustainability2: u(PHOTO.solarGreenField, 800, 900),
  sustainability3: u(PHOTO.wasteWorker, 800, 900),
  processes: [
    u(PHOTO.scrapTrain, 800, 600),
    u(PHOTO.metalRodsBundled, 800, 600),
    u(PHOTO.moltenPour, 800, 600),
    u(PHOTO.metalCylinders, 800, 600),
    u(PHOTO.factoryExterior, 800, 600),
    u(PHOTO.steelRolls, 800, 600),
  ],
  leadershipPortrait: u(PHOTO.portraitMan1, 900, 1100),
  leadershipBg: u(PHOTO.factoryInterior, 1800, 1000),
  certificationsAccent: u(PHOTO.overheadCrane, 1400, 900),
  mediaItems: [
    u(PHOTO.speakerOnStage, 800, 500),
    u(PHOTO.grinderSparks, 800, 500),
    u(PHOTO.eventMingling, 800, 500),
  ],

  // About page
  aboutHero: u(PHOTO.workersOnMetal, 1600, 1000),
  aboutBrand: u(PHOTO.steelRolls, 1200, 1000),
  aboutTimeline: u(PHOTO.factoryExterior, 1600, 700),
  aboutDifferentiators: [
    u(PHOTO.moltenPour, 800, 600),
    u(PHOTO.factoryExterior, 800, 600),
    u(PHOTO.metalRodsBundled, 800, 600),
    u(PHOTO.steelRodsGray, 800, 600),
  ],

  // Sustainability page
  sustHero: u(PHOTO.aerialForest, 1600, 1000),
  sustStatsAccent: u(PHOTO.factoryInterior, 1200, 900),
  sustPillars: [
    u(PHOTO.pineTrees, 800, 700),
    u(PHOTO.forestRoad, 800, 700),
    u(PHOTO.solarGreenField, 800, 700),
    u(PHOTO.windmillsField, 800, 700),
    u(PHOTO.aerialForest, 800, 700),
  ],
  sustCsr: u(PHOTO.wasteWorker, 1200, 800),
  sustEhs: u(PHOTO.welderFrame, 1200, 800),
  sustSubpages: [
    u(PHOTO.pineTrees, 800, 600),
    u(PHOTO.metalCylinders, 800, 600),
    u(PHOTO.eventMingling, 800, 600),
  ],

  // Processes page
  processesHero: u(PHOTO.moltenPour, 1600, 1000),
  scrapToSteelBg: u(PHOTO.factoryInterior, 1600, 700),
  wasteToZincBg: u(PHOTO.steelRolls, 1600, 700),
  apcdAccent: u(PHOTO.factoryExterior, 1200, 800),
  processesSubpages: [
    u(PHOTO.factoryInterior, 800, 600),
    u(PHOTO.metalRodsBundled, 800, 600),
    u(PHOTO.overheadCrane, 800, 600),
  ],

  // Leadership page
  leadershipFounderFull: u(PHOTO.portraitMan1, 1100, 1400),
  leadershipTeam: [
    u(PHOTO.portraitMan2, 800, 1000),
    u(PHOTO.portraitMan3, 800, 1000),
    u(PHOTO.portraitMan4, 800, 1000),
    u(PHOTO.portraitMan5, 800, 1000),
    u(PHOTO.portraitMan1, 800, 1000),
    u(PHOTO.portraitPair, 800, 1000),
  ],

  // Certifications page
  certificationsHero: u(PHOTO.awardPlaque, 1600, 1000),
  certificationsDocs: [
    u(PHOTO.certificateText, 800, 1100),
    u(PHOTO.certificateVintage, 800, 1100),
    u(PHOTO.awardPlaque, 800, 1100),
    u(PHOTO.awardOnStage, 800, 1100),
    u(PHOTO.awardGroup, 800, 1100),
  ],

  // Contact page
  contactHero: u(PHOTO.aerialHighway, 1400, 900),
  contactPlant: u(PHOTO.factoryExterior, 1200, 800),

  // Media page
  mediaHero: u(PHOTO.speakerOnStage, 1600, 1000),
  mediaArticles: [
    u(PHOTO.factoryInterior, 800, 600),
    u(PHOTO.aerialForest, 800, 600),
    u(PHOTO.metalRodsBundled, 800, 600),
  ],
  mediaCompanyNews: [
    u(PHOTO.awardPlaque, 800, 600),
    u(PHOTO.factoryInterior, 800, 600),
    u(PHOTO.wasteWorker, 800, 600),
    u(PHOTO.steelRolls, 800, 600),
  ],
  mediaVideos: [
    u(PHOTO.workersOnMetal, 1200, 700),
    u(PHOTO.grinderSparks, 1200, 700),
    u(PHOTO.speakerOnStage, 1200, 700),
  ],
  mediaEvents: [
    u(PHOTO.conventionCentre, 800, 600),
    u(PHOTO.eventMingling, 800, 600),
    u(PHOTO.wasteWorker, 800, 600),
  ],
  mediaSubpages: [
    u(PHOTO.certificateText, 800, 600),
    u(PHOTO.grinderSparks, 800, 600),
    u(PHOTO.conferenceAudience, 800, 600),
  ],
};
