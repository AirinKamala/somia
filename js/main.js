//================================== MAIN JS ==================================
//============================= Berisi dummy data =============================
const inven = {
  articles: [
    {
    id: "diy1",
    title: "Eco-Enzyme Pembersih Serbaguna dari Kulit Buah",
    category: "Organik",
    excerpt: "Manfaatkan sisa kulit buah segar menjadi cairan pembersih alami yang ramah lingkungan.",
    thumbnail: "/assets/artikel/diy1.webp",
    source: "sustaination.id",
    materials: [
      "300g kulit buah segar (jeruk, apel, atau nanas)",
      "100g gula merah atau molase",
      "1 liter air bersih",
      "Botol plastik bekas ukuran 1.5L (jangan gunakan kaca)"
    ],
    steps: [
      "Campurkan air dan gula merah ke dalam botol plastik hingga larut sepenuhnya.",
      "Masukkan potongan kulit buah ke dalam botol, pastikan menyisakan ruang kosong untuk gas.",
      "Tutup rapat botol dan diamkan. ",
      "Selama dua minggu pertama, buka tutup botol perlahan setiap hari untuk membuang gas.",
      "Simpan di tempat teduh selama 3 bulan sebelum disaring dan digunakan sebagai pembersih."
    ],
    date: "2026-08-15"
  },
  {//cari gambar spesifik
    id: "diy2",
    title: "Pot Tanaman Self-Watering dari Botol Plastik",
    category: "Berkebun",
    excerpt: "Buat sistem penyiraman otomatis sederhana untuk tanaman hias menggunakan botol plastik bekas air mineral.",
    thumbnail: "/assets/artikel/diy2.webp",
    source: "Pikiran rakyat medan",
    materials: [
      "Botol plastik bekas 1.5L",
      "Gunting atau cutter tajam",
      "Kain flanel bekas atau tali katun tebal",
      "Media tanam (tanah) dan bibit tanaman"
    ],
    steps: [
      "Potong botol plastik menjadi dua bagian",
      "Lubangi tutup botol, lalu masukkan kain flanel memanjang sebagai sumbu kapiler.",
      "Isi bagian bawah botol dengan air secukupnya (jangan sampai menyentuh tutup botol nanti).",
      "Pasang bagian atas botol dalam posisi terbalik ke bagian bawah",
      "Isi dengan tanah, lalu tanam bibit."
    ],
    date: "2026-08-18"
  },
  {
    id: "diy3",
    title: "Organizer Meja Estetik dari Kardus Bekas",
    category: "Kerajinan",
    excerpt: "Ubah tumpukan kardus bekas menjadi laci atau kotak penyimpanan estetik untuk alat tulis di mejamu.",
    thumbnail: "/assets/artikel/diy3.webp",
    source: "pinterest",
    materials: [
      "Kardus bekas pengiriman yang tebal",
      "Lem tembak",
      "Cutter tajam dan penggaris besi",
      "Kertas kado sisa atau kain bekas untuk pelapis luar"
    ],
    steps: [
      "Ukur dan potong kardus sesuai pola kotak penyimpanan yang diinginkan menggunakan cutter.",
      "Rakit potongan-potongan kardus menggunakan lem tembak hingga membentuk kotak yang kokoh.",
      "Tambahkan sekat-sekat kecil di bagian dalam jika diperlukan.",
      "Lapisi seluruh permukaan luar kardus dengan kertas kado atau kain sisa menggunakan lem agar terlihat rapi."
    ],
    date: "2026-08-20"
  },
  {
    id: "diy4",
    title: "Sabun Cuci Serbaguna dari Minyak Jelantah",
    category: "Daur Ulang",
    excerpt: "Jangan buang minyak bekas menggoreng! Olah menjadi sabun batang yang ampuh membersihkan noda kain.",
    thumbnail: "/assets/artikel/diy4.webp",
    source: "greeners.co",
    materials: [
      "500ml minyak jelantah (sudah disaring jernih)",
      "80g Soda Api (NaOH)",
      "170ml air suling atau air pandan",
      "Cetakan silikon atau wadah plastik tebal",
      "Masker dan sarung tangan karet (wajib)"
    ],
    steps: [
      "Gunakan masker dan sarung tangan, lalu tuang NaOH ke dalam air secara perlahan di ruang terbuka (jangan terbalik).",
      "Diamkan larutan NaOH hingga suhunya turun menyamai suhu ruang.",
      "Tuang larutan perlahan ke dalam minyak jelantah, aduk menggunakan spatula hingga mengental (fase trace).",
      "Tuang ke cetakan, diamkan 24 jam, potong, lalu angin-anginkan (curing) selama 3-4 minggu sebelum dipakai."
    ],
    date: "2026-08-22"
  },
  {
    id: "diy5",
    title: "Pembatas Buku Elegan dari Kain Perca",
    category: "Kerajinan",
    excerpt: "Manfaatkan kain perca menjadi pembatas buku yang lucu.",
    thumbnail: "/assets/artikel/diy5.webp",
    source: "NewBytes",
    materials: [
      "Kain perca",
      "Gunting atau cutter",
      "Pembolong kertas (hole punch)",
      "Pita kecil bekas atau benang wol",
      "Benang dan jarum jahit"
    ],
    steps: [
      "Pilih bagian kain perca yang memiliki corak paling menarik.",
      "Potong kardus tersebut menjadi bentuk persegi panjang memanjang sekitar 5 x 15 cm.",
      "Gunting membulat keempat sudut kardus agar tidak tajam.",
      "Beri lubang di bagian tengah atas menggunakan pembolong kertas, lalu ikatkan pita atau benang rami.",
      "Tutup kardus dengan kain perca, lalu jahit."
    ],
    date: "2026-08-25"
  },
  {
    id: "diy6",
    title: "Seed Paper (Kertas Benih) dari Koran Bekas",
    category: "Berkebun",
    excerpt: "Olah tumpukan kertas buram dan koran menjadi kertas baru yang bisa ditanam dan tumbuh menjadi bunga.",
    thumbnail: "/assets/artikel/diy6.webp",
    source: "castpaperart",
    materials: [
      "Kertas atau koran bekas (hindari kertas glossy/licin)",
      "Air hangat",
      "Blender",
      "Benih ukuran kecil (seperti selasih, bayam, atau bunga kertas)",
      "Screen sablon atau saringan kawat datar"
    ],
    steps: [
      "Sobek kertas menjadi potongan kecil dan rendam dalam air hangat selama minimal 2 jam.",
      "Blender campuran kertas dan sedikit air hingga menjadi bubur kertas (pulp) yang halus.",
      "Tuang pulp ke dalam baskom berisi air lebar, taburkan benih, dan aduk perlahan agar menyebar rata.",
      "Serok pulp menggunakan screen sablon, ratakan tipis, dan jemur di bawah sinar matahari hingga kering."
    ],
    date: "2026-08-28"
  },
  {
    id: "diy7",
    title: "Tempat Lilin Aromaterapi dari Toples Kaca",
    category: "Dekorasi",
    excerpt: "Toples bekas selai atau saus bisa disulap menjadi tempat lilin estetik dan aman untuk menghias ruangan.",
    thumbnail: "/assets/artikel/diy7.webp",
    source: "etsy",
    materials: [
      "Toples kaca bekas",
      "Tali rami atau gelang bekas",
      "Lem tembak",
      "Kerang atau kerikil kecil dan pasir pantai",
      "Lilin kecil"
    ],
    steps: [
      "Cuci bersih toples kaca dan rendam air hangat untuk menghilangkan sisa lem label kertasnya.",
      "Lilitkan tali rami atau gelang bekas dan rekatkan ujungnya menggunakan lem tembak.",
      "Isi seperempat bagian bawah toples dengan kerang atau kerikil kecil dan pasir pantai.",
      "Letakkan lilin kecil tepat di tengah-tengah kerang atau pasir."
    ],
    date: "2026-09-03"
  },
  
  {
  id: "diy8",
  title: "Komposter Mini Praktis Menggunakan Galon Bekas",
  category: "Organik",
  excerpt: "Manfaatkan galon air mineral bekas untuk membuat komposter mini rumahan yang bersih dan tidak memakan tempat.",
  thumbnail: "/assets/artikel/diy8.webp",
  materials: [
    "Galon air mineral bekas (ukuran 19 liter)",
    "Cutter atau pisau tajam",
    "Sisa organik dapur (kulit buah, sayur, ampas kopi)",
    "Sampah coklat (daun kering atau kardus cacah)",
    "Tanah subur secukupnya"
  ],
  steps: [
    "Potong bagian atas galon menggunakan cutter untuk memudahkan memasukkan sampah, dan buat beberapa lubang kecil di bagian bawah galon untuk sirkulasi udara serta tirisan air.",
    "Masukkan lapisan tanah dan sampah coklat setebal 5 cm di dasar galon sebagai fondasi awal.",
    "Tambahkan lapisan sisa organik dapur, lalu timpa kembali secara bergantian dengan sampah coklat dan sedikit tanah untuk menghindari bau.",
    "Tutup galon, letakkan di tempat yang teduh, dan biarkan proses penguraian berjalan selama 4 hingga 6 minggu hingga kompos matang."
  ],
  date: "2026-09-06"
}
  ],

  colors: {
    plastik: "red",
    kertas: "amber",
    organik: "emerald",
    kaca: "teal"
  },

  wasteBanks : [ //jangan dirubah
    {
      location: [-8.612883874536013, 115.21297598465651],
      name: "Bank Sampah Sarana Gathi",
      slug: "bank-sampah-sarana-gathi" ,
      address: "Jl. Ahmad Yani Utara No.453, Peguyangan, Kec. Denpasar Utara, Kota Denpasar, Bali",
      status: "Menerima",
      schedule: "Senin-Jumat, 09:00 - 18:00 WITA",
      accepted:["plastik", "kertas", "kaca"],
      contact: {
        name: 'Ni Wayan Sari',
        phone: '6212345678'
      }
    },
    {
      location: [-8.557040588872043, 115.35036238501132],
      name: "TPA Temesi",
      slug: 'tpa-temesi',
      address: "Temesi, Gianyar, Kab. Gianyar, Bali",
      status: "Menerima",
      schedule: "Senin-Jumat, 09:00 - 17:00 WITA",
      accepted:["plastik", "kaca"],
      contact: {
        name: 'I Made Galuh',
        phone: '6212345678'
      }
    },
    {
      location: [-8.529810098481516, 115.09405288155969],
      name: "TPA Mandung",
      slug: 'tpa-mandung',
      address: "Jl. Manik Galih, Sembung Gede, Kec. Kerambitan, Kabupaten Tabanan, Bali",
      status: "Hampir penuh",
      schedule: "Senin-Jumat, 08:00 - 18:00 WITA",
      accepted:["plastik", "kertas"],
      contact: {
        name: 'I Gede Agus',
        phone: '6212345678'
      }
    },
    {
      location: [-8.719004136290913, 115.2205865680685],
      name: "TPA Suwung",
      slug: 'tpa-suwung',
      address: "Jl. TPA Suwung No.200, Sesetan, Denpasar Selatan, Kota Denpasar, Bali",
      status: "Penuh",
      schedule: "Senin-Jumat, 09:00 - 17:00 WITA",
      accepted:["plastik", "kertas", "kaca"],
      contact: {
        name: 'Putu Merta',
        phone: '6212345678'
      }
    },
    
  ],
  
  bookmark: ['diy1', 'diy2', 'diy4'],

  user: {
    name: 'Jane Doe',
    address: 'Br. Kaja',
    email: 'janedoe@email.test',
    password: '12345678',
    totalWaste: 9.2,
    dayStreak: 10,
    badge: 'Sang Pemilah',
    point: 400
  },

  voucher : [
    {
        id: "vch-01",
        title: "Diskon Warung Tegal Rp15.000",
        category: "UMKM",
        point: 200,
        image: "fa-regular fa-home",
        bg: "bg-(--turmeric)"
    },
    {
        id: "vch-02",
        title: "Pulsa Isi Ulang Telkomsel Rp10.000",
        category: "Pulsa",
        point: 150,
        image: "fa-solid fa-mobile-button",
        bg: "bg-(--clay)"
    },
    {
        id: "vch-03",
        title: "Voucher Belanja Indomaret Rp50.000",
        category: "Voucher",
        point: 400,
        image: "fa-solid fa-ticket",
        bg: "bg-(--moss)"
    },
    {
        id: "vch-04",
        title: "Token Listrik PLN Rp20.000",
        category: "Lainnya",
        point: 250,
        image: "fa-solid fa-gift",
        bg: "bg-(--stone)"
    },
    {
        id: "vch-05",
        title: "Es Cendol Durian Gratis",
        category: "UMKM",
        point: 50,
        image: "fa-regular fa-home",
        bg: "bg-(--turmeric)"
    }
],

  // containerCard: document.getElementById("container-card"),
  formmatedDate(date) {
    if (!date) return;
    const dates = date.split("-");
    const month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    let bulan = month[Number(dates[1]) - 1];

    return `${dates[2]} ${bulan} ${dates[0]}`;
  },

};
