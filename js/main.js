export const useInventory =(()=> {
  const articles= [
    {
      id: "diy1",
      title: "Janur bekas jadi hiasan dinding",
      category: "Upacara",
      excerpt:
        "Ubah janur sisa upacara jadi hiasan dinding anyaman yang tahan lama.",
      thumbnail: "assets/img/illustrations/diy1.svg",
      materials: [
        "Janur bekas 5 lembar",
        "Benang katun",
        "Gunting",
        "Bingkai kayu kecil",
      ],
      steps: [
        "Keringkan janur di tempat teduh selama 2 hari.",
        "Belah janur menjadi lembaran tipis memanjang.",
        "Anyam lembaran membentuk pola sederhana.",
        "Rekatkan anyaman ke bingkai kayu.",
      ],
      date: "2026-08-10",
    },
    {
      id: "diy2",
      title: "Kompos dari sisa dapur, 3 langkah",
      category: "Rumah tangga",
      excerpt:
        "Kompos sederhana pakai ember bekas, tanpa bau, cocok untuk rumah kecil.",
      thumbnail: "assets/img/illustrations/diy2.svg",
      materials: [
        "Ember bekas dengan tutup",
        "Sisa sayur dan buah",
        "Tanah",
        "Sekam padi",
      ],
      steps: [
        "Lubangi bagian bawah ember untuk sirkulasi udara.",
        "Susun lapisan sekam, sisa dapur, dan tanah bergantian.",
        "Aduk setiap 3 hari sekali selama 3 minggu.",
      ],
      date: "2026-08-08",
    },
    {
      id: "diy3",
      title: "Pot dari botol plastik bekas",
      category: "Rumah tangga",
      excerpt: "Botol plastik 1.5L jadi pot gantung untuk tanaman hias kecil.",
      thumbnail: "assets/img/illustrations/diy3.svg",
      materials: [
        "Botol plastik 1.5L",
        "Tali rami",
        "Cutter",
        "Tanah dan bibit",
      ],
      steps: [
        "Potong botol secara horizontal, sisakan bagian bawah.",
        "Lubangi dasar botol untuk drainase.",
        "Ikat tali rami di kedua sisi sebagai gantungan.",
        "Isi dengan tanah dan tanam bibit.",
      ],
      date: "2026-08-05",
    },
    {
      id: "diy4",
      title: "Canang plastik bisa didaur ulang jadi apa?",
      category: "Upacara",
      excerpt:
        "Alas plastik canang yang sudah tidak terpakai bisa dianyam jadi tas kecil.",
      thumbnail: "assets/img/illustrations/diy4.svg",
      materials: [
        "Alas plastik canang bekas",
        "Gunting",
        "Stapler kecil",
        "Kain pelapis",
      ],
      steps: [
        "Cuci dan keringkan alas plastik.",
        "Potong memanjang menjadi pita-pita kecil.",
        "Anyam pita menjadi lembaran.",
        "Jahit atau staples menjadi bentuk tas kecil.",
      ],
      date: "2026-08-02",
    },
    {
      id: "diy5",
      title: "Ecobrick: botol jadi bata ringan",
      category: "Rumah tangga",
      excerpt:
        "Padatkan plastik bersih ke dalam botol untuk jadi bahan bangunan ringan.",
      thumbnail: "assets/img/illustrations/diy5.svg",
      materials: [
        "Botol plastik bersih dan kering",
        "Sampah plastik lunak",
        "Tongkat kayu",
      ],
      steps: [
        "Pastikan plastik dalam kondisi kering dan bersih.",
        "Padatkan plastik ke dalam botol menggunakan tongkat.",
        "Ulangi hingga botol benar-benar padat dan keras.",
        "Timbang, minimal 0.33 kg per botol 600ml.",
      ],
      date: "2026-07-28",
    },
    {
      id: "diy6",
      title: "Sabun cuci dari minyak jelantah",
      category: "Rumah tangga",
      excerpt:
        "Minyak bekas menggoreng diubah jadi sabun cuci piring sederhana.",
      thumbnail: "assets/img/illustrations/diy6.svg",
      materials: [
        "Minyak jelantah 500ml",
        "Soda api",
        "Air",
        "Pewangi secukupnya",
      ],
      steps: [
        "Saring minyak jelantah hingga bersih dari kotoran.",
        "Larutkan soda api ke dalam air secara perlahan.",
        "Campurkan larutan ke minyak sambil diaduk hingga mengental.",
        "Tuang ke cetakan dan diamkan 2 hari.",
      ],
      date: "2026-07-22",
    },
    {
      id: "diy7",
      title: "Ogoh-ogoh mini dari kardus bekas",
      category: "Upacara",
      excerpt:
        "Rayakan tradisi lokal dengan miniatur ogoh-ogoh dari kardus daur ulang.",
      thumbnail: "assets/img/illustrations/diy7.svg",
      materials: [
        "Kardus bekas",
        "Lem tembak",
        "Cat akrilik sisa",
        "Bambu kecil",
      ],
      steps: [
        "Bentuk kerangka dari bambu kecil.",
        "Lapisi kerangka dengan kardus yang dibentuk.",
        "Rekatkan seluruh bagian dengan lem tembak.",
        "Warnai menggunakan cat akrilik sisa.",
      ],
      date: "2026-07-18",
    },
    {
      id: "diy8",
      title: "Tempat pensil dari kaleng bekas",
      category: "Kerajinan",
      excerpt:
        "Kaleng susu atau kopi bekas jadi tempat pensil yang rapi di meja belajar.",
      thumbnail: "assets/img/illustrations/diy8.svg",
      materials: ["Kaleng bekas", "Kain perca", "Lem kain", "Pita"],
      steps: [
        "Bersihkan kaleng dan pastikan tidak ada bagian tajam.",
        "Ukur dan potong kain perca sesuai tinggi kaleng.",
        "Rekatkan kain mengelilingi kaleng dengan lem.",
        "Hias dengan pita di bagian atas.",
      ],
      date: "2026-07-14",
    },
    {
      id: "diy9",
      title: "Tas belanja dari kaos bekas, tanpa jahit",
      category: "Kerajinan",
      excerpt:
        "Kaos lama yang sudah tidak dipakai diubah jadi tote bag tanpa perlu menjahit.",
      thumbnail: "assets/img/illustrations/diy9.svg",
      materials: ["Kaos bekas", "Gunting", "Penggaris"],
      steps: [
        "Potong bagian lengan dan leher kaos.",
        "Balik kaos ke dalam, gunting bagian bawah menjadi rumbai.",
        "Ikat setiap dua rumbai berdekatan hingga rapat.",
        "Balik kembali kaos, tas siap digunakan.",
      ],
      date: "2026-07-10",
    },
    {
      id: "diy10",
      title: "Pupuk cair dari kulit buah",
      category: "Rumah tangga",
      excerpt:
        "Kulit buah sisa dapur difermentasi jadi pupuk cair untuk tanaman rumah.",
      thumbnail: "assets/img/illustrations/diy10.svg",
      materials: [
        "Kulit buah 1kg",
        "Gula merah 100g",
        "Air 3 liter",
        "Botol besar",
      ],
      steps: [
        "Potong kecil kulit buah dan masukkan ke botol.",
        "Larutkan gula merah dengan sedikit air, tuang ke botol.",
        "Tambahkan sisa air hingga botol terisi 3/4.",
        "Fermentasi selama 2 minggu, buka tutup setiap hari.",
      ],
      date: "2026-07-05",
    },
  ]

  const containerCard = document.getElementById("container-card");

  const renderCards=() =>{
       if (!containerCard) return; 
    containerCard.innerHTML = articles
      .map(
        (s) => `
            <div class="card" data-key="${s.id}">
                    <img src="https://picsum.photos/200/200?random=1" >
                    <h3 class="md:text-md">
                        ${s.title}
                    </h3>
                </div>
            `,
      )
      .join("");
  };

 return {
    articles,
    containerCard,
    renderCards
  };
})();

