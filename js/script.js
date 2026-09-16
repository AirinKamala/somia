//================================== SCRIPT JS ==================================
//=============================== Berisi function ===============================
const a = {
  toggleModal(ins) { //toggle modal
    ins.classList.toggle("hidden");
    ins.classList.toggle("flex");
  },
  signout() { //sign out
    localStorage.removeItem("user-profile");
    window.open("/", "_self");
  },
  formatedDate(date) { //formating tanggal supaya bisa dibaca
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

document.addEventListener("DOMContentLoaded", () => { //inisialisasi AOS
  AOS.init({
    disable: "mobile",
    once: true,
    duration: 700,
    disable: "phone",
    offset: 60,
  });
});

function smoothScroll(ease = 0.09) { //function smoothScroll
  let current = window.scrollY,
    target = window.scrollY,
    running = false;

  const maxScroll = () =>
    document.documentElement.scrollHeight - window.innerHeight;

  function loop() {
    current += (target - current) * ease;
    window.scrollTo(0, current);

    if (Math.abs(target - current) > 0.5) {
      requestAnimationFrame(loop);
    } else {
      running = false;
    }
  }

  window.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      target = Math.max(0, Math.min(maxScroll(), target + e.deltaY));
      if (!running) {
        running = true;
        requestAnimationFrame(loop);
      }
    },
    { passive: false },
  );

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetEl = document.querySelector(link.getAttribute("href"));
      if (!targetEl) return;
      e.preventDefault();
      target = Math.max(
        0,
        Math.min(
          maxScroll(),
          targetEl.getBoundingClientRect().top + window.scrollY,
        ),
      );
      if (!running) {
        running = true;
        requestAnimationFrame(loop);
      }
    });
  });
}

smoothScroll(0.05);
