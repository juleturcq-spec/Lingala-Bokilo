import { loadState, saveState, ensureDefaults } from "./db.js";
import { nextReview, dueNow } from "./srs.js";
import { el, toast } from "./ui.js";

let state = ensureDefaults(loadState());
let seed = null;
let currentTab = "home";

async function init(){
  if ("serviceWorker" in navigator){
    try { await navigator.serviceWorker.register("./sw.js"); } catch {}
  }

  seed = await fetch("./data/seed.json").then(r=>r.json());

  wireTabs();
  render();
}

init();

function save(){ saveState(state); }

function wireTabs(){
  document.querySelectorAll(".tab").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      currentTab = btn.dataset.tab;
      render();
    });
  });
}

function render(){
  const app = document.getElementById("app");
  app.innerHTML = "";

  if(currentTab === "home"){
    app.append(el(`<div class="card">
      <div class="h1">Bienvenue sur Lingala Bokilo</div>
      <div class="small">Application offline pour apprendre le lingala de Kinshasa.</div>
    </div>`));
  }

  if(currentTab === "lessons"){
    app.append(el(`<div class="card">
      <div class="h1">Leçons</div>
      <div class="small">Les leçons apparaîtront ici.</div>
    </div>`));
  }

  if(currentTab === "review"){
    app.append(el(`<div class="card">
      <div class="h1">Révision</div>
      <div class="small">SRS en préparation.</div>
    </div>`));
  }

  if(currentTab === "music"){
    app.append(el(`<div class="card">
      <div class="h1">Musiques</div>
      <div class="small">Liens légaux Apple Music / Spotify.</div>
    </div>`));
  }

  if(currentTab === "profile"){
    app.append(el(`<div class="card">
      <div class="h1">Profil</div>
      <div class="small">Configuration Supabase bientôt.</div>
    </div>`));
  }
}
