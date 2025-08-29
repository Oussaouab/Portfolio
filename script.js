// Attendre que le DOM soit prêt
document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ script.js chargé avec succès");

  // Mettre l'année courante dans le footer
  const y = document.getElementById('year');
  if (y) {
    y.textContent = new Date().getFullYear();
  }

  // Activer le scroll doux uniquement pour les ancres internes (#)
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const h = a.getAttribute('href');

      if (h && h.startsWith('#')) {
        const el = document.querySelector(h);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
