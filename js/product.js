const products = {
  "steel-cups": {
    name:"Everyday Steel Cups",
    cat:"Kitchen & Dining",
    gallery:["cup.jpg"],
    desc:"Minimal stainless steel drinkware with a clean geometric profile.",
    material:"Stainless steel",
    size:"Approx. 470 ml",
    long:"A simple, durable drinking vessel designed for everyday use. The restrained silhouette keeps the product visually quiet while the stainless-steel construction makes it practical for daily routines."
  },
  "mixing-bowls": {
    name:"Mixing Bowl Collection",
    cat:"Kitchen & Dining",
    gallery:["mixing-bowls.jpg"],
    desc:"A practical family of stainless steel bowls for everyday preparation.",
    material:"Stainless steel",
    size:"Multi-size set",
    long:"A coordinated set of mixing bowls designed to stack neatly and work across everyday kitchen preparation."
  },
  "matcha-ritual": {
    name:"Matcha Ritual Set",
    cat:"Kitchen & Dining",
    gallery:["matcha-set.jpg","matcha-detail.jpg"],
    desc:"A considered set for preparing and enjoying matcha at home.",
    material:"Ceramic / bamboo / stainless steel",
    size:"Set",
    long:"A complete matcha setup that brings the preparation ritual into the home with a calm, tactile combination of ceramic, bamboo and stainless steel."
  },
  "table-runner": {
    name:"Table Runner",
    cat:"Kitchen & Dining",
    gallery:["table-runner.jpg"],
    desc:"Soft, understated table textile designed to layer into everyday dining.",
    material:"Textile",
    size:"Multiple lengths",
    long:"A light decorative layer for dining tables and gatherings, designed to work with contemporary table settings."
  },
  "storage-bag": {
    name:"Everyday Storage Bag",
    cat:"Home & Living",
    gallery:["storage-bag.jpg"],
    desc:"Large-capacity storage for bedding, clothing and seasonal organisation.",
    material:"PP woven fabric",
    size:"92 L",
    long:"A practical large-format storage solution for bedding, clothing and seasonal household organisation."
  },
  "vacuum-storage": {
    name:"Vacuum Storage Bags",
    cat:"Home & Living",
    gallery:["vacuum-storage.jpg"],
    desc:"Space-saving storage designed for seasonal clothing and textiles.",
    material:"PA + PE",
    size:"Multiple sizes",
    long:"Designed to reduce storage volume and keep seasonal textiles organised when space matters."
  },
  "resistance-bands": {
    name:"Resistance Bands",
    cat:"Active Living",
    gallery:["resistance-bands.webp"],
    desc:"A compact resistance training set for movement at home or on the go.",
    material:"TPE / textile",
    size:"Multiple resistance levels",
    long:"A compact training system with multiple resistance levels for flexible home and travel workouts."
  }
};

const id = new URLSearchParams(location.search).get("id");
const p = products[id] || products["steel-cups"];

const img = document.getElementById("detailImg");
const thumbs = document.getElementById("thumbs");
const counter = document.getElementById("galleryCounter");
let index = 0;

function showImage(nextIndex, animate = true) {
  index = (nextIndex + p.gallery.length) % p.gallery.length;
  img.classList.remove("is-changing");
  if (animate) {
    requestAnimationFrame(() => img.classList.add("is-changing"));
  }
  img.src = "images/" + p.gallery[index];
  img.alt = p.name + " — image " + (index + 1);

  document.querySelectorAll(".thumb").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });

  counter.textContent = p.gallery.length > 1 ? `${index + 1} / ${p.gallery.length}` : "";
}

document.getElementById("detailCat").textContent = p.cat;
document.getElementById("detailName").textContent = p.name;
document.getElementById("detailDesc").textContent = p.desc;
document.getElementById("detailMaterial").textContent = p.material;
document.getElementById("detailSize").textContent = p.size;
document.getElementById("detailLong").textContent = p.long;
document.getElementById("crumb").textContent = p.name;
document.getElementById("crumbCat").textContent = p.cat;
document.getElementById("year").textContent = new Date().getFullYear();

p.gallery.forEach((file, i) => {
  const button = document.createElement("button");
  button.className = "thumb";
  button.type = "button";
  button.innerHTML = `<img src="images/${file}" alt="${p.name} thumbnail ${i+1}">`;
  button.addEventListener("click", () => showImage(i));
  thumbs.appendChild(button);
});

document.getElementById("prevBtn").addEventListener("click", () => showImage(index - 1));
document.getElementById("nextBtn").addEventListener("click", () => showImage(index + 1));

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") showImage(index - 1);
  if (e.key === "ArrowRight") showImage(index + 1);
});

let startX = null;
const viewport = document.getElementById("galleryViewport");
viewport.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, {passive:true});
viewport.addEventListener("touchend", e => {
  if (startX === null) return;
  const dx = e.changedTouches[0].clientX - startX;
  if (Math.abs(dx) > 45) showImage(index + (dx < 0 ? 1 : -1));
  startX = null;
});

showImage(0, false);
