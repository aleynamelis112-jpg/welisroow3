
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
  features: string[];
}

export const ALL_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Ceviz Kütük Yemek Masası",
    description: "Tek parça devasa ceviz kütüğünden, doğal formuna sadık kalınarak üretilmiş premium yemek masası.",
    price: "0 TL",
    category: "Mobilya",
    imageUrl: "/images/urun (1).jpg",
    features: ["%100 Doğal Ceviz", "El İşçiliği", "Endüstriyel Metal Ayak"]
  },
  {
    id: "2",
    name: "Zeytin Ağacı Dekoratif Sehpa",
    description: "Yüzyıllık zeytin ağaçlarının eşsiz dokusunu salonunuza taşıyan butik orta sehpa.",
    price: "0 TL",
    category: "Mobilya",
    imageUrl: "/images/urun (2).jpg",
    features: ["Benzersiz Damar Yapısı", "Doğal Yağ Cilası", "Modern Tasarım"]
  },
  {
    id: "3",
    name: "Doğal Kenar Kitaplık",
    description: "Kenar hatları korunmuş masif meşe raflardan oluşan, minimalist ve şık kitaplık tasarımı.",
    price: "0 TL",
    category: "Mobilya",
    imageUrl: "/images/urun (3).jpg",
    features: ["Masif Meşe", "Gizli Bağlantı Noktaları", "Dayanıklı Yapı"]
  },
  {
    id: "4",
    name: "Epoksi Tasarım Ofis Masası",
    description: "Şeffaf epoksi ile birleştirilmiş doğal ahşap dokusu, çalışma alanınıza ilham verecek.",
    price: "0 TL",
    category: "Mobilya",
    imageUrl: "/images/urun (4).jpg",
    features: ["Kristal Epoksi", "Ergonomik Tasarım", "Leke Tutmaz Yüzey"]
  },
  {
    id: "5",
    name: "Kök Ahşap Aydınlatma",
    description: "Toprak altından çıkarılan ağaç köklerinin sanatsal bir aydınlatma objesine dönüşümü.",
    price: "0 TL",
    category: "Dekorasyon",
    imageUrl: "/images/urun (5).jpg",
    features: ["Doğal Form", "LED Işık Sistemi", "Sertifikalı Ahşap"]
  },
  {
    id: "6",
    name: "Rustik Duvar Rafı Seti",
    description: "Eskitme dokulu, kordon iplerle desteklenmiş rustik tarzda 3'lü raf seti.",
    price: "0 TL",
    category: "Dekorasyon",
    imageUrl: "/images/urun (6).jpg",
    features: ["Kolay Montaj", "Rustik Eskitme", "Geri Dönüştürülmüş Ahşap"]
  },
  {
    id: "7",
    name: "Meşe Ağacı Banyo Tezgâhı",
    description: "Suya ve neme dayanıklı özel koruyucu uygulanmış, banyonuza doğallık katan tezgâh.",
    price: "0 TL",
    category: "İç Mekan Uygulamaları",
    imageUrl: "/images/urun (7).jpg",
    features: ["Suya Dayanıklı", "Antibakteriyel Yüzey", "Özel Tasarım"]
  },
  {
    id: "8",
    name: "El Yapımı Ahşap Meyvelik",
    description: "Tek parça gürgen ağacından oyularak hazırlanan, mutfakların vazgeçilmezi dekoratif kase.",
    price: "0 TL",
    category: "Dekorasyon",
    imageUrl: "/images/urun (8).jpg",
    features: ["Gıda Dostu Cila", "Tek Parça Oyma", "Hafif ve Estetik"]
  },
  {
    id: "9",
    name: "Kestane Ağacı Bahçe Masası",
    description: "Dış mekan koşullarına en dayanıklı ağaçlardan olan kestaneden üretilmiş geniş bahçe masası.",
    price: "0 TL",
    category: "Dış Mekan Uygulamaları",
    imageUrl: "/images/urun (9).jpg",
    features: ["Dış Mekan Dayanımı", "Yüksek Yoğunluklu Ahşap", "Geniş Oturum"]
  },
  {
    id: "10",
    name: "Ahşap Yatak Başlığı",
    description: "Yatak odanıza sıcaklık katacak, ham dokulu ve özel aydınlatmalı kütük yatak başlığı.",
    price: "0 TL",
    category: "Mobilya",
    imageUrl: "/images/urun (10).jpg",
    features: ["Ambiance Aydınlatma", "Kütük Form", "Kişiye Özel Ölçü"]
  },
  {
    id: "11",
    name: "Dekoratif Odunluk",
    description: "Şömine yanına estetik bir dokunuş katan, metal ve ahşabın mükemmel uyumu.",
    price: "0 TL",
    category: "Dekorasyon",
    imageUrl: "/images/urun (11).jpg",
    features: ["Metal İskelet", "Meşe Taban", "Minimalist Stil"]
  },
  {
    id: "12",
    name: "Ahşap Ayaklı Lambader",
    description: "Doğal dallardan tasarlanmış ayak yapısı ve keten başlığı ile huzurlu ışıklandırma.",
    price: "0 TL",
    category: "Dekorasyon",
    imageUrl: "/images/urun (12).jpg",
    features: ["Keten Şapka", "Doğal Dal Ayaklar", "Sıcak Işık"]
  },
  {
    id: "13",
    name: "Doğal Dokulu Tv Ünitesi",
    description: "Modern hatlara sahip, masif panel ve kütük detaylı fonksiyonel tv ünitesi.",
    price: "0 TL",
    category: "Mobilya",
    imageUrl: "/images/urun (13).jpg",
    features: ["Geniş Saklama Alanı", "Kablolama Çözümleri", "Soft-Close Kapaklar"]
  },
  {
    id: "14",
    name: "Masif Ahşap Konsol",
    description: "Antre veya yemek odası için tasarlanmış, el oyması detaylara sahip şık konsol.",
    price: "0 TL",
    category: "Mobilya",
    imageUrl: "/images/urun (14).jpg",
    features: ["Zanaatkar İşi Oyma", "Sert Ahşap Gövde", "Zarif Ayak Tasarımı"]
  }
];
