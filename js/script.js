//================================== SCRIPT JS ==================================
//=============================== Berisi function ===============================
const a = {
  setData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  getData(key) {
    JSON.parse(localStorage.getItem(key));
  },
  isOpen: false,
  toggleModal(ins) {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      ins.classList.remove("hidden");
    } else {
      ins.classList.add("hidden");
    }
  }
  ,
  signout() {
    localStorage.removeItem("user-profile");
    window.open("/", "_self");
  },
};
