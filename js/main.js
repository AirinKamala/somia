//================================== MAIN JS ==================================
//============================= Berisi dummy data =============================
const inven = {
  articles: [
    {
    id: "diy1",
    title: "Eco-Enzyme Pembersih Serbaguna dari Kulit Buah",
    category: "Organik",
    excerpt: "Manfaatkan sisa kulit buah segar menjadi cairan pembersih alami yang ramah lingkungan.",
    thumbnail: "https://picsum.photos/400/300?random=11",
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
    thumbnail: "https://picsum.photos/400/300?random=12",
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
    thumbnail: "https://picsum.photos/400/300?random=13",
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
    thumbnail: "https://picsum.photos/400/300?random=14",
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
    title: "Pembatas Buku Elegan dari Kemasan Dupa",
    category: "Kerajinan",
    excerpt: "Manfaatkan corak dan motif indah pada kemasan kardus dupa menjadi pembatas buku yang artistik.",
    thumbnail: "https://picsum.photos/400/300?random=15",
    materials: [
      "Kardus kemasan dupa bekas bercorak bagus",
      "Gunting atau cutter",
      "Pembolong kertas (hole punch)",
      "Pita kecil bekas atau benang rami"
    ],
    steps: [
      "Pilih bagian dari kemasan dupa yang memiliki corak atau gambar paling menarik.",
      "Potong kardus tersebut menjadi bentuk persegi panjang memanjang (sekitar 5 x 15 cm).",
      "Gunting membulat keempat sudut kardus agar tidak tajam.",
      "Beri lubang di bagian tengah atas menggunakan pembolong kertas, lalu ikatkan pita atau benang rami."
    ],
    date: "2026-08-25"
  },
  {
    id: "diy6",
    title: "Seed Paper (Kertas Benih) dari Koran Bekas",
    category: "Berkebun",
    excerpt: "Olah tumpukan kertas buram dan koran menjadi kertas baru yang bisa ditanam dan tumbuh menjadi bunga.",
    thumbnail: "https://picsum.photos/400/300?random=16",
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
    title: "Produce Bag (Tas Jaring) Tanpa Jahit dari Kaos",
    category: "Daur Ulang",
    excerpt: "Ubah kaos katun lama yang sudah melar menjadi tas belanja kepasar.",
    thumbnail: "https://picsum.photos/400/300?random=17",
    materials: [
      "Kaos berbahan katun bekas",
      "Gunting kain tajam",
      "Penggaris"
    ],
    steps: [
      "Potong bagian leher dan kedua lengan kaos (membentuk bukaan tas dan gagang).",
      "Gunting bagian bawah kaos (hem) secara vertikal membentuk rumbai-rumbai sepanjang 10 cm.",
      "Ikat kuat setiap pasangan rumbai atas dan bawah sebanyak dua kali untuk menutup dasar tas.",
      "Buat sayatan-sayatan kecil memanjang di seluruh badan kaos secara selang-seling agar tas bisa meregang."
    ],
    date: "2026-09-01"
  },
  {
    id: "diy8",
    title: "Tempat Lilin Aromaterapi dari Toples Kaca",
    category: "Dekorasi",
    excerpt: "Toples bekas selai atau saus bisa disulap menjadi tempat lilin estetik dan aman untuk menghias ruangan.",
    thumbnail: "https://picsum.photos/400/300?random=18",
    materials: [
      "Toples kaca bekas",
      "Tali rami (burlap string)",
      "Lem tembak",
      "Biji kopi, pasir laut, atau kerikil kecil",
      "Lilin kecil (tealight candle)"
    ],
    steps: [
      "Cuci bersih toples kaca dan rendam air hangat untuk menghilangkan sisa lem label kertasnya.",
      "Lilitkan tali rami di bagian leher toples beberapa kali dan rekatkan ujungnya menggunakan lem tembak.",
      "Isi seperempat bagian bawah toples dengan biji kopi atau pasir laut.",
      "Letakkan lilin tealight tepat di tengah-tengah bantalan biji kopi atau pasir."
    ],
    date: "2026-09-03"
  },
  {
    id: "diy9",
    title: "Kompos Minim Bau Menggunakan Pot Bekas",
    category: "Organik",
    excerpt: "Tidak punya lahan luas? Kamu tetap bisa mengompos sisa makanan menggunakan pot tanaman yang tak terpakai.",
    thumbnail: "https://picsum.photos/400/300?random=19",
    materials: [
      "Pot tanaman bekas yang berlubang di bawahnya",
      "Sisa organik dapur (kulit buah, sayur, ampas kopi)",
      "Sampah coklat (daun kering basah atau kardus cacah)",
      "Tanah subur",
      "Piringan penutup pot"
    ],
    steps: [
      "Masukkan lapisan tanah setebal 5 cm di dasar pot untuk menyerap cairan berlebih.",
      "Tambahkan lapisan sampah coklat (kardus/daun kering), lalu timpa dengan lapisan sisa organik dapur.",
      "Tutup rapat bagian atas dengan lapisan tanah lagi agar tidak memancing lalat buah atau bau.",
      "Tutup pot dengan piringan, letakkan di tempat teduh, dan biarkan terurai selama kurang lebih 1 bulan."
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
