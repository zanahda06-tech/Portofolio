document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const contactForm = document.getElementById("contactForm");
  const messageBox = document.getElementById("messageBox");

  // 1. Logic untuk menandai link navigasi yang aktif
  function setActiveLink() {
    // Mendapatkan nama file saat ini (misal: index.html, about.html)
    const path = window.location.pathname;
    const currentFile =
      path.substring(path.lastIndexOf("/") + 1) || "P14/index.html"; // Default ke index.html

    navLinks.forEach((link) => {
      link.classList.remove("active");
      const linkPage = link.getAttribute("data-page");

      // Jika link sesuai dengan nama file saat ini, tambahkan kelas 'active'
      if (linkPage === currentFile) {
        link.classList.add("active");
      }
    });
  }

  // Jalankan saat halaman dimuat
  setActiveLink();

  // 2. Setup Form Submission (Simulasi) - Hanya untuk halaman contact.html
  if (contactForm && messageBox) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Mencegah form dikirim secara default

      // Tampilkan pesan loading
      messageBox.classList.remove("hidden", "success-message");
      messageBox.classList.add("loading-message");
      messageBox.innerHTML = "Mengirim pesan...";

      // Simulasikan proses pengiriman data ke server selama 1.5 detik
      setTimeout(() => {
        // Tampilkan pesan sukses
        messageBox.classList.remove("loading-message");
        messageBox.classList.add("success-message");
        messageBox.innerHTML =
          "<strong>Pesan Berhasil Terkirim!</strong> Terima kasih. Saya akan merespons secepatnya.";

        // Reset form setelah sukses
        contactForm.reset();

        // Sembunyikan pesan sukses setelah 5 detik
        setTimeout(() => {
          messageBox.classList.add("hidden");
        }, 5000);
      }, 1500); // 1.5 detik simulasi
    });
  }
});
