import { MenuCategory, MenuItem } from "@/types/menu";

export const categories: MenuCategory[] = [
  "Pasta",
  "Rice",
  "Protein",
  "Porridge",
  "Ice Cream",
  "Waffles & Pancakes",
];

// Unsplash photography placeholders matching real food categories
const categoryImages: Record<MenuCategory, string> = {
  Pasta: "https://images.unsplash.com/photo-1621996346565-e3d5d6281318?auto=format&fit=crop&w=800&q=80",
  Rice: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
  Protein: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
  Porridge: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
  "Ice Cream": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
  "Waffles & Pancakes": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80",
};

const pasta: MenuItem[] = [
  {
    id: "pasta-reload",
    name: "Reload spaghetti",
    price: 2400,
    category: "Pasta",
    description: "A satisfying spaghetti favourite.",
    image: categoryImages["Pasta"],
    featured: true,
  },
  {
    id: "fish-ghetti",
    name: "Fish ghetti",
    price: 1500,
    category: "Pasta",
    description: "Spaghetti cooked with spiced fish.",
    image: categoryImages["Pasta"],
  },
  {
    id: "spaghetti",
    name: "Spaghetti",
    price: 1400,
    category: "Pasta",
    description: "A classic, comforting plate.",
    image: categoryImages["Pasta"],
  },
  {
    id: "cravings-pasta",
    name: "Cravings pasta",
    price: 1400,
    category: "Pasta",
    description: "A Cravings N More house favourite.",
    image: categoryImages["Pasta"],
  },
  {
    id: "chinese-beef-spaghetti",
    name: "Chinese shredded beef spaghetti",
    price: 1500,
    category: "Pasta",
    description: "Spaghetti with Chinese-style shredded beef.",
    image: categoryImages["Pasta"],
  },
];

const riceNames: [string, number, string, boolean?][] = [
  ["White rice", 900, "Simple and satisfying."],
  ["Rice and beans", 1300, "A hearty Nigerian favourite."],
  ["Jollof rice", 1200, "Classic tomato-rich jollof.", true],
  ["Fried rice", 1200, "Colourful, savoury fried rice."],
  ["Coconut rice", 1500, "Rice with a sweet coconut twist."],
  ["Special jollof rice", 1400, "A special take on jollof."],
  ["Asun rice", 2700, "Rice paired with smoky asun-style flavour.", true],
  ["Special fried rice", 1400, "A loaded fried rice option."],
  ["Pillaf rice", 1400, "Aromatic pilaf-style rice."],
  ["Chinese shredded beef rice", 1600, "Rice with Chinese-style shredded beef."],
  ["Prawn rice", 2600, "Rice served with seasoned prawns."],
  ["Special white rice", 1600, "A special white rice plate."],
  ["Chinese delight", 2000, "A Chinese-inspired rice dish."],
  ["Native rice", 1500, "A rich local-style rice favourite."],
];

const rice: MenuItem[] = riceNames.map(([name, price, description, featured]) => ({
  id: `rice-${String(name).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  name,
  price,
  category: "Rice",
  description,
  image: categoryImages["Rice"],
  featured,
}));

const placeholders: MenuItem[] = [
  {
    id: "grilled-chicken",
    name: "Grilled chicken",
    price: 3500,
    category: "Protein",
    description: "Sample item -- please confirm availability and price.",
    image: categoryImages["Protein"],
    confirmPrice: true,
  },
  {
    id: "beef-suya",
    name: "Beef suya",
    price: 2500,
    category: "Protein",
    description: "Sample item -- please confirm availability and price.",
    image: categoryImages["Protein"],
    confirmPrice: true,
  },
  {
    id: "yam-porridge",
    name: "Yam porridge",
    price: 1800,
    category: "Porridge",
    description: "Sample item -- please confirm availability and price.",
    image: categoryImages["Porridge"],
    confirmPrice: true,
  },
  {
    id: "vanilla-scoop",
    name: "Vanilla scoop",
    price: 1000,
    category: "Ice Cream",
    description: "Creamy vanilla ice cream. Sample price -- confirm.",
    image: categoryImages["Ice Cream"],
    confirmPrice: true,
    featured: true,
  },
  {
    id: "chocolate-scoop",
    name: "Chocolate scoop",
    price: 1200,
    category: "Ice Cream",
    description: "Rich chocolate ice cream. Sample price -- confirm.",
    image: categoryImages["Ice Cream"],
    confirmPrice: true,
  },
  {
    id: "classic-waffles",
    name: "Classic waffles",
    price: 2500,
    category: "Waffles & Pancakes",
    description: "Sample item -- please confirm availability and price.",
    image: categoryImages["Waffles & Pancakes"],
    confirmPrice: true,
  },
];

export const menuItems: MenuItem[] = [...pasta, ...rice, ...placeholders];

export const formatNaira = (amount: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
