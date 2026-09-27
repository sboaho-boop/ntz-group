export type Company = {
  slug: string;
  acronym: string;
  name: string;
  sector: string;
  blurb: string;
  image: string;
  /** literal Tailwind classes so the v4 scanner can see them */
  gradient: string;
  button: string;
  order: string;
};

export const COMPANIES: Company[] = [
  {
    slug: "ksd-sarl",
    acronym: "KSD",
    name: "Kasai Sud Diamant",
    sector: "Diamond Mining",
    blurb:
      "Diamond exploration and mining in the Kasai province — holder of exploitation permits PEPM 9709 and PE 571.",
    image: "/images/ksd-diamonds-cover.png",
    gradient: "from-earth-dark/90 via-earth-dark/30 to-transparent",
    button: "bg-earth-dark hover:bg-earth",
    order: "Company 01",
  },
  {
    slug: "chadila",
    acronym: "CDL",
    name: "Chadila",
    sector: "Diamonds, Hydroelectricity & Quarrying",
    blurb:
      "Diamond mining on permit PE 569, the Mbimbi falls hydroelectric potential of around 100 MW, and granite quarrying near Tshikapa.",
    image: "/images/chadila-mbimbi-falls-1.jpeg",
    gradient: "from-charcoal-dark/90 via-charcoal-dark/30 to-transparent",
    button: "bg-charcoal hover:bg-charcoal-light",
    order: "Company 02",
  },
  {
    slug: "longatshimo",
    acronym: "LMC",
    name: "Longatshimo Mining Company",
    sector: "Diamond Mining",
    blurb:
      "Diamond exploration across permits PEPM 484 to 491 on the Longatshimo river, four kilometres from the Angolan border.",
    image: "/images/longatshimo-drilling-1.jpg",
    gradient: "from-earth/90 via-earth/30 to-transparent",
    button: "bg-earth hover:bg-earth-light",
    order: "Company 03",
  },
  {
    slug: "new-terra-z",
    acronym: "NTZ",
    name: "New Terra-Z",
    sector: "Forestry & Agriculture",
    blurb:
      "Forestry and agricultural concessions in Mweka, Kasai — 13,000 hectares secured and a further 30,000 hectares being acquired.",
    image: "/images/newterra-forest-1.jpeg",
    gradient: "from-forest/90 via-forest-light/30 to-transparent",
    button: "bg-forest hover:bg-forest-light",
    order: "Company 04",
  },
  {
    slug: "terrakili-sarl",
    acronym: "TRK",
    name: "Terrakili",
    sector: "Agriculture & Agribusiness",
    blurb:
      "Project owner of the Mweka Agri-Project — commercial crop farming on a 48,000-hectare concession in the Kasai province.",
    image: "/images/mweka-site-1.jpg",
    gradient: "from-forest-light/90 via-forest/30 to-transparent",
    button: "bg-forest-light hover:bg-forest",
    order: "Company 05",
  },
];

export function companyHref(slug: string) {
  return `/companies/${slug}`;
}
