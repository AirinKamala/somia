//================================== SCRIPT JS ==================================
//=============================== Berisi function ===============================
const a = {
  isOpen: false,
  toggleModal(ins) {
    ins.classList.toggle("hidden");
  }
  ,
  signout() {
    localStorage.removeItem("user-profile");
    window.open("/", "_self");
  },
};
