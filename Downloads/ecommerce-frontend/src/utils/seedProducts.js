 
 import { addProduct } from '../services/api';

export const SEED_PRODUCTS = [
  // ---- Footwear ----
  { name: "Nike Air Max 270 Running Shoes", price: 8995, category: "footwear", brand: "Nike", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=560&fit=crop&auto=format" },
  { name: "Adidas Ultraboost Light Sneakers", price: 12999, category: "footwear", brand: "Adidas", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=560&fit=crop&auto=format" },
  { name: "Puma RS-X Sneakers", price: 7499, category: "footwear", brand: "Puma", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=560&fit=crop&auto=format" },

  // ---- Men ----
  { name: "Puma Essentials Cotton T-Shirt", price: 999, category: "men", brand: "Puma", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=560&fit=crop&auto=format" },
  { name: "Levi's 511 Slim Fit Jeans", price: 3499, category: "men", brand: "Levi's", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=560&fit=crop&auto=format" },
  { name: "U.S. Polo Assn. Pique Polo Shirt", price: 1799, category: "men", brand: "U.S. Polo Assn.", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=560&fit=crop&auto=format" },
  { name: "Roadster Cotton Casual Shirt", price: 1299, category: "men", brand: "Roadster", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=560&fit=crop&auto=format" },

  // ---- Women ----
  { name: "Zara Floral Print Midi Dress", price: 2990, category: "women", brand: "Zara", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=560&fit=crop&auto=format" },
  { name: "H&M Oversized Cotton Hoodie", price: 1499, category: "women", brand: "H&M", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=560&fit=crop&auto=format" },
  { name: "Biba Cotton Anarkali Kurta", price: 1999, category: "women", brand: "Biba", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=560&fit=crop&auto=format" },
  { name: "Vero Moda High-Waist Trousers", price: 2199, category: "women", brand: "Vero Moda", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=560&fit=crop&auto=format" },

  // ---- Kids ----
  { name: "Carter's Baby Cotton Romper", price: 1099, category: "kids", brand: "Carter's", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=560&fit=crop&auto=format" },
  { name: "Mothercare Kids Denim Jacket", price: 1899, category: "kids", brand: "Mothercare", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=560&fit=crop&auto=format" },

  // ---- Mobile ----
  { name: "Apple iPhone 15 (128GB, Black)", price: 79900, category: "mobile", brand: "Apple", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=560&fit=crop&auto=format" },
  { name: "Samsung Galaxy S24 (256GB)", price: 74999, category: "mobile", brand: "Samsung", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=560&fit=crop&auto=format" },
  { name: "OnePlus 12R (8GB/128GB)", price: 39999, category: "mobile", brand: "OnePlus", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=560&fit=crop&auto=format" },
  { name: "Xiaomi Redmi Note 13 Pro", price: 25999, category: "mobile", brand: "Xiaomi", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=560&fit=crop&auto=format" },

  // ---- Electronics ----
  { name: "Sony WH-1000XM5 Headphones", price: 29990, category: "electronics", brand: "Sony", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=560&fit=crop&auto=format" },
  { name: "boAt Airdopes 311 Pro Earbuds", price: 1299, category: "electronics", brand: "boAt", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=560&fit=crop&auto=format" },
  { name: "JBL Flip 6 Bluetooth Speaker", price: 9999, category: "electronics", brand: "JBL", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=560&fit=crop&auto=format" },
  { name: "Apple Watch Series 9 (GPS)", price: 41900, category: "electronics", brand: "Apple", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=560&fit=crop&auto=format" },
  { name: "Dell Inspiron 15 Laptop", price: 54990, category: "electronics", brand: "Dell", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=560&fit=crop&auto=format" },

  // ---- Beauty ----
  { name: "Lakmé 9to5 Matte Lipstick", price: 599, category: "beauty", brand: "Lakmé", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=560&fit=crop&auto=format" },
  { name: "Maybelline Fit Me Foundation", price: 549, category: "beauty", brand: "Maybelline", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=560&fit=crop&auto=format" },
  { name: "The Body Shop Vitamin C Serum", price: 1695, category: "beauty", brand: "The Body Shop", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=560&fit=crop&auto=format" },
  { name: "Mamaearth Onion Hair Oil", price: 399, category: "beauty", brand: "Mamaearth", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=560&fit=crop&auto=format" },

  // ---- Home & Living ----
  { name: "Wakefit Orthopedic Memory Pillow", price: 1299, category: "home", brand: "Wakefit", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=400&h=560&fit=crop&auto=format" },
  { name: "Milton Thermosteel Water Bottle", price: 899, category: "home", brand: "Milton", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=560&fit=crop&auto=format" },
  { name: "Prestige Non-Stick Cookware Set", price: 2499, category: "home", brand: "Prestige", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=560&fit=crop&auto=format" },
];

// Name -> image lookup (taaki fetched products apni image wapas pa sakein)
export const IMAGE_BY_NAME = SEED_PRODUCTS.reduce((map, p) => {
  map[p.name.toLowerCase().trim()] = p.image;
  return map;
}, {});

// Har category ke liye multiple images, taaki same category ke items bhi alag dikhein
export const CATEGORY_IMAGE_POOL = {
  footwear: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=560&fit=crop&auto=format',
  ],
  men: [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=560&fit=crop&auto=format',
  ],
  women: [
    'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=560&fit=crop&auto=format',
  ],
  kids: [
    'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?w=400&h=560&fit=crop&auto=format',
  ],
  mobile: [
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=560&fit=crop&auto=format',
  ],
  electronics: [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=560&fit=crop&auto=format',
  ],
  beauty: [
    'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=400&h=560&fit=crop&auto=format',
  ],
  home: [
    'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=560&fit=crop&auto=format',
  ],
  default: [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=560&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=560&fit=crop&auto=format',
  ],
};

// Final image resolver — ProductCard / Cart / Orders sab isi ko use karte hain
export const resolveProductImage = (product) => {
  if (!product) return CATEGORY_IMAGE_POOL.default[0];
  if (product.image) return product.image;

  const byName = IMAGE_BY_NAME[product.name?.toLowerCase().trim()];
  if (byName) return byName;

  const pool = CATEGORY_IMAGE_POOL[product.category?.toLowerCase()] || CATEGORY_IMAGE_POOL.default;
  const idx = Math.abs(Number(product.id) || product.name?.length || 0) % pool.length;
  return pool[idx];
};

export const seedAllProducts = async () => {
  for (const p of SEED_PRODUCTS) {
    try {
      await addProduct(p);
    } catch (err) {
      console.error("[v0] Seed failed:", p.name, err);
    }
  }
};