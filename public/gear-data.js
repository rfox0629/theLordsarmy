export const navigationItems = [
  { label: "Shop", href: "#uniform" },
  { label: "Uniform", href: "#uniform" },
  { label: "Patches", href: "#patches" },
  { label: "Discipleship", href: "#patches" },
  { label: "About", href: "#mission-strip" },
  { label: "Mission", href: "#mission" },
];

export const uniformProducts = [
  {
    name: "Standard Issue Tee",
    price: "$32.00",
    image: "/images/store/standard-issue-tee.jpg",
    alt: "Standard Issue Tee placeholder",
  },
  {
    name: "Field Hoodie",
    price: "$72.00",
    image: "/images/store/field-hoodie.jpg",
    alt: "Field Hoodie placeholder",
  },
  {
    name: "Tactical Backpack",
    price: "$128.00",
    image: "/images/store/tactical-backpack.jpg",
    alt: "Tactical Backpack placeholder",
  },
  {
    name: "Tactical Hat",
    price: "$32.00",
    image: "/images/store/tactical-hat.jpg",
    alt: "Tactical Hat placeholder",
  },
  {
    name: "Long Sleeve",
    price: "$40.00",
    image: "/images/store/long-sleeve.jpg",
    alt: "Long Sleeve placeholder",
  },
  {
    name: "Tactical Pen",
    price: "$18.00",
    image: "/images/store/tactical-pen.jpg",
    alt: "Tactical Pen placeholder",
  },
  {
    name: "Field Notebook",
    price: "$22.00",
    image: "/images/store/field-notebook.jpg",
    alt: "Field Notebook placeholder",
  },
];

export const patchProducts = [
  {
    name: "USAM Patch",
    price: "$12.00",
    image: "/images/store/patch-usam.jpg",
    alt: "USAM Patch placeholder",
  },
  {
    name: "Disciple Patch",
    price: "$12.00",
    image: "/images/store/patch-disciple.jpg",
    alt: "Disciple Patch placeholder",
  },
  {
    name: "Front Lines Patch",
    price: "$12.00",
    image: "/images/store/patch-front-lines.jpg",
    alt: "Front Lines Patch placeholder",
  },
  {
    name: "Prayer Warrior Patch",
    price: "$12.00",
    image: "/images/store/patch-prayer-warrior.jpg",
    alt: "Prayer Warrior Patch placeholder",
  },
  {
    name: "State Patches",
    price: "$12.00",
    image: "/images/store/patch-state-placeholder.jpg",
    alt: "State Patches placeholder",
  },
];

export const statePatches = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
].map((state) => ({
  name: `${state} Patch`,
  price: "$12.00",
  image: "/images/store/patch-state-placeholder.jpg",
  alt: `${state} Patch placeholder`,
}));

export const heroPatches = [
  "USAM",
  "Disciple",
  "Front Lines",
  "Prayer Warrior",
  "Texas Patch",
];

export const missionTiles = [
  {
    title: "Built In Community",
    text: "You don't walk alone.",
    image: "/images/store/field-hoodie.jpg",
  },
  {
    title: "Built On Truth",
    text: "Identity rooted in what lasts.",
    image: "/images/store/field-notebook.jpg",
  },
  {
    title: "Built For Purpose",
    text: "Every piece has a reason.",
    image: "/images/store/tactical-backpack.jpg",
  },
  {
    title: "Built To Go",
    text: "From the streets to the mission.",
    image: "/images/store/tactical-hat.jpg",
  },
];

export const footerColumns = [
  {
    title: "Shop",
    links: ["All Products", "Tees", "Hoodies", "Hats", "Backpacks", "Accessories"],
  },
  {
    title: "Uniform",
    links: ["Standard Issue", "Field Gear", "Bags & Packs", "Outerwear"],
  },
  {
    title: "Patches",
    links: ["All Patches", "Discipleship Patches", "Collections"],
  },
  {
    title: "Discipleship",
    links: ["Resources", "Blog", "Events", "In The Field"],
  },
  {
    title: "Info",
    links: ["Mission", "About Us", "FAQ", "Contact"],
  },
];
