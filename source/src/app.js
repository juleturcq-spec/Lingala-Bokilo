// Enregistrement du service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/source/sw.js")
      .then(() => console.log("Service Worker enregistré"))
      .catch(err => console.log("Erreur SW:", err));
  });
}

console.log("Lingala Bokilo prêt 🚀");
