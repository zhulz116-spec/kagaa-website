const products = {
  "coffee-cups": {
    name: "Coffee Cups",
    cat: "Kitchen & Dining",
    gallery: ["mug1.jpg", "mug2.jpg", "mug3.jpg", "mug4.jpg", "mug5.jpg"],
    desc: "500ml 304 Stainless Steel Camping Coffee Cup",
    material: "304 Stainless steel",
    size: "Approx. 500 ml",
    long: "500ml Compact 304 Stainless Steel Outdoor Camping Coffee Cup",
  },
  "mixing-bowls": {
    name: "Mixing Bowls Set",
    cat: "Kitchen & Dining",
    gallery: [
      "mixing-bowls.jpg",
      "mixing-bowls-2.jpg",
      "mixing-bowls-3.jpg",
      "mixing-bowls-4.jpg",
      "mixing-bowls-5.jpg",
      "mixing-bowls-6.jpg",
      "mixing-bowls-7.jpg",
      "mixing-bowls-8.jpg",
    ],
    desc: "6 Pcs Mixing Bowls Set with Airtight Lid ",
    material: "Stainless steel",
    size: "Multi-size set",
    long: "6 Pcs Mixing Bowls Set with Airtight Lid and Silicone Base，Salad Dough Baking Bowl,Stainless Steel Metal Mixing Bowls with 3 Grater Attachments,for Mixing，Serving，Baking and Cooking",
  },
  "matcha-ritual": {
    name: "Matcha Tea Set",
    cat: "Kitchen & Dining",
    gallery: [
      "mocha1.jpg",
      "mocha2.jpg",
      "mocha3.jpg",
      "mocha4.jpg",
      "mocha5.jpg",
      "mocha6.jpg",
    ],
    desc: "A considered set for preparing and enjoying matcha at home.",
    material: "Ceramic / bamboo / stainless steel",
    size: "Set",
    long: "A complete matcha setup that brings the preparation ritual into the home with a calm, tactile combination of ceramic, bamboo and stainless steel.",
  },
  "table-runner-green": {
    name: "Table Runner",
    cat: "Kitchen & Dining",
    gallery: [
      "table-runner-green.jpg",
      "table-runner-green2.jpg",
      "table-runner-green3.jpg",
      "table-runner-green4.jpg",
      "table-runner-green5.jpg",
      "table-runner-green6.jpg",
      "table-runner-green7.jpg",
    ],
    desc: "Soft, understated table textile designed to layer into everyday dining.",
    material: "Polyester",
    size: "75 x 400 cm",
    long: "A light decorative layer for dining tables and gatherings, designed to work with contemporary table settings.",
  },

  "table-runner-glod": {
    name: "Table Runner",
    cat: "Kitchen & Dining",
    gallery: [
      "table-runner-gold.jpg",
      "table-runner-gold2.jpg",
      "table-runner-gold3.jpg",
      "table-runner-gold4.jpg",
      "table-runner-gold5.jpg",
      "table-runner-gold6.jpg",
    ],
    desc: "Soft, understated table textile designed to layer into everyday dining.",
    material: "Polyester",
    size: "75 x 400 cm",
    long: "A light decorative layer for dining tables and gatherings, designed to work with contemporary table settings.",
  },
  "storage-bag": {
    name: "Storage Bag",
    cat: "Home & Living",
    gallery: [
      "storage-bag.jpg",
      "storage-bag-2.jpg",
      "storage-bag-3.jpg",
      "storage-bag-4.jpg",
      "storage-bag-5.jpg",
      "storage-bag-6.jpg",
      "storage-bag-7.jpg",
    ],
    desc: "3 pcs large-capacity storage for bedding, clothing and seasonal organisation.",
    material: "PP woven fabric",
    size: "92 L",
    long: "A practical large-format storage solution for bedding, clothing and seasonal household organisation.",
  },
  "vacuum-storage": {
    name: "Vacuum Storage Bags",
    cat: "Home & Living",
    gallery: [
      "Vacuum-bag-1.jpg",
      "Vacuum-bag-2.jpg",
      "Vacuum-bag-3.jpg",
      "Vacuum-bag-4.jpg",
      "Vacuum-bag-5.jpg",
      "Vacuum-bag-6.jpg",
      "Vacuum-bag-7.jpg",
      "Vacuum-bag-8.jpg",
    ],
    desc: "Space-saving storage designed for seasonal clothing and textiles.",
    material: "PA + PE",
    size: "Multiple sizes",
    long: "Designed to reduce storage volume and keep seasonal textiles organised when space matters.",
  },
  "resistance-bands": {
    name: "Resistance Bands",
    cat: "Active Living",
    gallery: [
      "resistance-band.jpg",
      "resistance-band-2.jpg",
      "resistance-band-3.jpg",
      "resistance-band-4.jpg",
      "resistance-band-5.jpg",
      "resistance-band-6.jpg",
    ],
    desc: "A compact resistance training set for movement at home or on the go.",
    material: "TPE / textile",
    size: "Multiple resistance levels",
    long: "A compact training system with multiple resistance levels for flexible home and travel workouts.",
  },
  "suit-bags": {
    name: "Suit Bags",
    cat: "Home & Living",
    gallery: [
      "suit-bag.jpg",
      "suit-bag-2.jpg",
      "suit-bag-3.jpg",
      "suit-bag-4.jpg",
      "suit-bag-5.jpg",
      "suit-bag-6.jpg",
      "suit-bag-7.jpg",
    ],
    desc: "Spacious storage solution for organising suits and formal wear.",
    material: "Nonwoven",
    size: "180x120x80cm /2 suits",
    long: "A practical storage solution for keeping suits and formal wear organised and protected.",
  },
  "steel-cups": {
    name: "Steel Cups",
    cat: "Kitchen & Dining",
    gallery: [
      "cup1.jpg",
      "cup2.jpg",
      "cup3.jpg",
      "cup4.jpg",
      "cup5.jpg",
      "cup6.jpg",
      "cup7.jpg",
      "cup8.jpg",
    ],
    desc: "Minimal stainless steel drinkware with a clean geometric profile.",
    material: "304 Stainless steel",
    size: "Approx. 470 ml",
    long: "A simple, durable drinking vessel designed for everyday use. The restrained silhouette keeps the product visually quiet while the stainless-steel construction makes it practical for daily routines.",
  },
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
  console.log(img.src, "img.srcimg.srcimg.srcimg.srcimg.src");
  img.alt = p.name + " — image " + (index + 1);

  document.querySelectorAll(".thumb").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });

  counter.textContent =
    p.gallery.length > 1 ? `${index + 1} / ${p.gallery.length}` : "";
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
  button.innerHTML = `<img src="images/${file}" alt="${p.name} thumbnail ${i + 1}">`;
  button.addEventListener("click", () => showImage(i));
  thumbs.appendChild(button);
});

document
  .getElementById("prevBtn")
  .addEventListener("click", () => showImage(index - 1));
document
  .getElementById("nextBtn")
  .addEventListener("click", () => showImage(index + 1));

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") showImage(index - 1);
  if (e.key === "ArrowRight") showImage(index + 1);
});

let startX = null;
const viewport = document.getElementById("galleryViewport");
viewport.addEventListener(
  "touchstart",
  (e) => {
    startX = e.touches[0].clientX;
  },
  { passive: true },
);
viewport.addEventListener("touchend", (e) => {
  if (startX === null) return;
  const dx = e.changedTouches[0].clientX - startX;
  if (Math.abs(dx) > 45) showImage(index + (dx < 0 ? 1 : -1));
  startX = null;
});

showImage(0, false);
