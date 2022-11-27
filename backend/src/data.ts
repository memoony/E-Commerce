export const sample_products: any[] = [
  {
    id: "1",
    name: "Logitech G Pro X Superlight",
    price: 3000,
    description:
      "63 gramdan hafif. Gelişmiş düşük gecikmeli LIGHTSPEED kablosuz. HERO 25K sensör ile mikron altı hassasiyet. Şimdiye kadarki en hafif ve en hızlı PRO mouse’umuzla tüm engelleri kaldırın.",
    categories: ["mouse"],
    favorite: true,
    stars: 4.8,
    imageUrl: "assets/images/product-images/product-1.png",
  },
  {
    id: "2",
    name: "MSI GeForce RTX 3060 Ti",
    price: 15000,
    description:
      "NVIDIA`nın 2. nesil RTX mimarisi Ampere`den güç alan GeForce RTX™ 3060 Ti ve RTX 3060 en yeni oyunları sorunsuz oynamanızı sağlar.",
    categories: ["ekran-karti"],
    favorite: false,
    stars: 5,
    imageUrl: "assets/images/product-images/product-2.png",
  },
  {
    id: "3",
    name: "CORSAIR Void RGB Elite",
    price: 2500,
    description:
      "20Hz-30.000Hz genişletilmiş frekans aralığına sahip birinci sınıf, özel olarak ayarlanmış 50 mm yüksek yoğunluklu neodim ses sürücüleri sayesinde en hafif basamaktan en şiddetli patlamaya kadar 7.1 surround sesin içindeki her şeyi dinleyin.",
    categories: ["kulaklik"],
    favorite: false,
    stars: 4,
    imageUrl: "assets/images/product-images/product-3.png",
  },
  {
    id: "4",
    name: "ALPHA-PLUS Hazır Sistem",
    price: 11973,
    description:
      "ALPHA-PLUS/Intel Core i3 12100F/GIGABYTE GeForce RTX 3050 EAGLE GDDR6 8GB/16GB DDR4/500GB NVMe M.2 SSD/Geforce RTX RayTracing PC.",
    categories: ["hazir-sistem"],
    favorite: false,
    stars: 5,
    imageUrl: "assets/images/product-images/product-4.png",
  },
  {
    id: "5",
    name: "Aryond A27 V1.1 240 Hz Gaming Monitör",
    price: 4300,
    description:
      "Kolay ve rahat bir takip imkanı sunan kavisli ekran ile yüksek tempo gerektiren oyunlarda dahi göz konforunuzdan taviz vermeyin.",
    categories: ["monitor"],
    favorite: true,
    stars: 5,
    imageUrl: "assets/images/product-images/product-5.png",
  },
  {
    id: "6",
    name: "GIGABYTE AORUS",
    price: 39999,
    description:
      "GIGABYTE AORUS 15 XE4 i7-12700H 16GB DDR4 RTX 3070Ti GDDR6 8GB 1TB SSD 15.6 inç QHD 165Hz W11 Home Notebook.",
    categories: ["laptop"],
    favorite: true,
    stars: 5,
    imageUrl: "assets/images/product-images/product-6.png",
  },
];

export const sample_categories: any[] = [
  {
    name: "Tümü",
    url: "tumu",
    count: 6,
  },
  {
    name: "Mouse",
    url: "mouse",
    count: 1,
  },
  {
    name: "Ekran Kartı",
    url: "ekran-karti",
    count: 1,
  },
  {
    name: "Kulaklık",
    url: "kulaklik",
    count: 1,
  },
  {
    name: "Hazır Sistem",
    url: "hazir-sistem",
    count: 1,
  },
  {
    name: "Monitör",
    url: "monitor",
    count: 1,
  },
  {
    name: "Laptop",
    url: "laptop",
    count: 1,
  },
];

export const sample_users: any[] = [
  {
    name: "Mehmet Gürsoy",
    email: "admin@gmail.com",
    password: "12345",
    address: "Turkey",
    isAdmin: true,
  },
  {
    name: "Patika",
    email: "patika@gmail.com",
    password: "12345",
    address: "Turkey",
    isAdmin: false,
  },
];
